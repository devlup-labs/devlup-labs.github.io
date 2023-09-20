<!-- Profile[0]->Profile index -->
<!-- Profile[1]->Profile name -->
<!-- Profile[2]->Profile current designation -->
<!-- Profile[3]->Profile devlup labs designation-->
<!-- Profile[4]->Profile info -->
<!-- Profile[5]->Profile image url -->
<!-- Profile[6]->Profile email -->
<!-- Profile[7]->Profile github link -->
<!-- Profile[8]->Profile gitlab link -->
<!-- Profile[9]->Profile linkedin -->
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
                    img(:src=`(Profile.src=="")?"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png":Profile.src` contain)
                v-col.pa-2(cols="7")  
                  div
                    h4.mt-1.mb-n2 {{ Profile.name }}
                    v-row.justify-center
                      v-col
                        h6 {{ Profile.currentDesignation }} | {{Profile.devlupDesignation }}
                  v-row(align="center" justify="center") 
                    v-btn(color='red',:href="Profile.linkemail",target='_blank',v-if='Profile.linkemail' icon small)
                      v-icon(color='red') mdi-email
                    v-btn(color='black',:href="Profile.linkgithub",target='_blank',v-if='Profile.linkgithub' icon small)
                      v-icon(color='black') mdi-github
                    v-btn(color='orange',:href="Profile.linkgitlab",target='_blank',v-if='Profile.linkgitlab' icon small)
                      v-icon(color='orange') mdi-gitlab
                    v-btn(color='blue',:href="Profile.linklinkedin",target='_blank',v-if='Profile.linklinkedin' icon small)
                      v-icon(color='blue') mdi-linkedin
                v-col(cols="1")        
                  v-icon.ml-n4.mt-8(@click="pageNo = 2" color="#1b65c4") mdi-chevron-right
          v-stepper-content.pb-3.pt-1.pl-1.mt-n2(step="2")
            v-card(height="105.5px")
              v-row.justify-center.align-center
                v-col(cols="1")
                  v-icon.mx-1(@click="pageNo = 1" color="#1b65c4") mdi-chevron-left
                v-col.mb-2(cols="11")  {{ Profile.info }}
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
