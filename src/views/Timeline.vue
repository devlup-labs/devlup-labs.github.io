<template lang="pug">
  v-row.justify-center
    v-col(cols='12', md='8')
      v-timeline(:dense='$vuetify.breakpoint.smAndDown')
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
  created() {
    fetch("/data/timelines.json").then(resp =>
      resp.json().then(list => (this.timelineDetails = list))
    );
  }
};
</script>
