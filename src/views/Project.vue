<template lang="pug">
div(align='center', justify='center')
  div(v-if="loading")
        Preloader
  div(v-else)
    v-container
      v-row(justify='left')
        v-flex.mb-6(v-for='Project in projects', :key='Project.name', xs12='',sm12='', md6='',lg4='',xl4='')
          ProjectCard(:Project='Project')
</template>
<script>
import ProjectCard from "../components/ProjectCard";
import Preloader from "../components/Preloader";
export default {
  name: "Project",
  components: { ProjectCard, Preloader },
  data: () => ({
    loading: true,
    projects: []
  }),
  methods: {
    fetchProjects() {
      this.loading = true;
      fetch(
        "https://spreadsheets.google.com/feeds/list/1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY/o4eja9x/public/values?alt=json"
      )
        .then(e =>
          e.json().then(e => {
            this.projects = [...e.feed.entry];
          })
        )
        .finally(() => (this.loading = false));
    }
  },
  mounted() {
    this.fetchProjects();
  }
};
</script>
