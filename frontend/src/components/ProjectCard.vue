<template lang="pug">
v-container
  v-card.pa-2.elevation-6(v-for="Project in Projects" :key="Project.name" :width="0.9*getProjectHeight" hover)
    h2(underline) {{ Project.name }}
    v-carousel(hide-delimiters :height="0.5*getProjectHeight" show-arrows-on-hover)
      v-carousel-item(v-for="image in Project.images" contain :key="image.src" :src="image.src")
    v-card(flat)
      h5.pa-1 {{ Project.description }}
      v-divider
      v-flex.pa-1
        v-chip.pa-2.ma-1(v-for="link in Project.links" :key="link.name" label small) {{ link.name }}  
        v-btn(icon @click="show = !show")
          v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      v-expand-transition
        div(v-show="show") 
          h6.pa-1 {{ Project.info }}
      v-row.justify-space-around 
        v-col(cols="6" v-if="Project.GithubLink")
          v-btn.ml-1.mr-1(:href="Project.GithubLink" dark block ) 
            v-icon mdi-github 
        v-col(cols="6"  v-if="!Project.WebLink")  
          v-btn(:href="Project.WebLink" block) 
            v-icon mdi-web       
</template>

<script>
  export default {
    name: "ProfileCard",
  props: {
    cardHeight: Number
  },
  data() {
    return {
      show: false,
      Projects:[
        { name: "CDC Portal", description: "A portal for handling student  placements", 
        info: "This is a web portal for automating the placement procedure. The above mentioned technology stack was used.",
        GithubLink: "#", WebLink: "#", links: [{ name: "python"},{ name: "html"},{ name: "javascript"}], 
        images: [{ src : require('../assets/cdclogo.jpg')},{ src : require('../assets/Profile.png')}],}
      ],
    }
  },
  computed: {
    getProjectHeight() {
      return this.ProjectHeight || this.$vuetify.theme.options.cards.ProjectHeight;
    }
  } 
}
</script>