<template>
<v-container>
    <v-card class="pa-2 elevation-6" v-for="Project in Projects" :key="Project.name" :width="0.9*getProjectHeight" hover="hover">
        <h2 underline="underline">{{ Project.name }}</h2>
        <v-carousel hide-delimiters="hide-delimiters" :height="0.5*getProjectHeight" show-arrows-on-hover="show-arrows-on-hover">
            <v-carousel-item v-for="image in Project.images" contain="contain" :key="image.src" :src="image.src"></v-carousel-item>
        </v-carousel>
        <v-card flat="flat">
            <h5 class="pa-1">{{ Project.description }}</h5>
            <v-divider></v-divider>
            <v-flex class="pa-1">
                <v-chip class="pa-2 ma-1" v-for="link in Project.links" :key="link.name" label="label" small="small">{{ link.name }} </v-chip>
                <v-btn icon="icon" @click="show = !show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-flex>
            <v-expand-transition>
                <div v-show="show">
                    <h6 class="pa-1">{{ Project.info }}</h6>
                </div>
            </v-expand-transition>
            <v-row class="justify-space-around">
                <v-col cols="6" v-if="Project.GithubLink">
                    <v-btn class="ml-1 mr-1" :href="Project.GithubLink" dark="dark" block="block">
                        <v-icon>mdi-github </v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="6" v-if="!Project.WebLink">
                    <v-btn :href="Project.WebLink" block="block">
                        <v-icon>mdi-web </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-card>
</v-container>     
</template>

<script>
/*import dataProject from "/frontend/data/dataProject.json";*/


  export default {
    name: "ProfileCard",
    props: {
      cardHeight: Number
    },
    data: () => ({
      show: false,
      Projects : []
    }),
    created(){
    fetch("/data/Projects.json").then(resp => resp.json().then(list => this.Projects=list))
  },
  computed: {
    getProjectHeight() {
      return this.ProjectHeight || this.$vuetify.theme.options.cards.ProjectHeight;
    }
  } 
}
</script>