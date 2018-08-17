<template>
  <div class = "fields">
    <h1>Добрейший вечерочек v.2.0.  </h1>
    <hr>
   

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
    
    skills: '',
    contact: {
      phone: '',
      email: ''
    }
  };
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
