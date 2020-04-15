<template lang="pug">
v-container
  v-card(v-for="Profile in Profiles" :key="Profile.name" :width="getProfileWidth")
    v-stepper(v-model="e1")
      v-stepper-items
        v-stepper-content.pa-1(step="1")
          v-card.pa-1(:width="getProfileWidth")
            v-row 
              v-col(cols="4") 
                v-avatar(:size="(4/15)*getProfileWidth")
                  v-img(src="../assets/Profile.png" contain)
              v-col.pa-2(cols="6" align="left")  
                div
                  h4 
                    u {{ Profile.Name }}
                  h6 Current position : {{ Profile.Position1 }}
                  h6 Position in Devlup : {{Profile.Position2 }}
                v-flex.mt-1 
                  v-btn(v-for="link in links" :key="link.icon" icon :href="link.href" small)
                    v-icon(:color="link.color") {{ link.icon }}
              v-col.pa-1(cols="2")    
                v-icon(@click="e1 = 2") mdi-arrow-right-box
        v-stepper-content.pa-1(step="2")
          v-row
            v-col(cols="1")
              v-icon(@click="e1 = 1") mdi-arrow-left-box
            v-col(cols="11")  {{ Profile.info }}
</template>

<script>
  export default {
    name: "ProfileCard",
    props: {
    ProfileWidth: Number,
  },
    data () {
      return {
        e1: 1,
        Profiles:[
        {Name: "Profile Name", Position1: "Student", Position2: "", info: "All the info here."},
        ],
        links:[
          { href: "#", color: "red", icon: "mdi-email" },
          { href: "#", color: "black", icon: "mdi-github" },
          { href: "#", color: "orange", icon: "mdi-gitlab" },
          { href: "#", color: "blue", icon: "mdi-linkedin" }
        ]
      }
    },
    computed: {
    getProfileWidth() {
      return this.ProfileWidth || this.$vuetify.theme.options.cards.ProfileWidth;
    }
  } 
}
</script>