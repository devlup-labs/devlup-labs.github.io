<template lang="pug">
body(style='overflow-x: hidden;position: relative;')
    v-app
        PageHeader(style="z-index:5")
        v-content
                router-view
        PageFooter
</template>

<script>
const PageHeader = () => import("@/components/Header.vue");
const PageFooter = () => import("@/components/Footer.vue");

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
