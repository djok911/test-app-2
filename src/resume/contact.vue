<template>
  <div>
    <input type="email" v-model="contact.email" placeholder="Адрес электронной почты" class="form-control">
      <hr>
    <input type="tel" v-model="contact.phone" placeholder="Мобильный телефон" class="form-control">
        
      <div class = "buttons">

        <button 
        class="btn btn-success" 
        @click="switchComponent('skills')"
        :disabled="currentComp === 'skills'"
        >Back</button>
        <button 
        class="btn btn-success" 
        @click="switchComponent('sum-info')"
        :disabled="currentComp === 'sum-info'"
        >Next</button>

      </div>

  </div>
  
</template>

<script>

import { bus } from '../main.js';


export default {
   data() {
      return{
      }
  },
  props: {
    currentComp: {
      type: String,
      required: true
    },
    contact: {
      type: Object
      }
      
    },
    
    methods: {
    switchComponent(comp) {
      bus.$emit('switchComp', comp);
    }
  }   
   }

</script>

<style scoped>

.buttons {
  text-align: center;
  margin-top: 20px;
}

</style>