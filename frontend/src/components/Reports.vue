<template>
  <v-layout column>
    <v-flex>
      Select filters below report to display report
    </v-flex>
    <v-flex>
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex xs2>
          <v-menu
            v-model="startDateMenu"
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
            <v-date-picker v-model="startDate" @input="startDateMenu = false"></v-date-picker>
          </v-menu>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs2>
          <v-menu
            v-model="endDateMenu"
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
            <v-date-picker v-model="endDate" @input="endDateMenu = false"></v-date-picker>
          </v-menu>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs2>
          <v-select
            :items="modules"
            v-model="gameModule"
            label="Module"
          ></v-select>
        </v-flex>
        <v-flex xs2>
          <v-select
            :items="pieTypes"
            v-model="pieType"
            label="Chart Type"
          ></v-select>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs2 v-if='gameModule === 1'>
          <v-select
            :items="clients"
            v-model="client"
            label="Client"
          ></v-select>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs2>
          <v-btn color="primary" round @click="getReport"><v-icon left>list</v-icon> View</v-btn>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-flex>
    <v-flex v-if='Object.keys(moodPieOptions).length'>
      <b>Mood Meter Report</b>
      <v-chart :options="moodPieOptions"/>
    </v-flex>
    <v-flex v-if='Object.keys(procStatusPieOptions).length'>
      <b>Procedure Status</b>
      <v-chart :options="procStatusPieOptions"/>
    </v-flex>
    <v-flex v-if='chartOptions.length'>
      <b>Answers To Questions Report</b>
      <v-layout row wrap>
        <v-flex xs4 v-for='(chartOption, index) in chartOptions' :key='index'>
          <v-tooltip top>
            <template slot="activator">
              {{chartOption.title.text}}
            </template>
            <span v-if='gameModule === 1'>{{module1[client][chartOption.questionIndex].situationText}}</span>
            <span v-if='gameModule === 2'>{{module2[chartOption.questionIndex].situationText}}</span>
          </v-tooltip>
          <v-chart :options="chartOption"/>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
let module1 = require('./questions/module1.js')
let module2 = require('./questions/module2.js')

const config = require('../../config')
const isProduction = process.env.NODE_ENV === 'production'
const backendServer = (isProduction ? config.build.backend : config.dev.backend)
export default {
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      startDateMenu: false,
      endDateMenu: false,
      startDateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      startDate: new Date().toISOString().substr(0, 10),
      endDateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      endDate: new Date().toISOString().substr(0, 10),
      modules: [1, 2],
      clients: ['clientA', 'clientB', 'clientC'],
      gameModule: 1,
      client: 'clientA',
      chartOptions: [],
      moodPieOptions: {},
      procStatusPieOptions: {},
      module1: module1,
      module2: module2,
      pieTypes: [{text: 'Area', value: 'area'}, {text: 'Radius', value: 'radius'}, {text: 'Normal', value: false}],
      pieType: 'area'
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
    createChartDefOpt () {
      let opt = {
        title : {
            text: '',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: []
        },
        series : [
            {
                name: '',
                type: 'pie',
                radius : '30%',
                center: ['30%', '30%'],
                roseType: this.pieType,
                data:[],
                animation: true,
                animationType: 'expansion',
                animationThreshold: 2000,
                animationDuration: 1000,
                animationDelay: 0
            }
        ]
      }
      return opt
    },
    getReport () {
      this.gameModule
      if(this.gameModule == 1) {
        this.getModule1Report()
      } else if(this.gameModule == 2) {
        this.getModule2Report()
      }
    },
    getModule1Report () {
      this.chartOptions = []
      let query = `startDate=${this.startDate}&endDate=${this.endDate}&client=${this.client}`
      axios.get(backendServer + `/getModule1Report?${query}`).then((response) => {
        for(let question in response.data.questionsAssesment) {
          let pieOption = this.createChartDefOpt()
          pieOption.questionIndex = question - 1
          pieOption.title.text = 'Question ' + question
          pieOption.title.subtext = 'Question ' + question
          pieOption.series[0].name = 'Question ' + question
          for(var assessmentName in response.data.questionsAssesment[question]) {
            pieOption.legend.data.push(assessmentName + " (" + response.data.questionsAssesment[question][assessmentName] + ")")
            pieOption.series[0].data.push({
              value: response.data.questionsAssesment[question][assessmentName],
              name: assessmentName + " (" + response.data.questionsAssesment[question][assessmentName] + ")"
            })
          }
          this.chartOptions.push(pieOption)
        }
        
        if(response.data && response.data.hasOwnProperty('clientsMood')) {
          this.moodPieOptions = this.createChartDefOpt()
          this.moodPieOptions.title.text = 'Client Mood'
          this.moodPieOptions.title.subtext = 'Client Mood'
          this.moodPieOptions.series[0].name = 'Client Mood'
          for(var moodName in response.data.clientsMood) {
            this.moodPieOptions.legend.data.push(moodName + " (" +response.data.clientsMood[moodName] + ")")
            this.moodPieOptions.series[0].data.push({
              value: response.data.clientsMood[moodName],
              name: moodName + " (" +response.data.clientsMood[moodName] + ")"
            })
          }
        }
      })
    },
    getModule2Report () {
      this.chartOptions = []
      let query = `startDate=${this.startDate}&endDate=${this.endDate}`
      axios.get(backendServer + `/getModule2Report?${query}`).then((response) => {
        for(let question in response.data.questionsAssesment) {
          let pieOption = this.createChartDefOpt()
          pieOption.questionIndex = question - 1
          pieOption.title.text = 'Question ' + question
          pieOption.title.subtext = 'Question ' + question
          pieOption.series[0].name = 'Question ' + question
          for(var assessmentName in response.data.questionsAssesment[question]) {
            pieOption.legend.data.push(assessmentName + " (" + response.data.questionsAssesment[question][assessmentName] + ")")
            pieOption.series[0].data.push({
              value: response.data.questionsAssesment[question][assessmentName],
              name: assessmentName + " (" + response.data.questionsAssesment[question][assessmentName] + ")"
            })
          }
          this.chartOptions.push(pieOption)
        }
        
        this.procStatusPieOptions = this.createChartDefOpt()
        this.procStatusPieOptions.title.text = 'Procedure Status'
        this.procStatusPieOptions.title.subtext = 'Procedure Status'
        this.procStatusPieOptions.series[0].name = 'Procedure Status'
        this.procStatusPieOptions.legend.data.push('Successful' + ' (' + response.data.successfulProcedure + ')')
        this.procStatusPieOptions.legend.data.push('Failed' + ' (' +response.data.failedProcedure + ')')
        this.procStatusPieOptions.series[0].data.push({
          value: response.data.successfulProcedure,
          name: 'Successful' + ' (' + response.data.successfulProcedure + ')'
        })
        this.procStatusPieOptions.series[0].data.push({
          value: response.data.failedProcedure,
          name: 'Failed' + ' (' +response.data.failedProcedure + ')'
        })
      })
    }
  },
   watch: {
      startDate (val) {
        this.startDateFormatted = this.formatDate(this.startDate)
      },
      endDate (val) {
        this.endDateFormatted = this.formatDate(this.endDate)
      }
    },

}
</script>
