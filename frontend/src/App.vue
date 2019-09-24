<template>
  <v-app>
    <v-dialog persistent v-model="$store.state.dialogError" max-width="500px">
			<v-card>
				<v-toolbar color="primary" dark>
					<v-toolbar-title>
						{{$store.state.errorTitle}}
					</v-toolbar-title>
				</v-toolbar>
				<v-card-text>
					<label v-html="$store.state.errorDescription"></label>
				</v-card-text>
				<v-card-actions>
					<v-btn color="primary" @click.native="$store.state.dialogError = false">Ok</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
    <v-content fluid>
      <center>
        <div id="gameContent">
          <center><router-view/></center>
        </div>
      </center>
      <app-footer id="appFooter"></app-footer>
    </v-content>
  </v-app>
</template>

<script>
import Footer from './components/Footer'
import Home from './components/Home'
import { eventBus } from './main'
import axios from 'axios'
import VueCookies from 'vue-cookies'
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const backendServer = (isProduction ? config.build.backend : config.dev.backend)

export default {
	data () {
		return {
			selectedComponent: Home
		}
	},
	components: {
		'app-footer': Footer
	},
	created () {
		if (VueCookies.get('token') && VueCookies.get('userID')) {
      this.$store.state.auth.token = VueCookies.get('token')
      this.$store.state.auth.userID = VueCookies.get('userID')
      this.$store.state.auth.username = VueCookies.get('username')
      this.$store.state.auth.role = VueCookies.get('role')
      axios.get(backendServer + '/isTokenActive/')
    }
	}
}
</script>
<style>
#gameContent {
  border-radius: 30px;
  border: 3px solid #7ce5f8;
  width: 1000px;
  height: auto;
	min-height: 350px
}
#appFooter {
  font-size: 13px;
}
</style>
