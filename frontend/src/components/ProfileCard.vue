<template lang="pug">
v-container
  v-card(v-for="Profile in Profiles" :key="Profile.name" :width="getProfileWidth")
    v-stepper(v-model="e1")
      v-stepper-items
        v-stepper-content.pa-0(step="1")
          v-card.pl-3(:width="getProfileWidth")
            v-row 
              v-col(cols="4" style="background-color:#21a9e5") 
                v-avatar(:size="(4/15)*getProfileWidth")
                  v-img(:src="Profile.src" contain)
              v-col.pa-2(cols="6" align="left")  
                div
                  h4 
                    u {{ Profile.Name }}
                  h6 Current position : {{ Profile.CurrentDesignation }}
                  h6 Position in Devlup : {{Profile.DevlupDesignation }}
                v-flex.mt-1 
                  v-btn(:href="Profile.EmailLink" icon small v-if="Profile.EmailLink")
                    v-icon(color="red") mdi-email
                  v-btn(:href="Profile.GithubLink" icon small v-if="Profile.GithubLink")
                    v-icon(color="black") mdi-github
                  v-btn(:href="Profile.GitlabLink" icon small v-if="Profile.GitlabLink")
                    v-icon(color="orange") mdi-gitlab
                  v-btn(:href="Profile.LinkedinLink" icon small v-if="Profile.LinkedinLink")
                    v-icon(color="blue") mdi-linkedin     
              v-col.pa-1(cols="2")    
                v-icon(@click="e1 = 2") mdi-arrow-right-box
        v-stepper-content.pa-1(step="2")
          v-row
            v-col(cols="1")
              v-icon(@click="e1 = 1") mdi-arrow-left-box
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
        e1: 1,
        Profiles:[
        { Name: "Profile Name", CurrentDesignation: "Student", DevlupDesignation: "", info: "All the info here.", 
        src: require('../assets/Profile.png'), EmailLink:"#", GithubLink:"#", GitlabLink:"#", LinkedinLink:"#"}
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
