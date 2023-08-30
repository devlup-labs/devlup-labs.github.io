<template lang="pug">
  v-card.elevation-24
    v-app-bar(app clipped-right flat floating style="opacity: 1.0")
      v-app-bar-nav-icon.hidden-md-and-up(@click.stop="drawer = !drawer")
      router-link(to='/')
        v-avatar(size="48px")
          v-img(src="../assets/logo.jpeg") 
      router-link(to='/', style="text-decoration: none")
        v-toolbar-title.hidden-sm-and-down.white--text()
          span.title.ml-3.mr-5(text style="color: black", ) Devlup Labs&nbsp;
      v-spacer
      div.hidden-sm-and-down
        v-btn(pa-2.ma-1 v-for="link in links" :key="link.text" :to="{ name: link.text }" v-if="link.text !== 'Team' && link.text !== 'CurrentTeam' && link.text !== 'AlumniTeam'" label exact sty style="box-shadow : none") {{ link.text }}
        v-btn#menu-activator(pa-2.ma-1 :key="team" style="box-shadow : none")  Team
          v-menu(activator='#menu-activator')
            v-list
              v-list-item(pa-2.ma-1 v-for='(item, index) in teams', :key='index', :value='index' :to="{name: item.link}")
                v-list-item-title {{ item.text }} 
                
    v-navigation-drawer(v-model="drawer" app left temporary style="z-index: 5")
      v-list(dense)  
        v-list-item(v-for="link in links" :key="link.text" :to="{ name: link.text }" v-if="link.text !== 'Team' && link.text !== 'CurrentTeam' && link.text !== 'AlumniTeam'" exact sty style="box-shadow : none") 
          v-list-item-action
            v-icon {{ link.icon }}
          v-list-item-content
            v-list-item-title.grey--text {{ link.text }}

        v-list-item
          v-list-item-action
            v-icon mdi-account-group
          v-menu
            template.ml-16(v-slot:activator="{ on }")
              v-list-item-content(v-on="on")
                v-list-item-title.grey--text Team
            v-list
              v-list-item(v-for='(item, index) in teams', :key='index', :value='index' :to="{name: item.link}")
                 v-list-item-title {{ item.text }}



</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: false,
      drawer: null,
      links: [
        { text: "Home", icon: "mdi-home" },
        { text: "About", icon: "mdi-information" },
        { text: "Projects", icon: "mdi-briefcase-edit-outline" },
        { text: "Timeline", icon: "mdi-timeline-text" },
        { text: "Blog", icon: "mdi-forum" },
        { text: "Videos", icon: "mdi-television" },
        { text: "Team", icon: "mdi-human-male-male" }, // Empty routeName for the dropdown menu
        { text: "WoC", icon: "mdi-briefcase-edit-outline" }
      ],
      teams: [
        {
          text: "Current Team",
          link: "current_team",
          icon: "mdi-human-male-male"
        },
        {
          text: "Alumni Team",
          link: "alumni_team",
          icon: "mdi-human-male-male"
        }
      ]
    };
  },
  computed: {
    teamLinks() {
      return [
        { text: "Current Team", icon: "mdi-human-male-male" },
        { text: "Alumni Team", icon: "mdi-human-male-male" }
      ];
    }
  }
};
</script>

<style scoped></style>
