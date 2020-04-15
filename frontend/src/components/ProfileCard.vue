<template lang="pug">
v-container
  v-card(v-for="Profile in Profiles" :key="Profile.name" :width="getProfileWidth")
    v-stepper(v-model="Profile.e1")
      v-stepper-items
        v-stepper-content.pa-1(step="1")
          v-card.pa-1(:width="getProfileWidth")
            v-row 
              v-col(cols="4") 
                v-avatar(:size="(4/15)*getProfileWidth")
                  v-img(:src="Profile.src" contain)
              v-col.pa-2(cols="6" align="left")  
                div
                  h4 
                    u {{ Profile.Name }}
                  h6 Current position : {{ Profile.Position1 }}
                  h6 Position in Devlup : {{Profile.Position2 }}
                v-flex.mt-1 
                  v-btn(:href="Profile.href1" icon small v-if="Profile.href1")
                    v-icon(color="red") mdi-email
                  v-btn(:href="Profile.href2" icon small v-if="Profile.href2")
                    v-icon(color="black") mdi-github
                  v-btn(:href="Profile.href3" icon small v-if="Profile.href3")
                    v-icon(color="orange") mdi-gitlab
                  v-btn(:href="Profile.href4" icon small v-if="Profile.href4")
                    v-icon(color="blue") mdi-linkedin     
              v-col.pa-1(cols="2")    
                v-icon(@click="Profile.e1 = 2") mdi-arrow-right-box
        v-stepper-content.pa-1(step="2")
          v-row
            v-col(cols="1")
              v-icon(@click="Profile.e1 = 1") mdi-arrow-left-box
            v-col(cols="11")  {{ Profile.info }}
</template>

<script>
  export default {
    name: "ProfileCard",
    props: {
    ProfileWidth: Number,
  },
    data () {
      return {
        
        Profiles:[
        { Name: "Profile Name", Position1: "Student", Position2: "", info: "All the info here.", 
        src: require('../assets/Profile.png'), href1:"#", href2:"#", href3:"#", href4:"#", e1: 1}
        ]
      }
    },
    computed: {
    getProfileWidth() {
      return this.ProfileWidth || this.$vuetify.theme.options.cards.ProfileWidth;
    }
  } 
}
</script>