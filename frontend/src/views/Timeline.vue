<template lang="pug">
  v-row.justify-center
    v-col(cols='12', md='8')
      v-timeline(:dense='$vuetify.breakpoint.smAndDown')
        TimelineCard(:timelineDetails='timelineDetails')
</template>

<script>
import TimelineCard from "../components/TimelineCard.vue";
export default {
  name: "Timeline",
  components: { TimelineCard },
  data() {
    return {
      drawer: null,
      timelineDetails: [
        {
          color: "light-blue",
          date: "April 2020",
          title: "Fortune day out married parties.",
          info:
            "Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few",
          firstButton: "Learn More",
          firstButtonLink: "#",
          secondButton: "Learn More",
          secondButtonLink: "#"
        },
        {
          color: "teal",
          date: "May 2020",
          title: "Fortune day out married parties.",
          info:
            "Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few",
          firstButton: "Learn More",
          firstButtonLink: "#",
          secondButton: "Learn More",
          secondButtonLink: "#"
        }
      ]
    };
  }
};
</script>
