<template lang="pug">
div(align='center', justify='center')
  div(v-if="loading")
        Preloader
  div(v-else)
    v-container
      v-row.mt-9
        v-flex.mb-6(v-for='tutorial in tutorials', :key='tutorial.name', xs12='',sm12='', md6='',lg6='',xl4='')
          VideoCard(:tutorial='tutorial')
      v-btn(color='#1b65c4' dark='' large href="https://www.youtube.com/channel/UCFaRxxB8-BB5GXH-wlwGqIw") Our Channel
</template>
<script>
import VideoCard from "../components/VideoCard";
import Preloader from "../components/Preloader";
export default {
  name: "Videos",
  components: { VideoCard, Preloader },
  data: () => ({
    loading: true,
    tutorials: []
  }),
  methods: {
    fetchTutorials() {
      this.loading = true;
      fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCFaRxxB8-BB5GXH-wlwGqIw"
      )
        .then(e => e.json().then(e => (this.tutorials = e.items)))
        .finally(() => (this.loading = false));
    }
  },
  created() {
    this.fetchTutorials();
  }
};
</script>
