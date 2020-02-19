<template>
  <v-layout column>
    <v-flex>
      Select filters below report to display report
    </v-flex>
    <v-flex text-sm-left>
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
        <v-flex xs1>
          <v-select
            :items="modules"
            v-model="gameModule"
            label="Module"
          ></v-select>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs1>
          <v-select
            :items="cadres"
            v-model="cadre"
            label="Cadre"
          ></v-select>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs1>
          <v-select
            :items="trainings"
            v-model="training"
            label="Type of Training"
          ></v-select>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs1>
          <v-select
            :items="regions"
            v-model="region"
            label="Region"
          ></v-select>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs1>
          <v-select
            :items="districts[region]"
            v-model="district"
            label="District"
          ></v-select>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs1>
          <v-btn color="primary" round @click="getReport"><v-icon left>list</v-icon> View</v-btn>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-flex>
    <v-toolbar flat color="white">
      <v-toolbar-title>{{ moduleTitle }}</v-toolbar-title>
    </v-toolbar>

    <v-data-table
      :items="summary"
      hide-actions
      hide-headers
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.question }}</td>
        <td>{{ props.item.value }}</td>
      </template>
    </v-data-table>

    <v-flex v-if="moduleName == 'Module 1'" text-xs-left class="pt-3">
      <div v-for="client in clients" v-bind:key="client.id" class="pb-3 pt-2">
        <v-data-table
          :headers="questionHeaders.module1[client.id]"
          :items="questionData.module1[client.id]"
          :items-per-page="10"
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.question }}</td>
            <td>{{ props.item.percent }}</td>
          </template>
        </v-data-table>
      </div>
    </v-flex>
    <v-flex v-if="moduleName == 'Module 2'" text-cs-left class="pt-3">
      <v-data-table
        :headers="questionHeaders.module2"
        :items="questionData.module2"
        :items-per-page="10"
        hide-actions
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.question }}</td>
          <td>{{ props.item.percent }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
import numeral from "numeral";

import District from "@/mixins/District.js";
import Region from "@/mixins/Region.js";

let module1 = require('./questions/module1.js');
let module2 = require('./questions/module2.js');

const config = require('../../config')
const isProduction = process.env.NODE_ENV === 'production'
const backendServer = (isProduction ? config.build.backend : config.dev.backend);

export default {
  created() {
    let questions = {
      module1: {},
      module2: {}
    };

    for (var clientId in module1) {
      let client = {};        

      for (var j in module1[clientId]) {
        client[j] = {
          attempted: 0,
          correct: 0,
          question: module1[clientId][j].situationText
        };
      }

      questions.module1[clientId] = client;
    }

    for (var i in module2) {
      questions.module2[i] = {
        attempted: 0,
        correct: 0,
        question: module2[i].situationText
      };
    }

    this.questions = questions;
  },
  data() {
    return {
      region: "",
      district: "",
      cadres: [
        {text: "All", value: ""},
        {text: "Enrolled Nurse", value: "enrolled-nurse"},
        {text: "Registered Nurse", value: "registered-nurse"},
        {text: "Clinical Assistant", value: "clinical-assistant"},
        {text: "Clinical Officer", value: "clinical-officer"},
        {text: "Assistant Medical Officer", value: "assistant-medical-officer"},
        {text: "Medical Officer", value: "medical-officer"},
        {text: "Assistant Dental Officer", value: "assistant-dental-officer"},
        {text: "Dental Officer", value: "dental-officer"}
      ],
      cadre: "",
      moduleTitle: null,
      questionHeaders: {
        module1: {
          clientA: [
            {
              text: "Client A (Amani) Percentage of participants who answered each question correctly",
              value: "question",
              sortable: false
            },
            {
              text: "",
              value: "percent",
              sortable: false
            }
          ],
          clientB: [
            {
              text: "Client B (Zabron) Percentage of participants who answered each question correctly",
              value: "question",
              sortable: false
            },
            {
              text: "",
              value: "percent",
              sortable: false
            }
          ],
          clientC: [
            {
              text: "Client C (Anold) Percentage of participants who answered each question correctly",
              value: "question",
              sortable: false
            },
            {
              text: "",
              value: "percent",
              sortable: false
            }
          ]
        },
        module2: [
          {
            text: "Percentage of participants who answered each question correctly",
            value: "question",
            sortable: false
          },
          {
            text: "",
            value: "percent",
            sortable: false
          }
        ]
      },
      questionData: {},
      startDateMenu: false,
      endDateMenu: false,
      startDateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      startDate: new Date().toISOString().substr(0, 10),
      endDateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      endDate: new Date().toISOString().substr(0, 10),
      modules: [1, 2],
      reportRun: false,
      clients: [
        {id: "clientA", name: "Amani"},
        {id: "clientB", name: "Zabron"},
        {id: "clientC", name: "Anold"}
      ],
      gameModule: 1,
      questions: {},
      client: 'clientA',
      module1: module1,
      module2: module2,
      moduleName: null,
      report: [],
      training: "",
      trainings: [
        {text: "All", value: ""},
        {text: "New / Basic", value: "basic"},
        {text: "Refresher", value: "refresher"}
      ],
      summary: []
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
    getReport () {
      this.gameModule
      if(this.gameModule == 1) {
        this.getModule1Report()
      } else if(this.gameModule == 2) {
        this.getModule2Report()
      }
    },
    getQuery() {
      return `startDate=${this.startDate}&endDate=${this.endDate}&cadre=${this.cadre}&trainingType=${this.training}&region=${this.region}&district=${this.district}`;
    },
    getModule1Report() {
      this.report = [];

      let query = this.getQuery();

      axios.get(backendServer + `/getModule1Report?${query}`).then(response => {
        let numCompleted = 0;
        let fullyComplete = false;
        let questions = this.questions;
        let report = {};
        let totalAttempted = 0;
        let questionData = {};
        let summary = [];

        for (var i in this.clients) {
          report[this.clients[i].id] = {
            completed: 0,
            total: 0
          };

          questionData[this.clients[i].id] = [];
        };

        this.reportRun = true;
        this.moduleName = "Module 1";

        for (var i in response.data) {
          fullyComplete = true;
          let submission = response.data[i];
          totalAttempted++;

          for (var j in this.clients) {
            let client = this.clients[j].id;

            if (submission.answers[client]) {
              report[client].total++;

              if (Object.keys(submission.answers[client]).length == Object.keys(module1[client]).length) {
                report[client].completed++;
              } else {
                fullyComplete = false;
              }

              for (var k in submission.answers[client]) {
                questions.module1[client][k].attempted++;

                if (submission.answers[client][k].impact == 1) {
                  questions.module1[client][k].correct++;
                }
              }
            } else {
              fullyComplete = false;
            }
          }

          if (fullyComplete) {
            numCompleted++;
          }
        }

        summary.push({
          question: "Number of Learners who Completed Module 1",
          value: numCompleted + " (" + numeral(numCompleted / totalAttempted).format("0.00%") + ")"
        });

        summary.push({
          question: "Number of Learners who Completed Client A",
          value: report.clientA.completed + " (" + numeral(report.clientA.completed / report.clientA.total).format("0.00%") + ")"
        });

        summary.push({
          question: "Number of Learners who Completed Client B",
          value: report.clientB.completed + " (" + numeral(report.clientB.completed / report.clientB.total).format("0.00%") + ")"
        });

        summary.push({
          question: "Number of Learners who Completed Client C",
          value: report.clientC.completed + " (" + numeral(report.clientC.completed / report.clientC.total).format("0.00%") + ")"
        });

        summary.push({
          question: "Total Number of Learners in this Training(s)",
          value: response.data.length
        });

        this.summary = summary;

        for (var clientId in questions.module1) {
          for (var j in questions.module1[clientId]) {
            questionData[clientId].push({
              question: questions.module1[clientId][j].question,
              percent: numeral(questions.module1[clientId][j].correct / questions.module1[clientId][j].attempted).format("0.00%")
            });
          }
        }

        this.questionData.module1 = questionData;
        this.moduleTitle = "Module 1: VMMC Health Education, Counseling and HIV Testing";
      });
    },
    getModule2Report() {
      let query = this.getQuery();

      axios.get(backendServer + `/getModule2Report?${query}`).then(response => {
        let questionData = [];
        let questions = this.questions.module2;
        let totalAttempted = 0;
        let totalCompleted = 0;
        let summary = [];

        this.reportRun = true;
        this.moduleName = "Module 2";

        for (var i in response.data) {
          let submission = response.data[i];
          totalAttempted++;

          if (Object.keys(submission.answers).length == (Object.keys(module2).length)) {
            totalCompleted++;
          }

          for (var j in submission.answers) {
            let correct = true;

            questions[j - 1].attempted++;

            for (var k in submission.answers[j]) {
              if (submission.answers[j][k] != "Correct") {
                correct = false;
                break;
              }
            }

            if (correct) {
              questions[j - 1].correct++;
            }
          }
        }

        for (var i in questions) {
          questionData.push({
            question: questions[i].question,
            percent: numeral(questions[i].correct / questions[i].attempted).format("0.00%")
          });
        }

        summary.push({
          question: "Number of Learners who Completed Module 2",
          value: totalCompleted + " (" + numeral(totalCompleted / totalAttempted).format("0.00%") + ")"
        });

        summary.push({
          question: "Total Number of Learners in this Training(s)",
          value: response.data.length
        });

        this.questionData.module2 = questionData;
        this.moduleTitle = "Module 2: MC Surgical Procedure (Dorsal Slit Method)";
        this.summary = summary;
      })
    },
    resetQuestionCount() {
      for (var clientId in this.questions.module1) {
        for (var j in this.questions.module1[clientId]) {
          this.questions.module1[clientId][j].attempted = 0;
          this.questions.module1[clientId][j].correct= 0;
        }
      }

      for (var i in this.questions.module2) {
        this.questions.module2[j].attempted = 0;
        this.questions.module2[j].correct = 0;
      }
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
  mixins: [District, Region]
};
</script>
