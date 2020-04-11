<template>
  <div id="app">
    <v-app id="inspire">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <Timelinecard v-bind:datas="datas"/>
      </v-timeline>
    </v-app>
  </div>
</template>
<script>
import Timelinecard from "../components/Timelinecard.vue"
export default {
  name: "Timeline",
  components:{Timelinecard},
  data() {
    return {
      drawer: null,
      datas: [
        {
          totalcolor: "orange",
          side: "right",
          dates: "April 2020",
          title: "DevLup Labs",
          info: "Information",
          bt1text: "Learn More",
          bt2text: "Learn More"
        },
        {
          totalcolor: "orange",
          side: "left",
          dates: "May 2020",
          title: "DevLup Labs",
          info: "Information",
          bt1text: "Learn More",
          bt2text: "Learn More"
        }
      ]
    };
  }
};
</script>
