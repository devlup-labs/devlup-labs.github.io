<template lang="pug">
    v-app(style="background-color: white")
        PageHeader
        v-content
            v-container(fluid)
                router-view
        PageFooter
</template>

<script>
import PageHeader from "@/components/Header.vue";
import PageFooter from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    PageFooter
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
