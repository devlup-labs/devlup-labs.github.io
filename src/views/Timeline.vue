<template lang="pug">
  v-row.justify-center
    v-col(cols='12', md='8')
      v-timeline(v-if="timelineDetails.length != 0" :dense='$vuetify.breakpoint.smAndDown')
        TimelineCard(:timelineDetails='timelineDetails')
</template>

<script>
import TimelineCard from "../components/TimelineCard";

export default {
  name: "Timeline",
  components: { TimelineCard },
  data: () => ({
    drawer: null,
    timelineDetails: []
  }),
  methods: {
    fetchTimelines() {
      fetch(
        "https://spreadsheets.google.com/feeds/list/1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY/oemu3cb/public/values?alt=json"
      ).then(e =>
        e
          .json()
          .then(e => {
            this.timelineDetails = [...e.feed.entry];
          })
          .then(e => console.log(e, this.timelineDetails))
      );
    }
  },
  mounted() {
    this.fetchTimelines();
  }
};
</script>
