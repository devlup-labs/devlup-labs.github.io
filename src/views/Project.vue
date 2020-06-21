<template lang="pug">
div(align='center', justify='center')
  v-container
    v-row(justify='left')
      v-flex.mb-6(v-for='Project in projects', :key='Project.name', xs12='',sm12='', md6='',lg4='',xl4='')
        ProjectCard(:Project='Project')
</template>

<script>
import ProjectCard from "../components/ProjectCard";
export default {
  name: "Project",
  components: { ProjectCard },
  data: () => ({
    projects: []
  }),
  created() {
    fetch("/data/projects.json").then(resp =>
      resp.json().then(list => (this.projects = list))
    );
  },
  methods: {
    fetchProjects() {
      fetch(
        "https://spreadsheets.google.com/feeds/list/1gEG08lGpzhtVYzmjyOuYF5qlTFAWhvR2FeAuQlIlIuY/o4eja9x/public/values?alt=json"
      ).then(e =>
        e
          .json()
          .then(e => {
            this.profiles = [...e.feed.entry];
          })
          .then(e => console.log(e, this.projects))
      );
    }
  },
  mounted() {
    this.fetchProjects();
  }
};
</script>
