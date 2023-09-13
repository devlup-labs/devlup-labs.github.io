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

const sortingObject = {
  "Final Year": 1,
  "Pre-Final Year": 2
};
export default {
  name: "Profile",
  components: { ProfileCard, Preloader },
  data: () => ({
    loading: true,
    profiles: []
  }),

  methods: {
    sortedProfiles() {
      return this.profiles.slice().sort((a, b) => {
        const rankA = sortingObject[a.currentDesignation];
        const rankB = sortingObject[b.currentDesignation];
        return rankA - rankB;
      });
    },

    fetchProfiles() {
      const url = `https://script.google.com/macros/s/AKfycbxOcYZanZnaQb_FDGvXC4FgDcIiZQXrVaCsSfufX2qYnvOIPDmlXMY7orw2xIlm-BxX/exec`;
      this.loading = true;
      fetch(url)
        .then(e =>
          e.json().then(e => {
            this.profiles = e;
            this.profiles = this.sortedProfiles();
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
