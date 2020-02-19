require('./init');
const express = require('express');
const formidable = require('formidable');
const winston = require('winston')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
const fs = require('fs');
const async = require('async')
const mongoose = require('mongoose');
const models = require('./models')
const config = require('./config');

const database = config.getConf("DB_NAME")
const mongoUser = config.getConf("DB_USER")
const mongoPasswd = config.getConf("DB_PASSWORD")
const mongoHost = config.getConf("DB_HOST")
const mongoPort = config.getConf("DB_PORT")

const app = express();
const server = require('http').createServer(app);

let jwtValidator = function (req, res, next) {
  if (req.method == "OPTIONS" ||
    req.path == "/add-trainee/" ||
    req.path == "/authenticate/" ||
    req.path == "/addUser/" ||
    req.path == "/getModule1Report" ||
    req.path == "/getModule2Report" ||
    req.path == "/saveModule1Answers/" ||
    req.path == "/saveModule2Answers/"
  ) {
    return next()
  }
  if (!req.headers.authorization || req.headers.authorization.split(' ').length !== 2) {
    winston.error("Token is missing")
    res.set('Access-Control-Allow-Origin', '*')
    res.set('WWW-Authenticate', 'Bearer realm="Token is required"')
    res.set('charset', 'utf - 8')
    res.status(401).json({
      error: 'Token is missing'
    })
  } else {
    tokenArray = req.headers.authorization.split(' ')
    let token = req.headers.authorization = tokenArray[1]
    jwt.verify(token, config.getConf('auth:secret'), (err, decoded) => {
      if (err) {
        winston.warn("Token expired")
        res.set('Access-Control-Allow-Origin', '*')
        res.set('WWW-Authenticate', 'Bearer realm="Token expired"')
        res.set('charset', 'utf - 8')
        res.status(401).json({
          error: 'Token expired'
        })
      } else {
        // winston.info("token is valid")
        if (req.path == "/isTokenActive/") {
          res.set('Access-Control-Allow-Origin', '*')
          res.status(200).send(true)
        } else {
          return next()
        }
      }
    })
  }
}

app.use(jwtValidator)
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use(cors({
  origin: true,
  credentials: true
}));

if (mongoUser && mongoPasswd) {
  var uri = `mongodb://${mongoUser}:${mongoPasswd}@${mongoHost}:${mongoPort}/${database}`;
} else {
  var uri = `mongodb://${mongoHost}:${mongoPort}/${database}`;
}

mongoose.connect(uri, { useNewUrlParser: true });
let db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
  models.UsersModel.find({
    userName: "root@intrahealth.org"
  }).lean().exec((err, data) => {
    if (data.length == 0) {
      winston.info("Default user not found, adding now ...")
      let roles = [{
          "name": "Admin"
        },
        {
          "name": "Player"
        }
      ]
      models.RolesModel.collection.insertMany(roles, (err, data) => {
        models.RolesModel.find({
          name: "Admin"
        }, (err, data) => {
          let User = new models.UsersModel({
            firstName: "Root",
            surname: "Root",
            userName: "root@intrahealth.org",
            status: "Active",
            role: data[0]._id,
            password: bcrypt.hashSync("intrahealth", 8)
          })
          User.save((err, data) => {
            if (err) {
              winston.error(err)
              winston.error('Unexpected error occured,please retry')
            } else {
              winston.info('Admin User added successfully')
            }
          })
        })
      })
    }
  })
});

app.post('/add-trainee', (req, res) => {
  winston.info("Adding a new trainee");

  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (mongoUser && mongoPasswd) {
      var uri = `mongodb://${mongoUser}:${mongoPasswd}@${mongoHost}:${mongoPort}/${database}`;
    } else {
      var uri = `mongodb://${mongoHost}:${mongoPort}/${database}`;
    }

    mongoose.connect(uri, {}, () => {
      let Trainee = new models.TraineeModel({
        startDate: fields.startDate,
        endDate: fields.endDate,
        cadre: fields.cadre,
        trainingType: fields.trainingType,
        region: fields.region,
        district: fields.district,
        sessionId: fields.sessionId
      });

      Trainee.save((err, data) => {
        if (err) {
          winston.error(err);
          winston.error('Unexpected error occured,please retry');
          res.status(400).send();
        } else {
          winston.info('Trainee added successfully');
          res.status(200).send(data);
        }
      });
    });
  });
});

