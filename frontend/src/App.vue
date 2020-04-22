<template lang="pug">
    v-app
        PageHeader
        v-content
<<<<<<< HEAD
=======
            v-container(fluid)
>>>>>>> upstream/master
                router-view
        PageFooter
</template>

<<<<<<< HEAD

=======
>>>>>>> upstream/master
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
  background-color: #747474;
}
</style>