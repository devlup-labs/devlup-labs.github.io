<!-- Project[0]-> Project index -->

<template lang="pug">
div(align='center')
  div(v-if="loading")
        Preloader
  div(v-else)
    v-container
      v-row
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
      const url = `https://script.google.com/macros/s/AKfycbxsb_2WN21NJ4p_yEVS8DoCIcs-3lL9VlB5zgbGXeEhfERHkjkIcFOTvkhw1m69irgH7g/exec`;
      this.loading = true;
      fetch(url)
        .then(e =>
          e.json().then(e => {
            // console.log(e);
            this.projects = e;
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
