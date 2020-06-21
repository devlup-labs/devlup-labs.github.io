<template lang="pug">
v-row(justify='left')
  v-col
    v-card.elevation-5(:width="1.08*getProfileWidth")
      v-stepper(v-model="pageNo")
        v-stepper-items
          v-stepper-content.pa-0(step="1")
            v-card.pl-1(:width="getProfileWidth" flat)
              v-row 
                v-col(cols="4" style="background-color:#fff") 
                  v-avatar(:size="(4.5/15)*getProfileWidth")
                    img(:src="Profile.gsx$src.$t" contain)
                v-col.pa-2(cols="7")  
                  div
                    h4.mt-1.mb-n2 {{ Profile.gsx$name.$t }}
                    v-row.justify-center
                      v-col
                        h6 {{ Profile.gsx$currentdesignation.$t }} | {{Profile.gsx$devlupdesignation.$t }}
                  v-row(align="center" justify="center") 
                    v-btn(color='red',:href="Profile.gsx$linkemail.$t",v-if='Profile.gsx$linkemail.$t' icon small)
                      v-icon(color='red') mdi-email
                    v-btn(color='black',:href="Profile.gsx$linkgithub.$t",v-if='Profile.gsx$linkgithub.$t' icon small)
                      v-icon(color='black') mdi-github
                    v-btn(color='orange',:href="Profile.gsx$linkgitlab.$t",v-if='Profile.gsx$linkgitlab.$t' icon small)
                      v-icon(color='orange') mdi-gitlab
                    v-btn(color='blue',:href="Profile.gsx$linklinkedin.$t",v-if='Profile.gsx$linklinkedin.$t' icon small)
                      v-icon(color='blue') mdi-linkedin
                v-icon(@click="pageNo = 2" color="#1b65c4") mdi-chevron-right
          v-stepper-content.pb-1.pt-1.pl-1(step="2")
            v-card(height="105px")
              v-row(align='center', justify='center')
                v-col(cols="1")
                  v-icon.mt-6(@click="pageNo = 1" color="#1b65c4") mdi-chevron-left
                v-col(cols="11")  {{ Profile.gsx$info.$t }}
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
  },
  mounted() {
    console.log(this.Profile);
  }
};
</script>