app.post('/authenticate', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    winston.info('Authenticating user ' + fields.username)

    if (mongoUser && mongoPasswd) {
      var uri = `mongodb://${mongoUser}:${mongoPasswd}@${mongoHost}:${mongoPort}/${database}`;
    } else {
      var uri = `mongodb://${mongoHost}:${mongoPort}/${database}`;
    }
    mongoose.connect(uri);
    let db = mongoose.connection
    db.on("error", console.error.bind(console, "connection error:"))
    db.once("open", () => {
      models.UsersModel.find({
        userName: fields.username,
        status: 'Active'
      }).lean().exec((err, data) => {
        if (data.length === 1) {
          let userID = data[0]._id.toString()

          let tokenDuration = config.getConf('auth:tokenDuration')
          let secret = config.getConf('auth:secret')
          let token = jwt.sign({
            id: data[0]._id.toString()
          }, secret, {
            expiresIn: tokenDuration
          });

          // get role name
          models.RolesModel.find({
            _id: data[0].role
          }).lean().exec((err, roles) => {
            let role = null
            if (roles.length === 1) {
              role = roles[0].name
            }
            winston.info('Successfully Authenticated user ' + fields.username)
            res.status(200).json({
              token,
              role,
              userID
            })
          });
        } else {
          winston.info('Failed Authenticating user ' + fields.username)
          res.status(200).json({
            token: null,
            role: null,
            userID: null
          })
        }
      })
    })
  })
})

app.post('/addUser', (req, res) => {
  winston.info("Received a signup request")
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {

    if (mongoUser && mongoPasswd) {
      var uri = `mongodb://${mongoUser}:${mongoPasswd}@${mongoHost}:${mongoPort}/${database}`;
    } else {
      var uri = `mongodb://${mongoHost}:${mongoPort}/${database}`;
    }

    mongoose.connect(uri, {}, () => {
      models.RolesModel.find({
        name: "Player"
      }, (err, data) => {
        if (data) {
          let role = fields.role
          if(!role) {
            role = data[0]._id
          }
          let User = new models.UsersModel({
            role: role,
            firstName: fields.firstName,
            otherName: fields.otherName,
            surname: fields.surname,
            organization: fields.organization,
            password: bcrypt.hashSync(fields.password, 8),
            userName: fields.userName,
            status: 'Active'
          })
          User.save((err, data) => {
            if (err) {
              winston.error(err)
              winston.error('Unexpected error occured,please retry')
              res.status(400).send()
            } else {
              winston.info('User added successfully')
              res.status(200).send()
            }
          })
        }
        else {
          if (err) {
            winston.error(err)
          }
          res.status(500).json({
            error: "Internal error occured"
          })
        }
      })
    })
  })
})

app.post('/saveModule1Answers', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (mongoUser && mongoPasswd) {
      var uri = `mongodb://${mongoUser}:${mongoPasswd}@${mongoHost}:${mongoPort}/${database}`;
    } else {
      var uri = `mongodb://${mongoHost}:${mongoPort}/${database}`;
    }

    fields.answers = JSON.parse(fields.answers)
    fields.clientsMood = JSON.parse(fields.clientsMood)

    mongoose.connect(uri, {}, () => {
      models.module1AnswersModel.find({sessionID: fields.sessionID, player: fields.traineeID}, (err, data) => {
        if (typeof data == "undefined" || data.length == 0) {
          const answers = new models.module1AnswersModel({
            player: fields.traineeID,
            sessionID: fields.sessionID,
            answers: fields.answers
          })
          answers.save((err, data) => {
            if (err) {
              winston.error(err)
              res.status(500).json({
                error: "Internal error occured"
              })
            } else {
              winston.info('Answer saved successfully')
              res.status(200).send()
            }
          })
        } else {
          models.module1AnswersModel.update({sessionID: fields.sessionID, player: fields.traineeID}, {
            $set: {
              answers: fields.answers,
              clientsMood: fields.clientsMood
            }
          }, (err, data) => {
            if (err) {
              winston.error(err)
              res.status(500).json({
                error: "Internal error occured"
              })
            } else {
              winston.info('Answer saved successfully')
              res.status(200).send()
            }
          })
        }
      })
    })
  })
})

