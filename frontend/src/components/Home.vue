
<template>
	<v-container fluid>
		<v-layout column>
			<v-flex>
				<v-tabs icons-and-text centered grow dark color="cyan">
          <v-tabs-slider color="red"></v-tabs-slider>
					<v-tab key="moule1">
            Module 1
            <v-icon color="white" right>tab</v-icon>
          </v-tab>
          <v-tab key="module2">
            Module 2
            <v-icon color="white" right>tab</v-icon>
          </v-tab>
          <v-tab key="module3">
            Module 3
            <v-icon color="white" right>tab</v-icon>
          </v-tab>
					<v-tab key="questionsAdmin">
            Questions Administration
            <v-icon color="white" right>tab</v-icon>
          </v-tab>
					<v-tab-item key="module1Item" class="moduleIntro">
            In this module you, the player, are presented with preoperative counseling scenarios with three hypothetical clients.  Make choices about how you counsel certain clients, and try to end the counseling session with a well-informed client who agrees to undergo circumcision. The client satisfaction meter at the bottom will start at Interested; try to make sure that by the end of your counseling session the client’s mood is at Interested or Satisfied.  To play, select an answer from the list and click NEXT.<br>
            <v-btn to='/Module1' color="primary">Start Module 1</v-btn>
					</v-tab-item>
					<v-tab-item key="module2Item" class="moduleIntro">
						In this module you, the player, are asked to perform a dorsal slit circumcision on a 20-year-old male.  At each step of the procedure you must choose the most correct answer to continue with the surgery successfully. Please select an answer from the list and click NEXT to proceed.<br>
            <v-btn to='/Module2' color="primary">Start Module 2</v-btn>
					</v-tab-item>
          <v-tab-item key="module3Item" class="moduleIntro">
						<p>This module combines all aspects of counseling, surgery and anatomy together to confront surgical complications and AEs of varying magnitudes.  In this game you are asked to tackle difficult scenarios and then reflect how some problems could have been avoided.  You, the player, assume the role of VMMC provider and will need to make tough decisions that determine the plot's outcome with relation to your VMMC clients. You will see if your choices will result in good outcomes for the clients and, therefore, your continuation of the MC Challenge. The goal of the game is to successfully complete four days at an outreach facility. You will be judged on three attributes important to a health provider:</p>
            <p><b>Morale:</b> The amount of confidence, enthusiasm, and discipline that the player can elicit from clients as they seek care<br></p>
            <p><b>Reputation:</b> The player’s reputation as a reliable, knowledgeable, and approachable health provider<br></p>
            <p><b>Integrity:</b> Clients and coworkers consider the player as being honest and having strong moral principles<br></p>
            <v-btn color="primary">Start Module 3</v-btn>
					</v-tab-item>
					<v-tab-item key="questionsAdmin" class="qnsAdmin">
						
					</v-tab-item>
				</v-tabs>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
export default {
	methods: {
		startModule (mod) {
			if (mod === 1) {
				this.$router.push({ name: 'Module1' })
			} else if (mod === 2) {
				this.$router.push({ name: 'Module2' })
			} else if (mod === 3) {
				this.$router.push({ name: 'Module3' })
			}
		}
	}
}
</script>
<style scoped>
.moduleIntro {
  text-align: justify;
  font-size: 20px
}
</style>

