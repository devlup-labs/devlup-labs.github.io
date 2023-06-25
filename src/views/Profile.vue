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
      // spreadsheetID=17O_B9OCnz6Byey-Y1o0K5WCTTlXJterlwNDgpjSN-s4
      const url = `https://script.google.com/macros/s/AKfycbwprDq5bguYad1gsfCLxbWxM1YXZfVlWiXYK1WCbrPj5WO8JbxjqSbnieVIoosOgMbVMA/exec`;
      this.loading = true;
      fetch(url)
        .then(e =>
          e.json().then(e => {
            console.log(e);
            this.profiles = e;
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
