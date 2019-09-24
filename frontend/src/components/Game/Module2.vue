<template>
	<v-container>
		<template v-if="$store.state.moduleProgress.two.status === 'completed'">
			<v-alert type="info" :value="true" style="text-align: justify">
				<b style="font-size: 24px">Congratulations</b>
				<p v-if="accummulatedPoints >= 13">
					The wound was covered with petroleum jelly impregnated gauze, then a sterile dry gauze was placed over this, secured by adhesive tape.  The surgical space is ready for the next patient.  Congratulations on a successful MC procedure!
				</p>
				<p v-else>
					The wound was covered with petroleum jelly impregnated gauze, then a sterile dry gauze was placed over this, secured by adhesive tape.  The surgical space is ready for the next patient.  Unfortunately, a few mistakes were made so this procedure cannot be considered a success.
				</p>
			</v-alert>
			<v-card color="cyan">
				<v-card-title style="color: white;font-weight: bold;font-size: 24px">
					Summary <v-spacer></v-spacer> <v-btn to='/'><v-icon left>home</v-icon>Home</v-btn>
				</v-card-title>
				<v-card-title primary-title>
					<v-container fluid grid-list-lg>
						<v-layout justify-start fill-height row wrap>
							<v-flex xs4 v-for="(answerTracker,qNumber) in answersTracker">
								<v-card hover>
									<v-card-title>
										<v-toolbar color="purple" style="color: white">
											<v-tooltip top>
												<template slot="activator">
													Question {{qNumber}}
												</template>
												<span>{{moduleQuestions[qNumber-1].situationText}}</span>
											</v-tooltip>
										</v-toolbar>
									</v-card-title>
									<v-card-text style="text-align: justify">
										<v-layout align-start fill-height column>
											<v-flex v-for="(answer,letter) in answerTracker">
												<template v-if="typeof answer === 'object'">
													{{letter}}: {{answer.parent}} (Pause)
													<template v-for="(subAnswer,subLetter) in answer">
														<label v-if="subLetter !== 'parent'">
															&nbsp;&nbsp;&nbsp;&nbsp; {{subLetter}}: {{subAnswer}}
														</label>
														<br>
													</template>
												</template>
												<template v-else>
													{{letter}}: {{answer}}
												</template>
											</v-flex>
										</v-layout>
									</v-card-text>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-title>
			</v-card>
		</template>
		<template v-else>
			<v-layout column>
				<v-flex>
					<v-toolbar color="#566573">
						<v-layout row wrap>
							<v-flex xs4 text-sm-left style="color:white">
								<b>MALE CIRCUMCISION CHALLENGE</b>
							</v-flex>
							<v-spacer></v-spacer>
							<v-flex xs1 text-sm-right style="color:white">
								<b>MODULE 2</b>
							</v-flex>
						</v-layout>
					</v-toolbar>
				</v-flex>
				<v-flex xs4>
					<div class="questionImg" v-if="questionNumber === 3" @click="imageAnswers" >
						<v-img  :src="getImgUrl()" v-bind:alt="questionImg"  contain max-height="450" height="250"></v-img>
					</div>
					<div class="questionImg" v-else-if="questionNumber === 4" >
						<div>ITEMS
							<drag class="drag" v-for="question4Img in question4Imgs" :key="question4Img.id" :image="question4Img.img" :transfer-data="concatinateData(question4Img.title,question4Img.bin)">
								<v-img :src="question4Img.img" v-bind:alt="question4Img.id" contain ></v-img>
							</drag>
						</div>
						<div height="20px" >
							
						</div>
						<div>
							BINS
							<drop class="drop" v-for="question4ImgBin in question4ImgsBins" :key="question4ImgBin.id" @drop="handleDragover(question4ImgBin.title, ...arguments)" >
								<v-img :src="question4ImgBin.img" v-bind:alt="question4ImgBin.id" contain max-height="100" height="250" ></v-img>
							</drop>
						</div>
					</div>
					<div class="questionImg" v-else-if="questionNumber === 8" @click="imageAnswers">
						<v-img :src="getImgUrl()" alt="Question Image" contain max-height="450" height="250"></v-img>
					</div>
					<div class="questionImg" v-else-if="questionNumber === 9" @click="imageAnswers">
						<v-img :src="getImgUrl()" alt="Question Image" contain max-height="450" height="250"></v-img>
					</div>
					<div class="questionImg" v-else-if="questionNumber === 12 || questionNumber === 13" >
						<v-img :aspect-ratio="16/9" :src="getImgUrl()" alt="Question Image" max-height="450" height="250" width="400"></v-img>
					</div>
					<div class="questionImg" v-else >
						<v-img :aspect-ratio="16/9" :src="getImgUrl()" alt="Question Image" max-height="450" height="250"></v-img>
					</div>
				</v-flex>
				<v-flex id="question" height="1" text-sm-left>
					<v-card class="scroll" height="400">
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
									<div id="answer" v-if="interactive">
										<v-layout column>
											<template v-for="(choice,index) in choices">
												<v-radio-group v-model="selectedParentChoice" @change="choiceSelected()">
													<label style="cursor: pointer;">
														<v-radio 
															style="font-weight: bold;color: black" 
															:ref="'choice' + index" 
															:label="choice.choiceText" 
															:value="index" 
															color="red">
														</v-radio>
													</label>
												</v-radio-group>
                        <template v-if="choice.hasOwnProperty('choices') && showSubChoices" v-for="(pausedChoice,subIndex) in choice.choices">
                          <v-radio-group style="margin-left: 40px" v-model="selectedChildChoice">
                            <label style="cursor: pointer;">
                              <v-radio 
																:disabled="radioDisabled" 
																style="font-weight: bold;color: black" 
																:ref="'subChoice' + subIndex" 
																:label="pausedChoice.choiceText" 
																:value="subIndex" 
																color="red">
															</v-radio>
                            </label>
                          </v-radio-group>
                        </template>
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
				<v-flex height="100px" style="background-color: white">
					<v-layout row>
						<v-flex xs4 text-sm-left>
              <label @click="loadPrevQuestion()" style="cursor:pointer">
                <img src="../../assets/images/prev.png">
                BACK
              </label>
						</v-flex>
						<v-flex xs4 text-sm-center>
							<v-btn round color="error" to='/'><v-icon left>cancel</v-icon>Exit Game</v-btn>
						</v-flex>
						<v-flex xs4 text-sm-right>
              <label @click="checkAnswer()" style="cursor:pointer">
                NEXT<img src="../../assets/images/next.png">
              </label>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</template>
	</v-container>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import { uuid } from 'vue-uuid'
