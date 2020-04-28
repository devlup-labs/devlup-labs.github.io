<template lang="pug">
div(align='center', justify='center')
  v-container
    v-row(justify='left')
      v-flex.mb-6(v-for='Project in Projects', :key='Project.name', xs12='',sm12='', md6='',lg4='',xl4='')
        ProjectCard(:Project='Project')
</template>

<script>
import ProjectCard from "../components/ProjectCard";
export default {
  name: "Project",
  components: { ProjectCard },
  data: () => ({
    Projects: []
  }),
  created() {
    fetch("/data/Projects.json").then(resp =>
      resp.json().then(list => (this.Projects = list))
    );
  }
};
</script>
