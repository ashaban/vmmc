<template>
	<v-container>
    <v-dialog persistent v-model="commentDialog" max-width="500px">
			<v-card>
				<v-toolbar color="primary" dark>
					<v-toolbar-title>
						Comment
					</v-toolbar-title>
				</v-toolbar>
				<v-card-text v-html="comment">
				</v-card-text>
				<v-card-actions>
					<v-btn color="primary" @click.native="commentDialog = false">Ok</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
    <v-alert type="info" :value="true" v-if="$store.state.moduleProgress.one.status === 'done'">
      <b>Congratulations</b>
      <p>
        You have Completed Module 1
      </p>
    </v-alert>
		<v-dialog
			v-model="moduleCompleted"
			persistent
			max-width="500px"
			transition="dialog-transition"
		>
			<v-card>
				<v-toolbar color="success" dark>
					<v-toolbar-title>
						Congratulations!!!
					</v-toolbar-title>
				</v-toolbar>
				<v-card-text>
					You have completed module 1 of the game
				</v-card-text>
				<v-card-actions>
					<v-btn color="success" @click.native="moduleCompleted = false">Ok</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<template>
			<v-layout column>
				<v-flex>
					<v-toolbar color="#566573">
						<v-layout row wrap>
							<v-flex xs4 text-sm-left style="color:white">
							  <b>TOHARA BANGUA BONGO</b>
							</v-flex>
              <v-spacer></v-spacer>
							<v-flex xs1 text-sm-right style="color:white">
								<b>MODULE 1</b>
							</v-flex>
						</v-layout>
					</v-toolbar>
				</v-flex>
				<v-flex id="question" v-show='loadingNextClient'>
					{{client | formatClient}} Coming Now<v-progress-linear v-model="waitingPercent" color="primary" class="mb-0"></v-progress-linear>
				</v-flex>
				<v-flex xs4>
					<div class="clientImg">
						<v-img :aspect-ratio="16/9" :src="getImgUrl()" v-bind:alt="client" max-height="450" height="200"></v-img>
					</div>
				</v-flex>
				<v-flex id="question" height="1" v-show='!loadingNextClient' text-sm-left>
					<b>{{client | formatClient}}</b>
					<v-card class="scroll" height="300">
						<v-card-text>
							<v-layout column>
								<v-flex>
									<v-layout>
										<v-flex xs1>
											{{questionNumber}}
										</v-flex>
										<v-flex xs11 style="text-align:left">
											{{question}}
										</v-flex>
									</v-layout>
								</v-flex>
								<v-flex>
									<div id="answer">
										<v-layout column>
											<template v-for="(choice,index) in choices">
												<v-radio-group v-model="selectedIndex">
													<label style="cursor: pointer;" @click="choiceSelected($event, index)">
														<v-radio :key="index" :ref='index' :value="index" style="font-weight: bold;color: black" :label="choice.choiceText" color="red"></v-radio>
													</label>
												</v-radio-group>
											</template>
										</v-layout>
									</div>
								</v-flex>
							</v-layout>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
			<br><br>
			<v-layout row wrap>
				<v-flex height="500px" style="background-color: white">
					<v-layout row>
						<v-flex xs4 text-sm-left style="margin-top:140px">
              <label @click="loadPrevQuestion()" style="cursor:pointer">
                <img src="../../assets/images/prev.png">
                BACK
              </label>
						</v-flex>
						<v-flex xs4>
							<div class="meter_box" style="height:170px;width:450px"></div>
							<div :class="[moodClass, 'meter_arrow']" style="height:85px;width:400px"></div>
						</v-flex>
						<v-flex xs4 text-sm-right style="margin-top:140px">
              <label @click="checkAnswer()" style="cursor:pointer">
                NEXT<img src="../../assets/images/next.png">
              </label>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</template>
    <v-layout column>
      <v-flex>
        <v-toolbar color="primary">
          <v-layout row wrap>
            <v-flex xs3 style="color: white" text-sm-left v-if="clientsStatus.clientA === 'done'">
              Amani: <label class='clientMoodStatus'>{{clientsMood.clientA}}</label>
            </v-flex>
            <v-flex xs3 style="color: white" text-xs-center v-if="clientsStatus.clientB === 'done'">
              Zabron: <label class='clientMoodStatus'>{{clientsMood.clientB}}</label>
            </v-flex>
            <v-flex xs3 style="color: white" text-sm-right v-if="clientsStatus.clientC === 'done'">
              Anold: <label class='clientMoodStatus'>{{clientsMood.clientC}}</label>
            </v-flex>
            <v-flex xs3 style="position: absolute; right: 0; bottom: 10px">
							<v-btn round color="error" to='/'><v-icon left>cancel</v-icon>Exit Game</v-btn>
            </v-flex>
          </v-layout>
        </v-toolbar>
      </v-flex>
    </v-layout>
	</v-container>
