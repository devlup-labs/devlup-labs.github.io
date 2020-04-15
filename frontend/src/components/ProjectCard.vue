<template lang="pug">
  v-card.pa-3(:min-height="getProjectHeight" :width="1.1*getProjectHeight"  border hover color="#272727")
    div(align="center")
      h2(align-text="center" style="color:#ffffff" underline)
        span CDC Portal (3
          v-icon(small) mdi-light mdi-star ) 
          span )
      div.pa-5 
        v-img(src="../assets/cdclogo.jpg" contain height="150")
      //- v-carousel(:show-arrows="false" height="200")
      //-   v-carousel-item(v-for="(item,i) in items" contain :key="i" :src="item.src")
      v-divider
      div.pa-1(style="background-color:#FFFFFF")
        h4.pa-1 A portal for handling student  placements
        hr(color="#272727")
        v-flex.pa-1
          v-chip(label dark small).pa-2.ma-1
            v-icon(left) mdi-language-html5 
            span HTML
          v-chip(label dark small).pa-2.ma-1
            v-icon(left) mdi-language-python 
            span Python
          v-chip(label dark small).pa-2.ma-1
            v-icon(left) mdi-language-javascript
            span Javascript
        hr(color="#272727")
        h5.pa-1 This is a web portal for automating the placement procedure. The above mentioned technology stack was used to build the project.
        hr(color="#272727" size="5px")
        div(style="background-color:#272727" width="50px")  
          v-card-actions.pa-0
            v-flex
              v-btn(icon href="#")
                v-icon mdi-light mdi-web  
              v-btn(icon href="#")
                v-icon mdi-light mdi-github       
</template>

<script>
  export default {
    name: "ProfileCard",
  props: {
    cardHeight: Number
  },
  data() {
    return {
      items: [
        { src : require('../assets/cdclogo.jpg')}
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


