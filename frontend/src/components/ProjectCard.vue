<template lang="pug">
  div
    v-card(height="500" width="350" border hover="true")
        v-carousel(:show-arrows="false" height="300")
            v-carousel-item(v-for="(item,i) in items" :key="i" :src="item.src")
        h2(align-text="center") NAME
        v-divider
        v-card-text All the info goes here about interests and positions in Devlup Labs.
        h4 All the info about current status.  
        v-divider
        v-card-actions
          v-chip-group
            v-chip(label) Tag - 1
            v-chip(label) Tag - 2
            v-chip(label) Tag - 3
            v-btn(icon href="#")
              v-icon mdi-github 
            v-btn(icon href="#")
              v-icon mdi-linkedin
            v-btn(icon href="#")
              v-icon mdi-email          
</template>

<script>
  export default {
    data () {
        return {
            items: [
                { src : require('../assets/logo.jpeg')},
                { src : require('../assets/logo.jpeg')},
                { src : require('../assets/logo.jpeg')},
            ],
        }   
      },
    }
</script>


