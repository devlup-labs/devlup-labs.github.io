<template lang="pug">
div(align='center', justify='center')
  div(v-if="loading")
        Preloader
  div(v-else)
    v-container
      v-row(justify='left')
        v-flex.mb-10(v-for='Profile in profiles', :key='Profile.name', xs12='',sm12='', md6='',lg4='',xl4='')
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
      this.loading = true;
      fetch(
        "https://spreadsheets.google.com/feeds/list/1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY/oh0n2ko/public/values?alt=json"
      )
        .then(e =>
          e.json().then(e => {
            this.profiles = [...e.feed.entry];
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
