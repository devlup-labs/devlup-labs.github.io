<!-- WoC[0]-> index -->
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
        h2(style="font-weight:normal") Hey Everyone!,
        h3(style="font-weight:normal").pl-5 After about 2 months of continuous efforts, Winter of Code 21 has come to an end. It was really amazing seeing the applicants work on their projects so passionately. It is with great pleasure, that we announce, the list of successful applicants for WoC 21. We wish these applicants congratulations and good luck for the future. A warm thank you to all the WoC mentors and the entire WoC 21 Team, it wouldn't have been possible without you!
      v-row(justify='left').mt-6
        v-flex.mb-10(v-for='WoC in wocs'  :key='WoC[0]' xs12 sm6 md4 lg3 xl3)
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
      const spreadsheetId = "1LlK1GjE2mq3zgd5MVhRoe-kDkybNdtDADOz3eTSI4ns";
      const theKey = process.env.VUE_APP_API;
      const sheetname = "WoC";
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetname}?alt=json&key=${theKey}`;
      this.loading = true;
      fetch(url)
        .then(e =>
          e.json().then(e => {
            console.log(e);
            this.wocs = [...e.values.slice(1)];
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
