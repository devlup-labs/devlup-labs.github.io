<template lang="pug">
    v-app
        PageHeader(style="z-index:5")
        v-content
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
  background-color: #ffffff;
}
</style>
