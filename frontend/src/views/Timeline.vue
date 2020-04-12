<template>
      <v-row class="justify-center">
        <v-col cols="12" md="8">
          <v-timeline :dense="$vuetify.breakpoint.smAndDown" >
          <Timelinecard :timelineDetails="timelineDetails"/>
          </v-timeline>
        </v-col>
      </v-row>
</template>
<script>
import Timelinecard from "../components/Timelinecard.vue";
export default {
  name: "Timeline",
  components:{Timelinecard},
  data() {
    return {
      drawer: null,
      timelineDetails: [
        {
          color: "light-blue",
          side: "right",
          date: "April 2020",
          title: "DevlUp Labs",
          info: "Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few",
          firstButton: "Learn More",
          secondButton: ""
        },
        {
          color: "teal",
          side: "left",
          date: "May 2020",
          title: "DevlUp Labs",
          info: "Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few",
          firstButton: "Learn More",
          secondButton: "Learn More"
        }
      ]
    };
  }
};
</script>
