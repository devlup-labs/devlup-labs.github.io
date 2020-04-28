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
  }
};
</script>
