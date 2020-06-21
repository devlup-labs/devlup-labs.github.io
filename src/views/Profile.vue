<template lang="pug">
div(align='center', justify='center')
  v-container
    v-row(justify='left')
      v-flex.mb-10(v-for='Profile in profiles', :key='Profile.name',xs12='',sm12='', md6='',lg4='',xl='')
        ProfileCard(:Profile='Profile')
</template>

<script>
import ProfileCard from "../components/ProfileCard";
export default {
  name: "Profile",
  components: { ProfileCard },
  data: () => ({
    profiles: []
  }),
  methods: {
    fetchProfiles() {
      fetch(
        "https://spreadsheets.google.com/feeds/list/1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY/oh0n2ko/public/values?alt=json"
      ).then(e =>
        e
          .json()
          .then(e => {
            this.profiles = [...e.feed.entry];
          })
          .then(e => console.log(e, this.profiles))
      );
    }
  },
  mounted() {
    this.fetchProfiles();
  }
};
</script>
