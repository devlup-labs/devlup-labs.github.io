<template lang="pug">
  #app
    v-app#inspire
      v-timeline(:dense='$vuetify.breakpoint.smAndDown')
        v-timeline-item(color='light-blue' fill-dot='' right='')
          span(slot='opposite')
            p.display-1.light-blue--text
              font(size='5') April 2020
          v-card.elevation-5(max-width='70%')
            v-card-title.light-blue
              h2.display-1.white--text.font-weight-light DevLup Labs
            v-container
              v-row.ml-2.text-left
                | Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            v-card-actions
              v-btn.ml-5.mb-2(small='' color='light-blue' dark='') Learn More
              v-btn.ml-5.mb-2(small='' color='light-blue' dark='') Learn More
        v-timeline-item(color='teal' fill-dot='' left='' small='')
          span(slot='opposite')
            p.display-1.teal--text
              font(size='5') April 2020
          v-card.elevation-5(max-width='70%')
            v-card-title.teal.justify-end
              h2.display-1.mr-4.white--text.font-weight-light DevLup Labs
            v-container
              v-row.ml-2.text-left
                | Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            v-card-actions
              v-btn.ml-5.mb-2(small='' color='teal' dark='') Learn More
              v-btn.ml-5.mb-2(small='' color='teal' dark='') Learn More
        v-timeline-item(color='lime' fill-dot='' right='')
          span(slot='opposite')
            p.display-1.lime--text
              font(size='5') April 2020
          v-card.elevation-5(max-width='70%')
            v-card-title.lime
              h2.display-1.white--text.font-weight-light DevLup Labs
            v-container
              v-row.ml-2.text-left
                | Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            v-card-actions
              v-btn.ml-5.mb-2(small='' color='lime' dark='') Learn More
              v-btn.ml-5.mb-2(small='' color='lime' dark='') Learn More
        v-timeline-item(color='orange' fill-dot='' left='' small='')
          span(slot='opposite')
            p.display-1.orange--text
              font(size='5') April 2020
          v-card.elevation-5(max-width='70%')
            v-card-title.orange.justify-end
              h2.display-1.mr-4.white--text.font-weight-light DevLup Labs
            v-container
              v-row.ml-2.text-left
                | Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            v-card-actions
              v-btn.ml-5.mb-2(small='' color='orange' dark='') Learn More
              v-btn.ml-5.mb-2(small='' color='orange' dark='') Learn More
</template>
<script>
  export default {}
</script>