app.post('/saveModule2Answers', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (mongoUser && mongoPasswd) {
      var uri = `mongodb://${mongoUser}:${mongoPasswd}@${mongoHost}:${mongoPort}/${database}`;
    } else {
      var uri = `mongodb://${mongoHost}:${mongoPort}/${database}`;
    }
    fields.answers = JSON.parse(fields.answers)
    mongoose.connect(uri, {}, () => {
      models.module2AnswersModel.find({sessionID: fields.sessionID, player: fields.traineeID}, (err, data) => {
        if (typeof data == "undefined" || data.length == 0) {
          const answers = new models.module2AnswersModel({
            player: fields.traineeID,
            sessionID: fields.sessionID,
            answers: fields.answers
          })
          answers.save((err, data) => {
            if (err) {
              winston.error(err)
              res.status(500).json({
                error: "Internal error occured"
              })
            } else {
              winston.info('Answer saved successfully')
              res.status(200).send()
            }
          })
        } else {
          models.module2AnswersModel.update({sessionID: fields.sessionID, player: fields.traineeID}, {
            $set: {
              answers: fields.answers,
              accummulatedPoints: fields.accummulatedPoints
            }
          }, (err, data) => {
            if (err) {
              winston.error(err)
              res.status(500).json({
                error: "Internal error occured"
              })
            } else {
              winston.info('Answer saved successfully')
              res.status(200).send()
            }
          })
        }
      })
    })
  })
})

app.get('/getModule1Report', (req, res) => {
  winston.info('Received a request to get module 1 report')
  let startDate = req.query.startDate + 'T00:00:00';
  let endDate = req.query.endDate + 'T23:59:59';
  let cadre = req.query.cadre;
  let training = req.query.trainingType;
  let district = req.query.district;
  let region = req.query.region;

  let personQuery = {};

  if (district) {
    personQuery.district = district;
  }

  if (region) {
    personQuery.region = region;
  }

  if (cadre) {
    personQuery.cadre = cadre;
  }

  if (training) {
    personQuery.trainingType = training;
  };

  models.TraineeModel.find(personQuery).then(trainees => {
    let traineeIds = [];
    let query = {
      date: {
        $gte: startDate,
        $lte: endDate
      }
    };

    trainees.forEach(trainee => {
      traineeIds.push(trainee._id);
    });

    query.player = {
      $in: traineeIds
    };

    models.module1AnswersModel.find(query, {
      answers: 1,
      clientsMood: 1
    }, (err, answers) => {
      try {
        answers = JSON.parse(JSON.stringify(answers));
      } catch (error) {
        winston.error(error)
      }

      if (answers && answers.length) {
        res.status(200).json(answers);
      } else {
        res.status(200).json([])
      }
    });
  });
})

app.get('/getModule2Report', (req, res) => {
  winston.info('Received a request to get module 2 report')
  let startDate = req.query.startDate + 'T00:00:00';
  let endDate = req.query.endDate + 'T23:59:59';
  let cadre = req.query.cadre;
  let training = req.query.trainingType;
  let district = req.query.district;
  let region = req.query.region;

  let personQuery = {};

  if (district) {
    personQuery.district = district;
  }

  if (region) {
    personQuery.region = region;
  }

  if (cadre) {
    personQuery.cadre = cadre;
  }

  if (training) {
    personQuery.trainingType = training;
  };

  models.TraineeModel.find(personQuery).then(trainees => {
    let traineeIds = [];
    let query = {
      date: {
        $gte: startDate,
        $lte: endDate
      }
    };

    trainees.forEach(trainee => {
      traineeIds.push(trainee._id);
    });

    query.player = {
      $in: traineeIds
    };

    models.module2AnswersModel.find(query, {
      answers: 1,
      accummulatedPoints: 1
    }, (err, answers) => {
      try {
        answers = JSON.parse(JSON.stringify(answers));
      } catch (error) {
        winston.error(error)
      }

      if (answers && answers.length) {
        res.status(200).json(answers);
      } else {
        res.status(200).json([])
      }
    });
  });
});

