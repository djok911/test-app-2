import Vue from 'vue'
import App from './App.vue'

import AppFIO from './resume/fio.vue';
import AppContact from './resume/contact.vue';
import AppSkills from './resume/skills.vue';
import AppSumInfo from './resume/sum_info.vue';

Vue.component('AppFIO', AppFIO);
Vue.component('AppContact', AppContact);
Vue.component('AppSkills', AppSkills);
Vue.component('AppSumInfo', AppSumInfo);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
