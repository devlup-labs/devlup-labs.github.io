<template lang="pug">
  v-row.justify-center
    v-col(cols='12', md='8')
      v-timeline(:dense='$vuetify.breakpoint.smAndDown')
        TimelineCard(:timelineDetails='timelineDetails')
</template>

<script>
import TimelineCard from "../components/TimelineCard.vue";
/*import dataTimeline from "/portfolio/frontend/data/dataTimeline.json";*/

export default {
  name: "Timeline",
  components: { TimelineCard },
  data() {
    var dataTimeline;
    fetch("/data/dataTimeline.json").then(resp=>{dataTimeline=resp})
    return {
      drawer: null,
      timelineDetails : dataTimeline
    };
  }
};
</script>

