<template>
 <div>
    <label>Ваши профессиональные навыки:</label>
    <textarea v-model="skill.skills" class="form-control"></textarea>
   
    <div class = "buttons">
    <button 
    class="btn btn-success" 
    @click="switchComponent('fio')"
    :disabled="currentComp === 'fio'"
    >Back</button>
    
    <button 
    class="btn btn-success" 
    @click="switchComponent('contact')"
    :disabled="currentComp === 'contact'"
    >Next</button>
    </div>
  </div>
</template>

<script>
import { bus } from '../main.js';

export default {
    props: {
      skill: {
        type: Object
      },

      currentComp: {
      type: String,
      required: true
      }
    },
    methods: {
    switchComponent(comp) {
      bus.$emit('switchComp', comp)
      
    },
    
   data() {
     return {
       
     }
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