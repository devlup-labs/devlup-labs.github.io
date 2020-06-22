<template lang="pug">
v-row(align='center', justify='left')
  v-flex
    v-card.pa-2.elevation-6(:width='0.9*getProjectHeight', hover='hover')
      h2(underline='underline') {{ Project.gsx$name.$t }}
      v-carousel(hide-delimiters='hide-delimiters', :height='0.5*getProjectHeight', show-arrows-on-hover='show-arrows-on-hover')
        v-carousel-item(v-if='Project.gsx$image1.$t',contain='contain', :src='Project.gsx$image1.$t')
        v-carousel-item(v-if='Project.gsx$image2.$t',contain='contain', :src='Project.gsx$image2.$t')
        v-carousel-item(v-if='Project.gsx$image3.$t',contain='contain', :src='Project.gsx$image3.$t')
      v-card(flat='flat')
        h5.pa-1.d-inline-blocktext-truncate(style='height:50px') {{ Project.gsx$description.$t }}
        v-divider
        v-flex.pa-1
          v-chip.pa-2.ma-1(v-if='Project.gsx$tag1.$t',label='label', small='small') {{ Project.gsx$tag1.$t }} 
          v-chip.pa-2.ma-1(v-if='Project.gsx$tag2.$t',label='label', small='small') {{ Project.gsx$tag2.$t }} 
          v-chip.pa-2.ma-1(v-if='Project.gsx$tag3.$t',label='label', small='small') {{ Project.gsx$tag3.$t }} 
          v-btn(icon='icon', @click='show = !show')
            v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
        v-expand-transition
          div(v-show='show')
            h6.pa-1 {{ Project.gsx$info.$t }}
        v-row.justify-space-around
          v-col(cols='5', v-if='Project.gsx$githublink.$t')
            v-btn.ml-1.mr-1(:href='Project.gsx$githublink.$t', dark='dark', block='block')
              v-icon mdi-github 
          v-col(cols='5', v-if='Project.gsx$weblink.$t')
            v-btn.ml-1.mr-1(:href='Project.gsx$weblink.$t', block='block')
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
  },
  mounted() {
    console.log(this.Profile);
  }
};
</script>
