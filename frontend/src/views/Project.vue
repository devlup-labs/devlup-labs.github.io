<template lang="pug">
v-container  
  v-row
    v-col
      ProjectCard 
    v-col
      ProjectCard 
    v-col
      ProjectCard 
</template>

<script>
import ProjectCard from "../components/ProjectCard";
export default {
  name: "Project",
  components: {
    ProjectCard
  }
};
</script>