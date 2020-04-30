<template lang="pug">
v-row(justify='left')
  v-col
    v-card.elevation-5(:width="1.08*getProfileWidth")
      v-stepper(v-model="pageNo")
        v-stepper-items
          v-stepper-content.pa-0(step="1")
            v-card.pl-3(:width="getProfileWidth" flat)
              v-row 
                v-col(cols="4" style="background-color:#1b65c4") 
                  v-avatar(:size="(4/15)*getProfileWidth")
                    v-img(:src="Profile.src" contain)
                v-col.pa-2(cols="7" align="left")  
                  div
                    h4 
                      u {{ Profile.name }}
                    h6 Current position : {{ Profile.currentDesignation }}
                    h6 Position in DevlUp : {{Profile.devlupDesignation }}
                  v-row.ml-1
                    v-btn(v-for='link in Profile.links', :key='link.name',:color='link.iconColor',:href="link.href" icon small)
                      v-icon(:color='link.iconColor') {{link.icon}}
                v-icon(@click="pageNo = 2" color="basic",size="25") mdi-arrow-right-box
          v-stepper-content.pa-1(step="2")
            v-card(height="97px")
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
