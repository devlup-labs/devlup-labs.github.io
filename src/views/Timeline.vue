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
      const spreadsheetId = "1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY";
      const theKey = process.env.VUE_APP_API;
      const sheetname = "Timeline";
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetname}?alt=json&key=${theKey}`;
      this.loading = true;
      fetch(url)
        .then(e =>
          e.json().then(e => {
            this.timelineDetails = [...e.values.slice(1)];
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
