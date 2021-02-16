<template lang="pug">
div(align='center' ,justify='center')
    div(v-if='loading')
        Preloader
    div(v-else)
        v-container
            v-row.mt-9
                v-flex.mb-6(v-for='podcast in podcasts', :key='podcast.name' ,xs12='',sm12='',md6='',lg6='',xl4='')
                    Podcastcard(:podcast='podcast')
    </template>
<script>
const Podcastcard = () => import("../components/Podcastcard");
const Preloader = () => import("../components/Preloader");
export default {
  name: "Podcast",
  components: { Podcastcard, Preloader },
  data: () => ({
    loading: true,
    podcasts: []
  }),
  methods: {
    fetchPodcast() {
      this.loading = true;
      fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCFaRxxB8-BB5GXH-wlwGqIw"
      )
        .then(e => e.json().then(e => (this.podcasts = e.items)))
        .finally(() => (this.loading = false));
    }
  },
  created() {
    this.fetchPodcast();
  }
};
</script>
