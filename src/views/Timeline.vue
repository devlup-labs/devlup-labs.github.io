<template lang="pug">
  v-row.justify-center
    v-col(cols='12', md='8')
      v-timeline(:dense='$vuetify.breakpoint.smAndDown')
        TimelineCardcomp(:timelineDetails='timelineDetails')
</template>

<script>
import TimelineCardcomp from "../components/TimelineCardcomp";
/*import dataTimeline from "/portfolio/frontend/data/dataTimeline.json";*/

export default {
  name: "Timeline",
  components: { TimelineCardcomp },
  data: () => ({
    drawer: null,
    timelineDetails: []
  }),
  created() {
    fetch("/data/timelines.json").then(resp =>
      resp.json().then(list => (this.timelineDetails = list))
    );
  }
};
</script>
