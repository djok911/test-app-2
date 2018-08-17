<template>
  <div>

<input type="text" v-model="fio.secondName" placeholder="Фамилия" class="form-control">
<p> {{ fio.secondName }} </p>

    
<br>
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

</template>

<script>
import { bus } from '../main.js';

export default {
    data() {
      return{
      fio: {
      name: '',
      secondName: '',
      patronomyc: '',
      bDay: Date
     }
      }
  },
  props: {
    currentComp: {
      type: String,
      required: true
    }, 
    
    
  },
  methods: {
    switchComponent(comp) {
      bus.$emit('switchComp', comp)
      
    }
  }

}

</script>

<style scoped>

</style>