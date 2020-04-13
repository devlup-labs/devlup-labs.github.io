

<template lang="pug">
v-card(width="300")
  v-stepper(v-model="e1")
    v-stepper-items
      v-stepper-content(step="1")
        v-card.pa-1(width="275")
          v-row 
            v-col(cols="5") 
              v-img(src="../assets/Jash.jpg" contain)
            v-col.pa-1(cols="7") 
              div
                h5 
                  u JASH PATEL
                h6 Batch 2022  
              v-flex
                v-btn(icon href="#")
                  v-icon(color="red") mdi-email  
                v-btn(icon href="#")
                  v-icon(color="black") mdi-github    
                v-btn(icon href="#")
                  v-icon(color="orange") mdi-gitlab 
                v-btn(icon href="#")
                  v-icon(color="blue") mdi-linkedin  
                v-btn(
                  color="primary"
                  @click="e1 = 2"
                ) Learn more

      v-stepper-content(step="2")
        v-card(width="275") ALL THE INFO HERE
          br
          v-btn(
          color="primary"
          @click="e1 = 1"
          )          Go back
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>



