<template lang="pug">
div(align='center', justify='center')
  v-container
    v-row(justify='left')
      v-flex.mb-10(v-for='Profile in Profiles', :key='Profile.name',xs12='',sm12='', md6='',lg4='',xl4='')
        ProfileCard(:Profile='Profile')
</template>

<script>
import ProfileCard from "../components/ProfileCard";
export default {
  name: "Profile",
  components: { ProfileCard },
  data: () => ({
    Profiles: []
  }),
  created() {
    fetch("/data/Profiles.json").then(resp =>
      resp.json().then(list => (this.Profiles = list))
    );
  }
};
</script>
