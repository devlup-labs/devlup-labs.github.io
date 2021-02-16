<template lang="pug">
div(align='center', justify='center')
  div(v-if="loading")
        Preloader
  div(v-else)
    v-container
      v-row.mt-9
        v-flex.mb-6(v-for='tutorial in tutorials', :key='tutorial.name', xs12='',sm12='', md6='',lg6='',xl4='')
          PodcastCard(:tutorial='tutorial')
      v-btn(color='#1b65c4' dark='' large href="spotify:show:4SR5Z0HoAs8G2TFmabPsBd") Our Channel
</template>
<script>
const PodcastCard = () => import("../components/PodcastCard");
const Preloader = () => import("../components/Preloader");
export default {
  name: "Podcasts",
  components: { PodcastCard, Preloader },
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