const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Roles = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
})

let Users = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  otherName: {
    type: String
  },
  surname: {
    type: String,
    required: true
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Roles',
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  lastModified: {
    type: Date
  }
})
let module1Answers = new mongoose.Schema({
  player: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  sessionID: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  answers: {
    type: Object
  },
  clientsMood: {
    type: Object
  }
})

let module2Answers = new mongoose.Schema({
  player: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  sessionID: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  answers: {
    type: Object
  },
  accummulatedPoints: {
    type: Number
  }
})

let RolesModel = mongoose.model('Roles', Roles)
let UsersModel = mongoose.model('Users', Users)
let module1AnswersModel = mongoose.model('module1Answers', module1Answers)
let module2AnswersModel = mongoose.model('module2Answers', module2Answers)
module.exports = {
  UsersModel,
  RolesModel,
  module1AnswersModel,
  module2AnswersModel
}