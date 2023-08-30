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
      // spreadsheetID=17O_B9OCnz6Byey-Y1o0K5WCTTlXJterlwNDgpjSN-s4
      const url = `https://script.google.com/macros/s/AKfycbzIRm5fjP3jPRsH-MLER9OeBl_B-ID2xp98rM7fNUPF0A419kUgOdZ5n0N8CNjleUFH1A/exec`;
      this.loading = true;
      fetch(url)
        .then(e =>
          e.json().then(e => {
            this.timelineDetails = e;
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
