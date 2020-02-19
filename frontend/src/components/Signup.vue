<template>
  <v-container>
    <v-layout
      row
      wrap
    >
      <v-spacer />
      <v-flex xs6>
        <v-alert
          style="width: 500px"
          v-model="alertSuccess"
          type="success"
          dismissible
          transition="scale-transition"
        >
          {{alertMsg}}
        </v-alert>
        <v-alert
          style="width: 500px"
          v-model="alertFail"
          type="error"
          dismissible
          transition="scale-transition"
        >
          {{alertMsg}}
        </v-alert>
        <v-card
          class="mx-auto"
          style="max-width: 500px;"
        >
          <v-system-bar
            color="deep-purple darken-4"
            dark
          />
          <v-toolbar
            color="deep-purple accent-4"
            cards
            dark
            flat
          >
            <v-card-title class="title font-weight-regular">Create Account</v-card-title>
          </v-toolbar>
          <v-form
            ref="form"
            class="pa-3 pt-4"
          >
            <v-menu
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="startDateFormatted"
                  label="Start Training Date"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                required
                @blur="$v.startDate.$touch()"
                @change="$v.startDate.$touch()"
                :error-messages="startDateErrors"
                v-model="startDate"
                color="deep-purple"
                label="Training start date"
              />
            </v-menu>

            <v-menu
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="endDateFormatted"
                  label="End Training Date"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                required
                @blur="$v.endDate.$touch()"
                @change="$v.endDate.$touch()"
                :error-messages="endDateErrors"
                v-model="endDate"
                color="deep-purple"
                label="Training end date"
              />
            </v-menu>

            <v-select
              required
              @blur="$v.cadre.$touch()"
              @change="$v.cadre.$touch()"
              :error-messages="cadreErrors"
              v-model="cadre"
              color="deep-purple"
              label="Cadre"
              :items="cadres"
            />

            <v-select
              required
              @blur="$v.trainingType.$touch()"
              @change="$v.trainingType.$touch()"
              :error-messages="trainingTypeErrors"
              v-model="trainingType"
              color="deep-purple"
              label="Type of Training"
              :items="trainingTypes"
            />

            <v-select
              required
              @blur="$v.region.$touch()"
              @change="$v.region.$touch()"
              :error-messages="regionErrors"
              v-model="region"
              color="deep-purple"
              label="Region"
              :items="regions"
            />

            <v-select
              required
              @blur="$v.district.$touch()"
              @change="$v.district.$touch()"
              :error-messages="districtErrors"
              v-model="district"
              color="deep-purple"
              label="District"
              :items="districts[region]"
            />
          </v-form>

          <v-divider />

          <v-card-actions>
            <v-btn
              @click="$refs.form.reset()"
              color="primary"
              round
            >
              <v-icon>clear</v-icon>Clear
            </v-btn>
            <v-spacer />
            <v-btn
              @click="signup()"
              :disabled="$v.$invalid"
              class="white--text"
              color="primary"
              depressed
              round
            >
              <v-icon left>how_to_reg</v-icon>Create Account
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-spacer />
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios';
import { required } from 'vuelidate/lib/validators';
import { uuid } from 'vue-uuid';
import VueCookies from 'vue-cookies';

import District from "@/mixins/District.js";
import Region from "@/mixins/Region.js";

const config = require('../../config');
const isProduction = process.env.NODE_ENV === 'production';
const backendServer = (isProduction ? config.build.backend : config.dev.backend);

export default {
  validations: {
    startDate: { required },
    endDate: { required },
    trainingType: { required },
    cadre: { required },
    region: { required },
    district: { required }
  },
  data () {
    return {
      cadre: '',
      sessionId: '',
      cadres: [
        {text: "Enrolled Nurse", value: "enrolled-nurse"},
        {text: "Registered Nurse", value: "registered-nurse"},
        {text: "Clinical Assistant", value: "clinical-assistant"},
        {text: "Clinical Officer", value: "clinical-officer"},
        {text: "Assistant Medical Officer", value: "assistant-medical-officer"},
        {text: "Medical Officer", value: "medical-officer"},
        {text: "Assistant Dental Officer", value: "assistant-dental-officer"},
        {text: "Dental Officer", value: "dental-officer"}
      ],
      trainingTypes: [
        {text: "New / Basic", value: "basic"},
        {text: "Refresher", value: "refresher"}
      ],
      region: '',
      district: '',
      startDate: '',
      startDateFormatted: '',
      endDate: '',
      endDateFormatted: '',
      trainingType: '',
      alertFail: false,
      alertSuccess: false,
      alertMsg: '',
      previousPath: null
    }
  },
  methods: {
    formatDate (date) {
      if (!date) {
        return null
      }
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    signup () {
      this.$store.state.dynamicProgress = true;
      this.$store.state.progressTitle = 'Creating Account';

      let formData = new FormData();

      formData.append('startDate', this.startDate);
      formData.append('endDate', this.endDate);
      formData.append('cadre', this.cadre);
      formData.append('trainingType', this.trainingType);
      formData.append('sessionId', this.sessionId);
      formData.append('district', this.district);
      formData.append('region', this.region);

      axios
        .post(backendServer + '/add-trainee/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(trainee => {
          this.startDate = "";
          this.endDate = "";
          this.cadre = "";
          this.trainingType = "";
          this.district = "";
          this.region = "";

          this.$store.state.dynamicProgress = false;
          this.$store.state.trainee = true;
          this.$store.state.traineeId = trainee.data._id;
          this.alertSuccess = true;
          this.alertMsg = 'Account created successfully';

          if (this.previousPath) {
            this.$router.push({
              path: this.previousPath
            });
          } else {
            this.$router.push({
              name: "Home"
            });
          }
        });
    },
    displayLogin () {
      this.$router.push({ name: 'Login' })
    }
  },
  computed: {
    startDateErrors() {
      const errors = [];
      if (!this.$v.startDate.$dirty) return errors;
      !this.$v.startDate.required && errors.push('Training start date is required');
      return errors;
    },
    endDateErrors() {
      const errors = [];
      if (!this.$v.endDate.$dirty) return errors;
      !this.$v.endDate.required && errors.push('Training end date is required');
      return errors;
    },
    cadreErrors() {
      const errors = [];
      if (!this.$v.cadre.$dirty) return errors;
      !this.$v.cadre.required && errors.push('Cadre is required');
      return errors;
    },
    trainingTypeErrors() {
      const errors = [];
      if (!this.$v.trainingType.$dirty) return errors;
      !this.$v.trainingType.required && errors.push('Training type is required');
      return errors;
    },
    districtErrors() {
      const errors = [];
      if (!this.$v.district.$dirty) return errors;
      !this.$v.district.required && errors.push('District is required');
      return errors;
    },
    regionErrors() {
      const errors = [];
      if (!this.$v.region.$dirty) return errors;
      !this.$v.region.required && errors.push('Region is required');
      return errors;
    }
  },
  created () {
    this.previousPath = this.$route.query.previousPath;
    this.$store.state.signupFields = VueCookies.get('signupFields');
    this.sessionId = uuid.v4();
  },
  watch: {
    startDate (val) {
      this.startDateFormatted = this.formatDate(this.startDate)
    },
    endDate (val) {
      this.endDateFormatted = this.formatDate(this.endDate)
    }
  },
  mixins: [District, Region]
}
</script>
