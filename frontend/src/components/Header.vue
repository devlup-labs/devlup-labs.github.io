<template lang="pug">
    div
        v-app-bar(app clipped-right color="primary" )
            v-avatar(size="48px")
                v-img(src="../assets/logo.jpeg")
            v-toolbar-title.white--text
                span.title.ml-3.mr-5 Devlup Labs&nbsp;
            v-spacer
            div.hidden-sm-and-down.my-2
              v-btn(v-for="link in links" :key="link.text" :to="{name:link.text}" rounded depressed color="primary" exact) {{link.text}}
            v-app-bar-nav-icon.hidden-md-and-up(dark @click.stop="drawer = !drawer")
        v-navigation-drawer(v-model="drawer" app right temporary)
          v-list(dense)
            v-list-item( v-for="link in links" :key="link.text" @click="" :to="{name:link.text}" exact)
              v-list-item-action
                v-icon {{link.icon}}
              v-list-item-content
                v-list-item-title(class="grey--text") {{link.text}}
                
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: null,
      links: [
        { text: "Home", icon: "mdi-home" },
        { text: "About", icon: "mdi-information" },
        { text: "Events", icon: "mdi-briefcase-edit-outline" },
        { text: "Timeline", icon: "mdi-timeline-text" },
        { text: "Blog", icon: "mdi-forum" },
        { text: "Contact", icon: "mdi-contacts" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
