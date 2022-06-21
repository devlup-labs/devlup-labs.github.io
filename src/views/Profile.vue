<!-- Profile[0]->Profile index -->
<template lang="pug">
div(align='center', justify='center')
  div(v-if="loading")
        Preloader
  div(v-else)
    v-container
      v-row(justify='left')
        v-flex.mb-10(v-for='Profile in profiles', :key='Profile[0]', xs12='',sm12='', md6='',lg4='',xl4='')
          ProfileCard(:Profile='Profile')
</template>

<script>
const ProfileCard = () => import("../components/ProfileCard");
const Preloader = () => import("../components/Preloader");
export default {
  name: "Profile",
  components: { ProfileCard, Preloader },
  data: () => ({
    loading: true,
    profiles: []
  }),
  methods: {
    fetchProfiles() {
      const spreadsheetId = "1LlK1GjE2mq3zgd5MVhRoe-kDkybNdtDADOz3eTSI4ns";
      const sheetname = "Profile";
      const theKey = process.env.VUE_APP_API;
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetname}?alt=json&key=${theKey}`;
      this.loading = true;
      fetch(url)
        .then(e =>
          e.json().then(e => {
            this.profiles = [...e.values.slice(1)];
            console.log(this.profiles);
          })
        )
        .finally(() => (this.loading = false));
    }
  },
  mounted() {
    this.fetchProfiles();
  }
};
</script>
