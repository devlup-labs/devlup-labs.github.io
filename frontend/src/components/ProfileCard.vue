<template lang="pug">
  div(align="center")
    body(bgcolor="#E6E6FA")
    br
    v-card.pa-5(height="460" width="350" border hover color="#5CD0FF")
      div
        br 
        v-img(src="../assets/Jash.jpg" max-height="250" contain)
        h2(align-text="center") JASH PATEL
        v-divider
        div(style="background-color:#F15B5c")
          v-card-text All the info goes here about interests and positions in Devlup Labs.
          h4 All the info about current status.  
          br
          v-divider
          v-card-actions
            v-flex
              v-btn(icon href="#")
                v-icon(color="#5CD0FF") mdi-email  
              v-btn(icon href="#")
                v-icon(color="#5CD0FF") mdi-github    
              v-btn(icon href="#")
                v-icon(color="#5CD0FF") mdi-gitlab 
              v-btn(icon href="#")
                v-icon(color="#5CD0FF") mdi-linkedin       
</template>
<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>


