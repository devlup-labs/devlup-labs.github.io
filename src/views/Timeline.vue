<template lang="pug">
  v-row.justify-center
    v-col(cols='12', md='8')
      div(v-if="loading")
        Preloader
      div(v-else)
        v-timeline(v-if="timelineDetails.length != 0" :dense='$vuetify.breakpoint.smAndDown')
          TimelineCard(:timelineDetails='timelineDetails')
</template>

<script>
const TimelineCard = () => import("../components/TimelineCard");
const Preloader = () => import("../components/Preloader");
export default {
  name: "Timeline",
  components: { TimelineCard, Preloader },
  data: () => ({
    loading: true,
    drawer: null,
    timelineDetails: []
  }),
  methods: {
    fetchTimelines() {
      this.loading = true;
      fetch(
        "https://spreadsheets.google.com/feeds/list/1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY/oemu3cb/public/values?alt=json"
      )
        .then(e =>
          e.json().then(e => {
            this.timelineDetails = [...e.feed.entry];
          })
        )
        .finally(() => (this.loading = false));
    }
  },
  mounted() {
    this.fetchTimelines();
  }
};
</script>
