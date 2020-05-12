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
  created() {
    fetch("/data/profiles.json").then(resp =>
      resp.json().then(list => (this.profiles = list))
    );
  }
};
</script>
