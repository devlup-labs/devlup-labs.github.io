<template lang="pug">
v-container
  v-card.pa-3(v-for="Project in Projects" :key="Project.name" :width="0.95*getProjectHeight" hover color="secondary")
    h2(style="color:white" underline) {{ Project.name }}
    v-carousel.mb-3.mt-3(hide-delimiters :height="0.5*getProjectHeight")
      v-carousel-item(v-for="image in Project.images" contain :key="image.src" :src="image.src")
    v-divider
    v-card.pa-1(color="white")
      h5.pa-1 {{ Project.description }}
      v-divider(color="black")
      v-flex.pa-1
        v-chip.pa-2.ma-1(v-for="link in Project.links" :key="link.name" label small) {{ link.name }}  
        v-btn(icon @click="show = !show")
          v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      v-expand-transition
        div(v-show="show") 
          h6.pa-1 {{ Project.info }}
      v-card(color="secondary")  
        v-card-actions.pa-0
          v-flex
            v-btn(:href="Project.GithubLink" icon v-if="Project.GithubLink")
              v-icon mdi-light mdi-github
            v-btn(:href="Project.WebLink" icon v-if="Project.WebLink")
              v-icon mdi-light mdi-web       
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


