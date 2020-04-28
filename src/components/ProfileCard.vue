<template lang="pug">
v-row(justify='left')
  v-col
    v-card.elevation-5(:width="1.08*getProfileWidth")
      v-stepper(v-model="pageNo")
        v-stepper-items
          v-stepper-content.pa-0(step="1")
            v-card(:width="getProfileWidth" flat)
              v-row 
                v-col(cols="4" style="background-color:#1b65c4") 
                  v-avatar(:size="(4/15)*getProfileWidth")
                    v-img(:src="Profile.src" contain)
                v-col.pa-2(cols="7" align="left")  
                  div
                    h4 
                      u {{ Profile.Name }}
                    h6 Current position : {{ Profile.CurrentDesignation }}
                    h6 Position in DevlUp : {{Profile.DevlupDesignation }}
                  v-flex.mt-1 
                    v-btn(:href="Profile.EmailLink" icon small v-if="Profile.EmailLink")
                      v-icon(color="red") mdi-email
                    v-btn(:href="Profile.GithubLink" icon small v-if="Profile.GithubLink")
                      v-icon(color="black") mdi-github
                    v-btn(:href="Profile.GitlabLink" icon small v-if="Profile.GitlabLink")
                      v-icon(color="orange") mdi-gitlab
                    v-btn(:href="Profile.LinkedinLink" icon small v-if="Profile.LinkedinLink")
                      v-icon(color="blue") mdi-linkedin     
                v-col.pt-1.pa-0(cols="1")    
                  v-icon(@click="pageNo = 2" color="basic") mdi-arrow-right-box
          v-stepper-content.pa-1(step="2")
            v-card(height="96px")
              v-row
                v-col(cols="1")
                  v-icon(@click="pageNo = 1" color="basic") mdi-arrow-left-box
                v-col(cols="11")  {{ Profile.info }}
</template>
<script>
export default {
  name: "ProfileCard",
  props: ["Profile"],
  data: () => ({
    pageNo: 1
  }),
  computed: {
    getProfileWidth() {
      return (
        this.ProfileWidth || this.$vuetify.theme.options.cards.ProfileWidth
      );
    }
  }
};
</script>
