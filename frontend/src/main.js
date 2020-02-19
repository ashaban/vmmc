import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import Vuelidate from 'vuelidate'
import VueDragDrop from 'vue-drag-drop'
import App from './App.vue'
import {store} from './store'
import router from './router'
import numeral from "numeral";

Vue.config.productionTip = false;
export const eventBus = new Vue();

Vue.filter("formatPercent", value => {
  return numeral(value).format("0.00%");
});

Vue.filter("sentenceCase", value => {
  if (!value) {
    return null;
  }

  if (typeof value != "string") {
    return value;
  }

  let data = value.replace(/([A-Z])/g, " $1");
  data = data.charAt(0).toUpperCase() + data.slice(1);
  return data;
});

Vue.use(Vuelidate)
Vue.use(VueDragDrop)
new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
