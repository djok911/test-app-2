<template>
  <div>
    <h4>Hello from Summary</h4>
     <fio>
      {{ fio.secondName }} 
      <br>
      {{ fio.name }}
      <br>
      {{fio.patronomyc}}
      <br>
      {{fio.bDay}}
    </fio>
    <br>
   <contact>
      {{ contact.email }}
      <br>
      {{ contact.phone }}
    </contact> 
     <hr>
    <skills>
      {{ skill.skills }}
    </skills>

    
  </div>
  
</template>

<script>

export default {
 props: {
      fio: {
        type: Object
      },
      contact: {
        type: Object
      },
      skill: {
        type: Object
      }
      
      
    }
}
</script>

<style scoped>



</style>