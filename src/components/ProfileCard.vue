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
                    img(:src="Profile.src" contain)
                v-col.pa-2(cols="7")  
                  div
                    h4.mt-1.mb-n2 {{ Profile.name }}
                    v-row.justify-center
                      v-col
                        h6 {{ Profile.currentDesignation }} | {{Profile.devlupDesignation }}
                  v-row(align="center" justify="center") 
                    v-btn(v-for='link in Profile.links', :key='link.name',:color='link.iconColor',:href="link.href" icon small)
                      v-icon(:color='link.iconColor') {{link.icon}}
                v-icon(@click="pageNo = 2" color="#1b65c4") mdi-chevron-right
          v-stepper-content.pb-1.pt-1.pl-1(step="2")
            v-card(height="105px")
              v-row(align='center', justify='center')
                v-col(cols="1")
                  v-icon.mt-6(@click="pageNo = 1" color="basic") mdi-chevron-left
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