</template>

<script>
import { eventBus } from '../../main'
import axios from 'axios'
import { uuid } from 'vue-uuid'
let module1 = require('../questions/module1.js')
const config = require('../../../config')
const isProduction = process.env.NODE_ENV === 'production'
const backendServer = (isProduction ? config.build.backend : config.dev.backend)
export default {
	data () {
		return {
			moduleCompleted: false,
			sessionID: '',
			question: '',
			comment: '',
			commentDialog: false,
			choices: [],
			gameRunning: false,
			nextQuestion: null,
			prevQuestion: null,
			client: '',
			questionNumber: 1,
			selectedChoice: {},
			selectedIndex: '',
			accummulatedPoints: 0,
			selectedAnswers: {
				clientA: {},
				clientB: {},
				clientC: {}
			},
			clientsMood: {
				clientA: null,
				clientB: null,
				clientC: null
			},
			clientsStatus: {
				clientA: 'pending',
				clientB: 'pending',
				clientC: 'pending'
			},
			clientsImg: {
				clientA: 'Mod1_client-A',
				clientB: 'Mod1_client-B',
				clientC: 'Mod1_client-C'
			},
			loadingNextClient: false,
			waitingPercent: 0,
			mood: 'interested',
			moodClass: 'meter_arrow_interested',
			moods: ['unhappy', 'unsure', 'neutral', 'interested', 'satisfied']
		}
	},
	filters: {
		formatClient (client) {
			if (!client) {
				return client;
			}

      switch (client) {
        case "clientA":
          return "Amani";

        case "clientB":
          return "Zabron";

        case "clientC":
          return "Anold";
      }

			let cltArr = client.split('client');

			if (cltArr.length === 2) {
				return 'Client ' + cltArr[1];
			}

			return client;
		}
	},
	methods: {
		choiceSelected (event, index) {
			// ensure that an answer is not changed
			if (this.selectedAnswers[this.client].hasOwnProperty([this.questionNumber - 1])) {
				index = this.selectedAnswers[this.client][this.questionNumber - 1].answer
			}
			this.selectedChoice = this.choices[index]
			this.selectedIndex = index
			for (let k in this.choices) {
				k = parseInt(k)
				if (k === index) {
					// wait for the vuetify oncahnge event to be called first then reset
					setTimeout(() => {
						this.$refs[k][0].isActive = true
					}, 0)
				} else {
					// wait for the vuetify oncahnge event to be called first then reset
					setTimeout(() => {
						this.$refs[k][0].isActive = false
					}, 0)
				}
			}
		},
		changeMood (marks) {
			let moodIndex = this.moods.indexOf(this.mood)
			moodIndex += marks
			if (this.moods[moodIndex] === undefined) {
				if (moodIndex <= 0) {
					this.mood = 'unhappy'
				} else {
					this.mood = 'satisfied'
				}
			} else {
				this.mood = this.moods[moodIndex]
			}
			if (this.mood === 'satisfied') {
				this.clientsMood[this.client] = 'Satisfied'
				this.moodClass = 'meter_arrow_satisfied'
			} else if (this.mood === 'interested') {
				this.clientsMood[this.client] = 'Interested'
				this.moodClass = 'meter_arrow_interested'
			} else if (this.mood === 'neutral') {
				this.clientsMood[this.client] = 'Neutral'
				this.moodClass = 'meter_arrow_neutral'
			} else if (this.mood === 'unsure') {
				this.clientsMood[this.client] = 'Unsure'
				this.moodClass = 'meter_arrow_unsure'
			} else if (this.mood === 'unhappy') {
				this.clientsMood[this.client] = 'Unhappy'
				this.moodClass = 'meter_arrow_unhappy'
			}
		},
		checkAnswer () {
			if (Object.keys(this.selectedChoice).length === 0) {
				this.$store.state.dialogError = true
				this.$store.state.errorTitle = 'Error'
				this.$store.state.errorDescription = 'Select an answer to proceed'
				return
			}
			if (!this.selectedAnswers[this.client].hasOwnProperty([this.questionNumber - 1])) {
				// make sure player see meter movement before displaying dialog
				setTimeout(() => {
					this.commentDialog = true
				}, 250)
				this.comment = this.selectedChoice.comment
				if (!this.selectedAnswers[this.client].hasOwnProperty(this.questionNumber - 1)) {
					this.selectedAnswers[this.client][this.questionNumber - 1] = {}
				}
				this.selectedAnswers[this.client][this.questionNumber - 1].answer = this.selectedIndex
				this.selectedAnswers[this.client][this.questionNumber - 1].impact = parseInt(this.selectedChoice.impact)
				let marks = parseInt(this.selectedChoice.impact)
				this.accummulatedPoints += marks
				this.changeMood(marks)
			}
			this.selectedChoice = {}
			this.loadNextQuestion()
		},
		loadPrevQuestion () {
			if (this.prevQuestion === null) {
				return
			}
			if (this.prevQuestion === 'clientA' || this.prevQuestion === 'clientB') {
				this.client = this.prevQuestion
				this.prevQuestion = last(Object.keys(module1[this.client]))
				this.questionNumber = this.prevQuestion++
			} else {
				this.questionNumber--
			}
			this.question = module1[this.client][this.prevQuestion].situationText
			this.choices = module1[this.client][this.prevQuestion].choices
			this.nextQuestion = module1[this.client][this.prevQuestion].nextMove
			this.prevQuestion = module1[this.client][this.prevQuestion].prevMove
			if (
				this.selectedAnswers[this.client].hasOwnProperty([this.questionNumber - 1])
			) {
				this.choiceSelected(this.selectedAnswers[this.client][this.questionNumber - 1].answer)
			}
		},
		loadNextQuestion () {
			if (!this.gameRunning || this.nextQuestion === 'clientB' || this.nextQuestion === 'clientC') {
				this.questionNumber = 1
				if (!this.gameRunning) {
					this.client = 'clientA'
					this.$store.state.moduleProgress.one.status = 'on-progress'
					this.gameRunning = true
				} else {
					this.client = this.nextQuestion
					if (this.client === 'clientB') {
						this.clientsStatus.clientA = 'done'
					} else if (this.client === 'clientC') {
						this.clientsStatus.clientB = 'done'
					}
					this.mood = 'interested'
					this.loadingNextClient = true
					let intervalObj = setInterval(() => {
						this.waitingPercent++
						if (this.waitingPercent === 100) {
							this.loadingNextClient = false
							this.changeMood(0)
							clearInterval(intervalObj)
							this.waitingPercent = 0
						}
					}, 100)
				}
				this.clientsMood[this.client] = 'Interested'
				this.nextQuestion = 0
			} else if(this.nextQuestion === null) {
				this.clientsStatus.clientC = 'done'
			} else {
				this.questionNumber++
			}
			
			//save response into database
			let overallMood = {}
			if(this.clientsStatus.clientA === 'pending') {
				overallMood = {}
			} else if(this.clientsStatus.clientB === 'pending') {
				overallMood = {
					'clientA': this.clientsMood.clientA
				}
			} else if(this.clientsStatus.clientC === 'pending') {
				overallMood = {
					'clientA': this.clientsMood.clientA,
					'clientB': this.clientsMood.clientB
				}
			} else {
				overallMood = {
					'clientA': this.clientsMood.clientA,
					'clientB': this.clientsMood.clientB,
					'clientC': this.clientsMood.clientC
				}
			}
			// dont save if client is A and question number is 1
			if(this.client !== 'clientA' || this.questionNumber != 1) {
				let formData = new FormData()
				formData.append('traineeID', this.$store.state.traineeId);
				formData.append('sessionID', this.sessionID)
				formData.append('answers', JSON.stringify(this.selectedAnswers))
				formData.append('clientsMood', JSON.stringify(overallMood))
				axios.post(backendServer + '/saveModule1Answers/', formData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
			}
			//end of saving response to database

			if (this.nextQuestion === null) {
				this.clientsStatus.clientC = 'done'
				this.$store.state.moduleProgress.one.status = 'done'
				this.moduleCompleted = true
				this.gameRunning = false
				// this.prevQuestion = module1[this.client][this.nextQuestion].prevMove;
			} else if (module1[this.client].hasOwnProperty(this.nextQuestion)) {
				this.question = module1[this.client][this.nextQuestion].situationText
				this.choices = module1[this.client][this.nextQuestion].choices
				this.prevQuestion = module1[this.client][this.nextQuestion].prevMove
				this.nextQuestion = module1[this.client][this.nextQuestion].nextMove
			}

			// if an answer exist then highligh the answer
			if (this.selectedAnswers[this.client].hasOwnProperty([this.questionNumber - 1])) {
				this.choiceSelected(this.selectedAnswers[this.client][this.questionNumber - 1].answer)
			}
			for (let k in this.choices) {
				k = parseInt(k)
				if (this.$refs[k] === undefined || 
					(this.selectedAnswers[this.client].hasOwnProperty(this.questionNumber) && this.selectedAnswers[this.client][this.questionNumber - 1].answer === k)) {
					continue
				}
				this.$refs[k][0].isActive = false
			}
		},
		getImgUrl () {
	    if (this.client === 'clientA') {
				return require('../../assets/images/module1/' + this.clientsImg.clientA + '.jpg')
			} else if (this.client === 'clientB') {
				return require('../../assets/images/module1/' + this.clientsImg.clientB + '.jpg')
			} else if (this.client === 'clientC') {
				return require('../../assets/images/module1/' + this.clientsImg.clientC + '.jpg')
			}
		}
	},
	created: function () {
		this.sessionID = uuid.v4()
		this.loadNextQuestion()
	}
}
</script>

<style scoped>
#question {
  padding: 0px 0px 20px;
}
#answer {
	padding: 0px 70px;
}
.choices {
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  background-color: #7ce5f8;
  text-align: left;
}
.choices:hover {
  background-color: #3ead68;
  color: white;
}
.selectedChoice {
  background-color: #3ead68;
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  color: white;
  text-align: left;
}
.clientMoodStatus {
  font-weight: bold;
}
.scroll {
  overflow-y: auto;
}
.clientImg {
  width: 100;
  height: 80;
}
.meter_box {
  position: relative;
  background-image: url("../../assets/images/meter_box.png");
  width: 1000;
  height: 800;
  right: 100px;
}
.meter_arrow {
  display: inline-block;
  position: relative;
  background: url("../../assets/images/meter_arrow.png") no-repeat;
}
.meter_arrow_satisfied {
  bottom: -30px;
  left: 90px;
  transform: rotate(38deg);
}
.meter_arrow_interested {
  bottom: 90px;
  left: 100px;
  transform: rotate(-5deg);
}
.meter_arrow_neutral {
  bottom: 200px;
  left: 24px;
  transform: rotate(-49deg);
}
.meter_arrow_unsure {
  bottom: 234px;
  left: -117px;
  transform: rotate(-103deg);
}
.meter_arrow_unhappy {
  bottom: 170px;
  left: -230px;
  transform: rotate(-138deg);
}
</style>
