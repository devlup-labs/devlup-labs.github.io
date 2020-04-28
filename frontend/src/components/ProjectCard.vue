<template lang="pug">
v-row(align='center', justify='left')
  v-flex
    v-card.pa-2.elevation-6(:width='0.9*getProjectHeight', hover='hover')
      h2(underline='underline') {{ Project.name }}
      v-carousel(hide-delimiters='hide-delimiters', :height='0.5*getProjectHeight', show-arrows-on-hover='show-arrows-on-hover')
        v-carousel-item(v-for='image in Project.images', contain='contain', :key='image.src', :src='image.src')
      v-card(flat='flat')
        h5.pa-1.d-inline-blocktext-truncate(style='height:50px') {{ Project.description }}
        v-divider
        v-flex.pa-1
          v-chip.pa-2.ma-1(v-for='link in Project.links', :key='link.name', label='label', small='small') {{ link.name }} 
          v-btn(icon='icon', @click='show = !show')
            v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
        v-expand-transition
          div(v-show='show')
            h6.pa-1 {{ Project.info }}
        v-row.justify-space-around
          v-col(cols='5', v-if='Project.GithubLink')
            v-btn.ml-1.mr-1(:href='Project.GithubLink', dark='dark', block='block')
              v-icon mdi-github 
          v-col(cols='5', v-if='Project.WebLink')
            v-btn.ml-1.mr-1(:href='Project.WebLink', block='block')
              v-icon mdi-web 
     
</template>

<script>
/*import dataProject from "/frontend/data/dataProject.json";*/
  export default {
    name: "ProfileCard",
    props:["Project"],
    data() {
    return {
      show: false,}
    },
    computed: {
    getProjectHeight() {
      return this.ProjectHeight || this.$vuetify.theme.options.cards.ProjectHeight;
    }
  } 
}
</script>