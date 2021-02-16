<template lang="pug">
div(align='center' ,justify='center')
    div(v-if='loading')
        Preloader
    div(v-else)
        v-container
            v-row.mt-9
                v-flex.mb-6(v-for='podcast in podcasts', :key='podcast.name' ,xs12='',sm12='',md6='',lg6='',xl4='')
                    Podcastcard(:podcast='podcast')
            v-btn(color='#1b65c4' dark='' large href="https://open.spotify.com/show/4SR5Z0HoAs8G2TFmabPsBd?si=KGAFIe7CQe-bnvpaHx-1oQ") Our spotify channel
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
        "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffetchrss.com%2Frss%2F602bc7b72a694610833ee232602bc791fa10ad4d200418d2.atom"
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