import { eventBus } from '../../main'
let module2 = require('../questions/module2.js')
const config = require('../../../config')
const isProduction = process.env.NODE_ENV === 'production'
const backendServer = (isProduction ? config.build.backend : config.dev.backend)
export default {
	data () {
		return {
			moduleQuestions: module2,
			sessionID: '',
			radioDisabled: false,
			question: '',
			choices: [],
			answersTracker: {},
			selectedParentChoice: null,
			selectedChildChoice: null,
			subChoices: [],
			showSubChoices: false,
			gameRunning: false,
			nextQuestion: null,
			prevQuestion: null,
			questionNumber: 1,
			selectedChoice: {},
			selectedPausedChoice: {},
			selectedIndex: {},
			accummulatedPoints: 0,
			selectedAnswers: {},
			waitingPercent: 0,
			choiceLetters: [
				'A','B','C','D','E','F'
			],
			subChoicesLetters: [
				'I','II','III','IV','V','VI'
			],
			questionImg: {
				question1: 'Mod2_1.jpg',
				question2: 'Mod2_2.jpg',
				question3: 'Mod2_3.png',
				question5: 'Mod2_5.jpg',
				question6: 'Mod2_6.jpg',
				question7: 'Mod2_7.jpg',
				question8: 'Mod2_8.png',
				question9: 'Mod2_9.png',
				question10: 'Mod2_10.jpg',
				question11: 'Mod2_11.jpg',
				question12: 'Mod2_12.png',
				question13: 'Mod2_13.png',
				question14: 'Mod2_14.jpg',
				question15: 'Mod2_15.jpg'
			},
			question3count : 0,
			question3Coordinates:[
				{ PositionX1: 460, PositionY1: 138 },
				{ PositionX2: 493, PositionY2: 138 }
			],
			question8count : 0,
			question8Coordinates:[
				{ PositionX1: 337, PositionY1: 164 },
				{ PositionX2: 577, PositionY2: 164 }
			],
			question4Imgs: [
			    {title: 'ampule',  bin: 'yellow' ,img: require('../../assets/images/module2/Mod2_04/mod2_q4_ampule.png'), id: 1},
				{title: 'biohazard', bin: 'red',  img: require('../../assets/images/module2/Mod2_04/mod2_q4_biohazard.png'), id: 2},
				{title: 'blood', bin: 'red', img: require('../../assets/images/module2/Mod2_04/mod2_q4_blood.png'), id: 3},
				{title: 'forceps', bin: 'blueblack', img: require('../../assets/images/module2/Mod2_04/mod2_q4_forceps.png'), id: 4},
				{title: 'glove', bin: 'blueblack', img: require('../../assets/images/module2/Mod2_04/mod2_q4_glove.png'), id: 5},
				{title: 'needle', bin: 'yellow', img: require('../../assets/images/module2/Mod2_04/mod2_q4_needle.png'), id: 6},
				{title: 'pills',  bin: 'blueblack', img: require('../../assets/images/module2/Mod2_04/mod2_q4_pills.png'), id: 7},
				{title: 'sharps', bin: 'yellow', img: require('../../assets/images/module2/Mod2_04/mod2_q4_sharps.png'), id: 8}
			],
			question4ImgsBins: [
			    {title: 'blueblack', img: require('../../assets/images/module2/Mod2_04/mod2_q4_blueblack_bin.png'), id: 1},
				{title: 'red', img: require('../../assets/images/module2/Mod2_04/mod2_q4_red_bin.png'), id: 2},
				{title: 'yellow', img: require('../../assets/images/module2/Mod2_04/mod2_q4_yellow_bin.png'), id: 3}
			]
		}
	},
	computed: {
		interactive() {
		    if(this.questionNumber === 4 ){
		    	return false
		    } else {
		    	return true
		    }
	    }
	},
	methods: {
		choiceSelected () {
			let selectedAnswer = this.selectedAnswers[this.questionNumber - 1]
			if (this.selectedParentChoice &&
        this.choices[this.selectedParentChoice].hasOwnProperty('choices') &&
        this.showSubChoices === false && !selectedAnswer) {
				this.showSubChoices = true
			} else if (!this.choices[this.selectedParentChoice].hasOwnProperty('choices') && this.showSubChoices === true) {
				this.selectedChildChoice = null
				this.showSubChoices = false
			}
			// if there was an answer already selected then reset back to that answer
			this.markSelected()
		},
		markSelected () {
			let selectedAnswer = this.selectedAnswers[this.questionNumber - 1]
			if (!selectedAnswer) {
				return
			}
			for (let choice in this.choices) {
				choice = parseInt(choice)
				if (selectedAnswer.parentChoice === choice) {
					setTimeout(() => {
						this.selectedParentChoice = choice
					}, 0);
					if (selectedAnswer.childChoice !== null) {
						this.selectedChildChoice = selectedAnswer.childChoice
						setTimeout(() => {
							this.showSubChoices = true
							this.radioDisabled = true
						}, 0);
					}
				}
			}
		},
		checkAnswer () {
			let selectedAnswer = this.selectedAnswers[this.questionNumber - 1]
			if (selectedAnswer) {
				this.loadNextQuestion()
				return
			} 
			if (this.selectedParentChoice === null) {
				if (this.questionNumber === 4 || this.questionNumber === 3 || this.questionNumber === 8 || this.questionNumber === 9){
					if (!this.answersTracker.hasOwnProperty(this.questionNumber)) {
							this.$store.state.dialogError = true
							this.$store.state.errorTitle = 'Error'
							this.$store.state.errorDescription = 'Select an answer to proceed'
							return
					} else if(this.isFullObject(this.answersTracker[this.questionNumber])){
				    	this.loadNextQuestion()
				    	return
				    } else if (this.questionNumber === 4) {
				    	this.$store.state.dialogError = true
						this.$store.state.errorTitle = 'Error'
						this.$store.state.errorDescription = 'Drag All items to the Corresponding Bin'
						return	
				    } else {
				    	this.$store.state.dialogError = true
						this.$store.state.errorTitle = 'Error'
						this.$store.state.errorDescription = 'Select Second choice'
						return
				    }
				} else {
					this.$store.state.dialogError = true
					this.$store.state.errorTitle = 'Error'
					this.$store.state.errorDescription = 'Select an answer to proceed'
					return
				}
				
			} else if (this.choices[this.selectedParentChoice].hasOwnProperty('choices') && this.selectedChildChoice === null) {
					this.$store.state.dialogError = true
					this.$store.state.errorTitle = 'Error'
					this.$store.state.errorDescription = 'Select an answer for the sub-choices'
					return
			}	else {
				if (this.choices[this.selectedParentChoice].correct === 'no'
					|| (this.choices[this.selectedParentChoice].hasOwnProperty('choices') && this.choices[this.selectedParentChoice]['choices'][this.selectedChildChoice].correct === 'no')) {
					this.displayCorrectAnswer()
					this.trackAnswers('Wrong')

				} else {
					this.trackAnswers('Correct')
					this.$store.state.dialogError = true
	    		this.$store.state.errorTitle = 'Correct'
	    		this.$store.state.errorDescription = "That is the correct answer"
				}
				this.selectedAnswers[this.questionNumber - 1] = {}
				this.selectedAnswers[this.questionNumber - 1].parentChoice = this.selectedParentChoice
				if (this.choices[this.selectedParentChoice].hasOwnProperty('choices')) {
					this.selectedAnswers[this.questionNumber - 1].childChoice = this.selectedChildChoice
					this.accummulatedPoints += this.choices[this.selectedParentChoice]['choices'][this.selectedChildChoice].impact
					this.accummulatedPoints += this.choices[this.selectedParentChoice]['choices'][this.selectedChildChoice].bonus
				} else {
					this.accummulatedPoints += this.choices[this.selectedParentChoice].impact
					this.accummulatedPoints += this.choices[this.selectedParentChoice].bonus
					this.selectedAnswers[this.questionNumber - 1].childChoice = null
				}
				this.loadNextQuestion()
			}
		},
		displayCorrectAnswer () {
			let correctAnswer
			if (this.questionNumber === 3) {
				
		   		this.$store.state.dialogError = true
	    		this.$store.state.errorTitle = 'That is not correct, below is the correct answer'
	    		this.$store.state.errorDescription = "The Dorsal Penile nerves at 1 o'clock and 11 o'clock Positions " 
			} else if (this.questionNumber === 8) {
				this.$store.state.dialogError = true
	    		this.$store.state.errorTitle = 'That is not correct, below is the correct answer'
	    		this.$store.state.errorDescription = "The Points at 3 o'clock and 9 o'clock Positions "
			} else {
				for (let choice of this.choices) {
					if (choice.correct === 'yes') {
						if (correctAnswer) {
							correctAnswer += '<br> <b>OR</b> <br>' + choice.choiceText
						} else {
							correctAnswer = choice.choiceText
						}
						if (choice.hasOwnProperty('choices')) {
							let subCorrectAnswer
							for (let subChoice of choice.choices) {
								if (subChoice.correct === 'yes') {
									if (subCorrectAnswer) {
										subCorrectAnswer += '<br><p style="margin-left: 30px;text-align: justify"><b>OR</b></p> <br><p style="margin-left: 30px;text-align: justify">' + subChoice.choiceText + '</p>'
									} else {
										subCorrectAnswer = '<br><p style="margin-left: 30px;text-align: justify">' + subChoice.choiceText + '</p>'
									}
								}
							}
							correctAnswer += subCorrectAnswer
						}
					}
				}

				this.$store.state.dialogError = true
				this.$store.state.errorTitle = 'That is not correct, below is the correct answer'
				this.$store.state.errorDescription = correctAnswer
			}
		},
		trackAnswers () {
			let choiceCorrectness = 'Correct'
			let subChoiceCorrectness = 'Correct'
			if (!this.answersTracker.hasOwnProperty(this.questionNumber)) {
				this.answersTracker[this.questionNumber] = {}
			}
			if (this.questionNumber !== 4) {
				
				if (this.choices[this.selectedParentChoice].correct === 'no') {
					choiceCorrectness = 'Wrong'
				}
				if (this.choices[this.selectedParentChoice].hasOwnProperty('choices') && this.choices[this.selectedParentChoice]['choices'][this.selectedChildChoice].correct === 'no') {
					subChoiceCorrectness = 'Wrong'
				}
				let choiceLetter = this.choiceLetters[this.selectedParentChoice]
				if (this.selectedChildChoice === null) {
					this.answersTracker[this.questionNumber][choiceLetter] = choiceCorrectness
				}
				
				if (this.selectedChildChoice !== null) {
					let subChoiceLetter = this.subChoicesLetters[this.selectedChildChoice]
					if (!this.answersTracker[this.questionNumber].hasOwnProperty(choiceLetter)) {
						this.answersTracker[this.questionNumber][choiceLetter] = {}
					}
					this.answersTracker[this.questionNumber][choiceLetter]['parent'] = choiceCorrectness
					this.answersTracker[this.questionNumber][choiceLetter][subChoiceLetter] = subChoiceCorrectness
				}
			} 
		},
		loadPrevQuestion () {
			if (this.prevQuestion === null) {
				return
			}
			if (this.questionNumber > 1) {
				this.questionNumber--
			}
			this.selectedParentChoice = null
			this.selectedChildChoice = null
			this.showSubChoices = false
			this.radioDisabled = false
			this.question = module2[this.prevQuestion].situationText
			this.choices = module2[this.prevQuestion].choices
			this.nextQuestion = module2[this.prevQuestion].nextMove
			this.prevQuestion = module2[this.prevQuestion].prevMove
			this.markSelected()
		},
		loadNextQuestion () {
			if (this.gameRunning === false) {
				this.nextQuestion = 0
				this.gameRunning = true
			} else {
				// save prev response into database
				let formData = new FormData()
				formData.append('userID', this.$store.state.auth.userID)
				formData.append('sessionID', this.sessionID)
				formData.append('answers', JSON.stringify(this.answersTracker))
				formData.append('accummulatedPoints', this.accummulatedPoints)
				axios.post(backendServer + '/saveModule2Answers/', formData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})

				this.questionNumber++
			}
			if (this.nextQuestion === null) {
				this.$store.state.moduleProgress.two.status = 'completed'
				this.questionNumber--
				this.markSelected()
				return
			}
			this.selectedParentChoice = null
			this.selectedChildChoice = null
			this.showSubChoices = false
			this.radioDisabled = false
			this.question = module2[this.nextQuestion].situationText
			this.choices = module2[this.nextQuestion].choices
			this.prevQuestion = module2[this.nextQuestion].prevMove
			this.nextQuestion = module2[this.nextQuestion].nextMove
			this.markSelected()
		},
		getImgUrl () {
	    if (this.questionNumber === 1 ) {
				return require('../../assets/images/module2/' + this.questionImg.question1 )
			} else if (this.questionNumber === 2) {
				return require('../../assets/images/module2/' + this.questionImg.question2 )
			} else if (this.questionNumber === 3) {
				return require('../../assets/images/module2/' + this.questionImg.question3 )
			} else if (this.questionNumber === 5) {
				return require('../../assets/images/module2/' + this.questionImg.question5 )
			} else if (this.questionNumber === 6) {
				return require('../../assets/images/module2/' + this.questionImg.question6 )
			} else if (this.questionNumber === 7 ) {
				return require('../../assets/images/module2/' + this.questionImg.question7 )
			} else if (this.questionNumber === 8) {
				return require('../../assets/images/module2/' + this.questionImg.question8 )
			} else if (this.questionNumber === 9) {
				return require('../../assets/images/module2/' + this.questionImg.question9 )
			} else if (this.questionNumber === 10 ) {
				return require('../../assets/images/module2/' + this.questionImg.question10 )
			} else if (this.questionNumber === 11) {
				return require('../../assets/images/module2/' + this.questionImg.question11 )
			} else if (this.questionNumber === 12) {
				return require('../../assets/images/module2/' + this.questionImg.question12 )
			} else if (this.questionNumber === 13 ) {
				return require('../../assets/images/module2/' + this.questionImg.question13 )
			} else if (this.questionNumber === 14) {
				return require('../../assets/images/module2/' + this.questionImg.question14 )
			} else if (this.questionNumber === 15) {
				return require('../../assets/images/module2/' + this.questionImg.question15 )
			}
			
		},
		concatinateData(title,bin){
			return title + ',' + bin
		},
		isFullObject(o) {
		    return Object.keys(o).every(function(x) {
		        return o[x]!==''; 
		    });
		},
		handleDragover(bin, data, event) {
			let newData = data.split(",")
			if (!this.answersTracker.hasOwnProperty(this.questionNumber)) {
					this.answersTracker[this.questionNumber] = { ampule:'', biohazard:'', blood:'',forceps:'',glove:'' , needle:'' , pills:'', sharps:''}
				}
			if (bin === newData[1]) {
		    	this.answersTracker[this.questionNumber][newData[0]] = 'Correct'
		    } else {
		    	this.answersTracker[this.questionNumber][newData[0]] = 'Wrong'
		    }
		    if(this.isFullObject(this.answersTracker[this.questionNumber])){
		    	if (Object.values(this.answersTracker[this.questionNumber]).indexOf('Wrong') > -1) {
				    this.$store.state.dialogError = true
			    	this.$store.state.errorTitle = 'Wrong'
			        this.$store.state.errorDescription = "An incorrect bin was chosen, a summary of your responses is given at the end of the game."
				} else {
					this.accummulatedPoints++
				}
		    	this.loadNextQuestion()
		    }
			
		},
		inRange(x, min, max) {
		    return ((x-min)*(x-max) <= 0)	
		},
		getCoordinates(e){
			let ImgPosX = 0
			let ImgPosY = 0
			let PosX = 0
			let PosY = 0
			let el = e.target

			while(el){
			    ImgPosX += el.offsetLeft
			    ImgPosY += el.offsetTop
			    el = el.offsetParent	
			}
			if (e.pageX || e.pageY){
			    PosX = e.pageX
			    PosY = e.pageY
			}
			else if (e.clientX || e.clientY){
			    PosX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
			    PosY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
			    }
			PosX = PosX - ImgPosX
		    PosY = PosY - ImgPosY
		    return [ PosX, PosY ]
			
		},
		imageAnswers(e){
			let questioncount
			let questionCoordinates
			if (this.questionNumber === 3) {
				questioncount = this.question3count
				questionCoordinates = this.question3Coordinates
			} else if (this.questionNumber === 8) {
				questioncount = this.question8count
				questionCoordinates = this.question8Coordinates
			} else if (this.questionNumber === 9){
				this.answersTracker[this.questionNumber] = {}
				this.answersTracker[this.questionNumber]['B'] = 'Wrong'
				this.loadNextQuestion()
				return
			} else {
				this.$store.state.dialogError = true
		        this.$store.state.errorTitle = 'Error '
		        this.$store.state.errorDescription = "No Question"
		        return
			}
			if (questioncount > 2 ) {
				this.$store.state.dialogError = true
		        this.$store.state.errorTitle = 'Error '
		        this.$store.state.errorDescription = "Already made your two choices"
		        this.loadNextQuestion()
			}else {
				if (!this.answersTracker.hasOwnProperty(this.questionNumber)) {
					this.answersTracker[this.questionNumber] = {A:'' , B:''}
				}
				let imgPositions = this.getCoordinates(e)
				if(this.inRange( imgPositions[0] ,(questionCoordinates[0].PositionX1 - 10),(questionCoordinates[0].PositionX1 + 10)) && this.inRange( imgPositions[1] ,(questionCoordinates[0].PositionY1 - 10),(questionCoordinates[0].PositionY1 + 10)) ){ 
					if (this.answersTracker[this.questionNumber]['A']){
						this.answersTracker[this.questionNumber]['B'] = "Correct"
					} else {
						this.answersTracker[this.questionNumber]['A'] = "Correct"
					}
					if (this.questionNumber === 3) {
						this.question3count++
						questioncount++
					} else if (this.questionNumber === 8) {
						this.question8count++
						questioncount++
					} else {
						this.$store.state.dialogError = true
				        this.$store.state.errorTitle = 'Error '
				        this.$store.state.errorDescription = "No Question Number"
					}
			   	} else if (this.inRange( imgPositions[0]  ,(questionCoordinates[1].PositionX2 - 10),(questionCoordinates[1].PositionX2 + 10)) && this.inRange( imgPositions[1]  ,(questionCoordinates[1].PositionY2 - 10),(questionCoordinates[1].PositionY2 + 10)) ) {
			   		if (this.answersTracker[this.questionNumber]['A']){
						this.answersTracker[this.questionNumber]['B'] = "Correct"
					} else {
						this.answersTracker[this.questionNumber]['A'] = "Correct"
					}
			   		if (this.questionNumber === 3) {
						this.question3count++
						questioncount++
					} else if (this.questionNumber === 8) {
						this.question8count++
						questioncount++
					} else {
						this.$store.state.dialogError = true
				        this.$store.state.errorTitle = 'Error '
				        this.$store.state.errorDescription = "No Question Number"
					}
			   	} else {
		    		
		    		if (this.answersTracker[this.questionNumber]['A']){
						this.answersTracker[this.questionNumber]['B'] = "Wrong"
					} else {
						this.answersTracker[this.questionNumber]['A'] = "Wrong"
					}
					if (this.questionNumber === 3) {
						this.question3count++
						questioncount++
					} else if (this.questionNumber === 8) {
						this.question8count++
						questioncount++
					} else {
						this.$store.state.dialogError = true
				        this.$store.state.errorTitle = 'Error '
				        this.$store.state.errorDescription = "No Question Number"
					}
			   	}
			   	if(questioncount >= 2){
			   		if (this.questionNumber === 3) {
			   			if (this.answersTracker[this.questionNumber]['A'] === "Wrong" || this.answersTracker[this.questionNumber]['B'] === "Wrong"){
					   		this.$store.state.dialogError = true
				    		this.$store.state.errorTitle = 'That is not correct, below is the correct answer'
				    		this.$store.state.errorDescription = "The Dorsal Penile nerves at 1 o'clock and 11 o'clock Positions " 
			    		} else {
			    			this.accummulatedPoints++
			    		}
				   	} else {
				   		if (this.answersTracker[this.questionNumber]['A'] === "Wrong" || this.answersTracker[this.questionNumber]['B'] === "Wrong"){
					   		this.$store.state.dialogError = true
				    		this.$store.state.errorTitle = 'That is not correct, below is the correct answer'
				    		this.$store.state.errorDescription = "The Points at 3 o'clock and 9 o'clock Positions "
				    	} else {
				    		this.accummulatedPoints++
				    	}
				   	}

			   		this.loadNextQuestion()
				}

		}
	}

			
	},
	created: function () {
		this.sessionID = uuid.v4()
		this.loadNextQuestion()
		this.$store.state.moduleProgress.two.status = 'pending'
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
.scroll {
  overflow-y: auto;
}
.questionImg {
  width: 100;
  height: 80;
}
.drag, .drop {
		box-sizing: border-box;
		display: inline-block;
		border-radius: 10px;
		vertical-align: middle;
		margin-right: 20px;
		position: relative;
		padding: 5px;
		padding-top: 5px;
		text-align: center;
		margin: 3px;
	}
	.drag {
		color: #fff;
		cursor: move;
		width: 100px;
		height: 100px;
		border-right: 2px solid #666;
		border-bottom: 2px solid #666;
	}
	.drop {
		background: #eee;
		padding-top: 10px;
		width: 120px;
		height: 120px;
	}
</style>
