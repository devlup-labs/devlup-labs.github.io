<template lang="pug">
    div
        v-app-bar(app clipped-right color="primary" )
            v-avatar(size="48px")
                v-img(src="../assets/logo.jpeg")
            v-toolbar-title.white--text
                span.title.ml-3.mr-5 Devlup Labs&nbsp;
            v-spacer
            v-btn.my-2.hidden-sm-and-down(v-for="(link,j) in links" :key="j" color="white" text rounded ) {{link.text}}
            v-app-bar-nav-icon.hidden-md-and-up(dark @click.stop="drawer = !drawer")
        v-navigation-drawer(v-model="drawer" app right disable-route-watcher temporary)
          v-list(rounded)
            v-list-item(v-for="link in links" :key="link.text" link)
              v-list-item-action
                v-icon {{link.icon}}
              v-list-item-content {{link.text}}
                
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

<style scoped></style>
