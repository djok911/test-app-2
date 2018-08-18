<template>
  <div>

<input type="text" v-model="fio.secondName" placeholder="Фамилия" class="form-control">
<br>
<input type="text" v-model="fio.name" placeholder="Имя" class="form-control">
<br>
<input type="text" v-model="fio.patronomyc" placeholder="Отчество" class="form-control">
<br>
<input type="date" v-model="fio.bDay" placeholder="Дата рождения" class="form-control">

<div class = "buttons">
  <button 
  class="btn btn-success disabled" 
  @click="switchComponent('fio')"
  :disabled="currentComp === 'fio'"
  >Back</button>
  
<button 
  class="btn btn-success" 
  @click="switchComponent('skills')"
   :disabled="currentComp === 'skills'"
  >Next</button>

  </div>

  </div>

</template>

<script>
import { bus } from '../main.js';

export default {
    data() {
      return {
      }
  },
  props: {
    currentComp: {
      type: String,
      required: true
    },
    fio: {
      type: Object
    } 
        
  },
  methods: {
    switchComponent(comp) {
      bus.$emit('switchComp', comp)
      
    }
  }

}

</script>

<style scoped>

.buttons {
  text-align: center;
  margin-top: 20px;
}
  input[type="date"]:before {
    content: attr(placeholder) !important;
    color: #aaa;
    margin-right: 0.5em;
  }
  input[type="date"]:focus:before,
  input[type="date"]:valid:before {
    content: "";
  }

</style>