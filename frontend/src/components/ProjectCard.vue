<template lang="pug">
  v-card.pa-3(:min-height="getProjectHeight" :width="0.95*getProjectHeight"  border hover color="#272727")
    div(align="center")
      h2(align-text="center" style="color:#ffffff" underline)
        span CDC Portal 
      v-carousel.mb-3.mt-3(hide-delimiters height="150")
        v-carousel-item(v-for="(item,i) in items" contain :key="i" :src="item.src")
      v-divider
      div.pa-1(style="background-color:#FFFFFF")
        h5.pa-1 A portal for handling student  placements
        hr
        v-flex.pa-1
              v-chip.pa-2.ma-1(label small) HTML5
              v-chip.pa-2.ma-1(label small) Python
              v-chip.pa-2.ma-1(label small) Javascript  
              v-btn(icon @click="show = !show")
                v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
        
        v-expand-transition
          div(v-show="show") 
              
            h6.pa-1 This is a web portal for automating the placement procedure. The above mentioned technology stack was used.
        hr(color="#272727" size="5px")
        div(style="background-color:#272727; width=50px")  
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

      show: false,
      items: [
        { src : require('../assets/cdclogo.jpg')},
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


