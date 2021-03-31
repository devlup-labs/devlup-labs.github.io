<template lang="pug">
div(align='center', justify='center')
  div(v-if="loading")
        Preloader
  div(v-else)
    v-container
      v-row(justify='left')
        v-flex.mb-10(v-for='WoC in wocs', :key='WoC.menteename', xs12='',sm12='', md4='',lg3='',xl3='')
          WoCCard(:WoC='WoC')
</template>

<script>
const WoCCard = () => import("../components/WoCCard");
const Preloader = () => import("../components/Preloader");
export default {
  name: "WoC",
  components: { WoCCard, Preloader },
  data: () => ({
    loading: true,
    wocs: []
  }),
  methods: {
    fetchWoCs() {
      this.loading = true;
      fetch(
        "https://spreadsheets.google.com/feeds/list/1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY/ocnnrqv/public/values?alt=json"
      )
        .then(e =>
          e.json().then(e => {
            this.wocs = [...e.feed.entry];
          })
        )
        .finally(() => (this.loading = false));
    }
  },
  mounted() {
    this.fetchWoCs();
  }
};
</script>
