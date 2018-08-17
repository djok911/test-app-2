<template>
  <div>
    <h4>Hello from Summary</h4>
    {{ secondName }}
  </div>
  
</template>

<script>
import { bus } from '../main.js';



export default {
    props: ['fio.secondName'],
   data() {
     return {
       
     }
   }


   }
 

</script>

<style scoped>

</style>