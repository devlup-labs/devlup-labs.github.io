<template lang="pug">
div(align='center', justify='center')
  div(v-if="loading")
        Preloader
  div(v-else)
    v-container
      v-card.text-center(class="blue text-center mx-auto" max-width="800").mt-4.mb-6
        v-card-text(class="white--text")
          h1.font-weight-regular Winter of Code Contributors
      v-row
        h2(style="font-weight:normal") Dear Developers,
        h3(style="font-weight:normal").pl-5 It is really admiring that you could complete the project as per the time deadline. We must appreciate you on your achievement. You have done remarkable work. While having such a busy schedule, it is really commendable that you managed to complete the task within the time. We also feel proud to be linked with you in the process. Congratulations to you all. 
      v-row(justify='left').mt-6
        v-flex.mb-10(v-for='WoC in wocs'  :key='WoC.menteename' xs12 sm6 md4 lg3 xl3)
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