app.post('/saveModule1Question', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    let module1 = require("../../frontend/src/components/questions/module1.js")
    let client = fields.client
    let nxtClient
    if (client === 'clientA') {
      nxtClient = 'clientB'
    } else if (client === 'clientB') {
      nxtClient = 'clientC'
    } else {
      nxtClient = null
    }
    let situationText = fields.situationText
    let choice1 = fields.choice1
    let choice1Comment = fields.choice1Comment
    let choice1Impact = fields.choice1Impact
    let choice2 = fields.choice2
    let choice2Comment = fields.choice2Comment
    let choice2Impact = fields.choice2Impact
    let choice3 = fields.choice3
    let choice3Comment = fields.choice3Comment
    let choice3Impact = fields.choice3Impact
    let qnNumber = Object.keys(module1[client]).length
    if (files.hasOwnProperty('image')) {
      let destination = __dirname + "/../../frontend/src/components/questions/images/"
      let file_name = "module1" + client + qnNumber + files.image.name
      fs.copyFile(files.image.path, destination + file_name, function (err) {
        if (err) {
          winston.error(err)
        } else {
          winston.info("Image copied successfully")
        }
      })
    }

    if (qnNumber - 1 >= 0) {
      module1[client][qnNumber - 1].nextMove = qnNumber
    }
    module1[client][qnNumber] = {}
    module1[client][qnNumber].situationText = situationText
    module1[client][qnNumber].choices = []
    module1[client][qnNumber].choices.push({
      'choiceText': choice1,
      'comment': choice1Comment,
      'impact': choice1Impact
    })
    module1[client][qnNumber].choices.push({
      'choiceText': choice2,
      'comment': choice2Comment,
      'impact': choice2Impact
    })
    module1[client][qnNumber].choices.push({
      'choiceText': choice3,
      'comment': choice3Comment,
      'impact': choice3Impact
    })
    let prevMove
    if (qnNumber - 1 >= 0) {
      prevMove = qnNumber - 1
    } else {
      prevMove = null
    }
    module1[client][qnNumber].nextMove = nxtClient
    module1[client][qnNumber].prevMove = prevMove
    module1 = "module.exports = " + JSON.stringify(module1)
    fs.writeFile(__dirname + "/../../frontend/src/components/questions/module1.js", module1, (err) => {
      if (!err) {
        winston.info("Question added successfully")
        res.status(200).send("Question added")
      } else {
        winston.error(err)
        res.status(400).send("Failed to add question")
      }
    })
  })
})
app.post('/saveModule2Question', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    let module2 = require("../../frontend/src/components/questions/module2.js")
    let situationText = fields.situationText
    let choice1 = fields.choice1
    let choice1Comment = fields.choice1Comment
    let choice1Correct = fields.choice1Correct
    let choice1Impact = fields.choice1Impact
    let choice1Bonus = fields.choice1Bonus
    let choice2 = fields.choice2
    let choice2Comment = fields.choice2Comment
    let choice2Correct = fields.choice2Correct
    let choice2Impact = fields.choice2Impact
    let choice2Bonus = fields.choice2Bonus
    let choice3 = fields.choice3
    let choice3Comment = fields.choice3Comment
    let choice3Correct = fields.choice3Correct
    let choice3Impact = fields.choice3Impact
    let choice3Bonus = fields.choice3Bonus
    let qnNumber = Object.keys(module2).length
    if (files.hasOwnProperty('image')) {
      let destination = __dirname + "/../../frontend/src/components/questions/images/"
      let file_name = "module2" + qnNumber + files.image.name
      fs.copyFile(files.image.path, destination + file_name, function (err) {
        if (err) {
          winston.error(err)
        } else {
          winston.info("Image copied successfully")
        }
      })
    }

    if (qnNumber - 1 >= 0) {
      module2[qnNumber - 1].nextMove = qnNumber
    }
    module2[qnNumber] = {}
    module2[qnNumber].situationText = situationText
    module2[qnNumber].choices = []
    module2[qnNumber].choices.push({
      'choiceText': choice1,
      'comment': choice1Comment,
      'correct': choice1Correct,
      'impact': choice1Impact,
      'bonus': choice1Bonus
    })
    if (fields.subchoice11 || fields.subchoice12 || fields.subchoice13) {
      module2[qnNumber].choices[0].choices = []
      if (fields.subchoice11) {
        module2[qnNumber].choices[0].choices.push({
          'choiceText': fields.subchoice11,
          'correct': fields.subchoice11Correct,
          'impact': fields.subchoice11Impact,
          'bonus': fields.subchoice11Bonus
        })
      }
      if (fields.subchoice12) {
        module2[qnNumber].choices[0].choices.push({
          'choiceText': fields.subchoice12,
          'correct': fields.subchoice12Correct,
          'impact': fields.subchoice12Impact,
          'bonus': fields.subchoice12Bonus
        })
      }
      if (fields.subchoice13) {
        module2[qnNumber].choices[0].choices.push({
          'choiceText': fields.subchoice13,
          'correct': fields.subchoice13Correct,
          'impact': fields.subchoice13Impact,
          'bonus': fields.subchoice13Bonus
        })
      }
    }
    module2[qnNumber].choices.push({
      'choiceText': choice2,
      'comment': choice2Comment,
      'correct': choice2Correct,
      'impact': choice2Impact,
      'bonus': choice2Bonus
    })
    if (fields.subchoice21 || fields.subchoice22 || fields.subchoice23) {
      module2[qnNumber].choices[1].choices = []
      if (fields.subchoice21) {
        module2[qnNumber].choices[1].choices.push({
          'choiceText': fields.subchoice21,
          'correct': fields.subchoice21Correct,
          'impact': fields.subchoice21Impact,
          'bonus': fields.subchoice21Bonus
        })
      }
      if (fields.subchoice22) {
        module2[qnNumber].choices[1].choices.push({
          'choiceText': fields.subchoice22,
          'correct': fields.subchoice22Correct,
          'impact': fields.subchoice22Impact,
          'bonus': fields.subchoice22Bonus
        })
      }
      if (fields.subchoice23) {
        module2[qnNumber].choices[1].choices.push({
          'choiceText': fields.subchoice23,
          'correct': fields.subchoice23Correct,
          'impact': fields.subchoice23Impact,
          'bonus': fields.subchoice23Bonus
        })
      }
    }
    module2[qnNumber].choices.push({
      'choiceText': choice3,
      'comment': choice3Comment,
      'correct': choice3Correct,
      'impact': choice3Impact,
      'bonus': choice3Bonus
    })
    if (fields.subchoice31 || fields.subchoice32 || fields.subchoice33) {
      module2[qnNumber].choices[2].choices = []
      if (fields.subchoice31) {
        module2[qnNumber].choices[2].choices.push({
          'choiceText': fields.subchoice31,
          'correct': fields.subchoice31Correct,
          'impact': fields.subchoice31Impact,
          'bonus': fields.subchoice31Bonus
        })
      }
      if (fields.subchoice32) {
        module2[qnNumber].choices[2].choices.push({
          'choiceText': fields.subchoice32,
          'correct': fields.subchoice32Correct,
          'impact': fields.subchoice32Impact,
          'bonus': fields.subchoice32Bonus
        })
      }
      if (fields.subchoice33) {
        module2[qnNumber].choices[2].choices.push({
          'choiceText': fields.subchoice33,
          'correct': fields.subchoice33Correct,
          'impact': fields.subchoice33Impact,
          'bonus': fields.subchoice33Bonus
        })
      }
    }
    let prevMove
    if (qnNumber - 1 >= 0) {
      prevMove = qnNumber - 1
    } else {
      prevMove = null
    }
    module2[qnNumber].nextMove = null
    module2[qnNumber].prevMove = prevMove
    module2 = "module.exports = " + JSON.stringify(module2)
    fs.writeFile(__dirname + "/../../frontend/src/components/questions/module2.js", module2, (err) => {
      if (!err) {
        winston.info("Question added successfully")
        res.status(200).send("Question added")
      } else {
        winston.error(err)
        res.status(400).send("Failed to add question")
      }
    })
  })
})
server.listen(config.getConf('server:port'));
winston.info(`Server is running and listening on port ${config.getConf('server:port')}`);
