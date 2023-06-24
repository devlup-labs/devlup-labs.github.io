<!-- Project[1]->Project name -->
<!-- Project[2]->Project description -->
<!-- Project[3]->Project info -->
<!-- Project[4]->Project github-link -->
<!-- Project[5]->Project web-link -->
<!-- Project[6]->Project tag1 -->
<!-- Project[7]->Project tag2 -->
<!-- Project[8]->Project tag3 -->
<!-- Project[9]->Project image1-->
<!-- Project[10]->Project image2 -->
<!-- Project[11]->Project image3 -->
<template lang="pug">
v-row(align='center', justify='left')
  v-flex
    v-card.pa-2.elevation-6(:width='0.9*getProjectHeight', hover='hover')
      h2(underline='underline') {{ Project[1] }}
      v-carousel(hide-delimiters='hide-delimiters', :height='0.5*getProjectHeight', show-arrows-on-hover='show-arrows-on-hover')
        v-carousel-item(v-if='Project[9]',contain='contain', :src='Project[9]')
        v-carousel-item(v-if='Project[10]',contain='contain', :src='Project[10]')
        v-carousel-item(v-if='Project[11]',contain='contain', :src='Project[11]')
      v-card(flat='flat')
        h5.pa-1.d-inline-blocktext-truncate(style='height:50px') {{ Project[2] }}
        v-divider
        v-flex.pa-1
          v-chip.pa-2.ma-1(v-if='Project[6]',label='label', small='small') {{ Project[6] }} 
          v-chip.pa-2.ma-1(v-if='Project[7]',label='label', small='small') {{ Project[7] }} 
          v-chip.pa-2.ma-1(v-if='Project[8]',label='label', small='small') {{ Project[8] }} 
          v-btn(icon='icon', @click='show = !show')
            v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
        v-expand-transition
          div(v-show='show')
            h6.pa-1 {{ Project[3] }}
        v-row.justify-space-around
          v-col(cols='5', v-if='Project[4]')
            v-btn.ml-1.mr-1(:href='Project[4]',target='_blank', dark='dark', block='block')
              v-icon mdi-github 
          v-col(cols='5', v-if='Project[5]')
            v-btn.ml-1.mr-1(:href='Project[5]',target='_blank', block='block')
              v-icon mdi-web 
     
</template>

<script>
/*import dataProject from "/frontend/data/dataProject.json";*/
export default {
  name: "ProfileCard",
  props: ["Project"],
  data() {
    return {
      show: false
    };
  },
  computed: {
    getProjectHeight() {
      return (
        this.ProjectHeight || this.$vuetify.theme.options.cards.ProjectHeight
      );
    }
  }
};
</script>
