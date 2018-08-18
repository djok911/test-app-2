<template>
  <div class = "fields">
    <h1>Добрейший вечерочек v.2.0.  </h1>
    <hr>
       <sum-info 
      v-if="currentComp == 'sum-info'"
      :fio = "fio"
      :contact = "contact"
      :skill = "skill"
      >
      </sum-info>

      <fio 
      v-if="currentComp == 'fio'"
      :fio = "fio">
      </fio>

      <skills 
      v-if="currentComp == 'skills'"
      :skill = "skill">
      </skills>

      <contact 
      v-if="currentComp == 'contact'"
      :contact = "contact">
      </contact>

   <toolbar :current-comp="currentComp"></toolbar>    

    <div class="container">
      <component :is="currentComp"></component>
    </div>
    
  </div>

</template>

<script>

import AppFIO from './resume/fio.vue';
import AppContact from './resume/contact.vue';
import AppSkills from './resume/skills.vue';
import AppSumInfo from './resume/sum_info.vue';

import { bus } from './main.js';

export default {
name: 'app',
data() {
  return {
    
    currentComp: 'fio',
    fio: {
      name: '',
      secondName: '',
      patronomyc: '',
      bDay: Date
     },

    skill: {
      skills: ''
    },

    contact: {
      phone: '',
      email: ''
    }
  }
  
},

created() {
 bus.$on('switchComp', comp => {
           this.currentComp = comp;
      })


},
 components: {
    'fio': AppFIO,
    'contact': AppContact,
    'skills': AppSkills,
    'sum-info': AppSumInfo
  }

}
</script>

<style scoped>
.fields{
  max-width: 700px;
  margin: 20px auto;
}
</style>
