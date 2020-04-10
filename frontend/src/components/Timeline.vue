<template>
<div id="app">
  <v-app id="inspire">
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        color="light-blue"
        fill-dot
        center
      >
        <span slot="opposite"><h5 class="display-1 light-blue--text"><small>10-04-2020</small></h5></span>
        <v-card class="elevation-5" max-width=70%>
          <v-card-title class="light-blue">
            <h2 class="display-1 white--text font-weight-light">DevLup Labs</h2>
          </v-card-title>
          <v-container>
            <v-row class="ml-2 text-left">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.

              
            </v-row>
          </v-container>
          <v-card-actions>
        <v-btn small class="ml-5  mb-2" color="light-blue" dark>Learn More</v-btn>
        <v-btn small class="ml-5  mb-2" color="light-blue" dark>Learn More</v-btn>
        </v-card-actions>
        </v-card>
      </v-timeline-item>
  
      <v-timeline-item
        color="teal"
        fill-dot
        left
        small
      >
        <span slot="opposite"><h5 class="display-1 teal--text"><small>10-04-2020</small></h5></span>
        <v-card class="elevation-5" max-width=70% >
          <v-card-title class="teal justify-end">
            <h2 class="display-1 mr-4 white--text font-weight-light">DevLup Labs</h2>
          </v-card-title>
          <v-container>
            <v-row class="ml-2 text-left">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
  
            </v-row>
          </v-container>
          <v-card-actions>
        <v-btn small class="ml-5  mb-2" color="teal" dark>Learn More</v-btn>
        <v-btn small class="ml-5  mb-2" color="teal" dark>Learn More</v-btn>
        </v-card-actions>
        </v-card>
      </v-timeline-item>
  
      <v-timeline-item
        color="lime"
        fill-dot
        right
      > <span slot="opposite"><h5 class="display-1 lime--text"><small>10-04-2020</small></h5></span>
        <v-card class="elevation-5" max-width=70%>
            <v-card-title class="lime">   
            <h2 class="display-1 white--text font-weight-light">DevLup Labs</h2>
          </v-card-title>
         <v-container>
            <v-row class="ml-2 text-left">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.

              
            </v-row>
          </v-container>
          <v-card-actions>
        <v-btn small class="ml-5  mb-2" color="lime" dark>Learn More</v-btn>
        <v-btn small class="ml-5  mb-2" color="lime" dark>Learn More</v-btn>
        </v-card-actions>
        </v-card>
      </v-timeline-item>
  
      <v-timeline-item
        color="orange"
        fill-dot
        left
        small
      >
        <span slot="opposite"><h5 class="display-1 orange--text"><small>10-04-2020</small></h5></span>
        <v-card class="elevation-5" max-width=70% >
          <v-card-title class="orange justify-end">
            <h2 class="display-1 mr-4 white--text font-weight-light">DevLup Labs</h2>
          </v-card-title>
          <v-container>
            <v-row class="ml-2 text-left">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            </v-row>
          </v-container>
          <v-card-actions>
        <v-btn small class="ml-5  mb-2" color="orange" dark>Learn More</v-btn>
        <v-btn small class="ml-5  mb-2" color="orange" dark>Learn More</v-btn>
        </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-app>
</div>
</template>
<script>
  export default {}
</script>
