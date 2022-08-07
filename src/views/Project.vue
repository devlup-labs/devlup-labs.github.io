<!-- Project[0]-> Project index -->

<template lang="pug">
div(align='center', justify='center')
  div(v-if="loading")
        Preloader
  div(v-else)
    v-container
      v-row(justify='left')
        v-flex.mb-6(v-for='Project in projects', :key='Project[0]', xs12='',sm12='', md6='',lg4='',xl4='') 
       
          ProjectCard(:Project='Project')
</template>
<script>
const ProjectCard = () => import("../components/ProjectCard");
const Preloader = () => import("../components/Preloader");
export default {
  name: "Project",
  components: { ProjectCard, Preloader },
  data: () => ({
    loading: true,
    projects: []
  }),
  methods: {
    fetchProjects() {
      const spreadsheetId = "1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY";
      const theKey = process.env.VUE_APP_API;
      const sheetname = "Project";
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetname}?key=${theKey}`;
      this.loading = true;
      fetch(url)
        .then(e =>
          e.json().then(e => {
            console.log(e);
            this.projects = [...e.values.slice(1)];
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
