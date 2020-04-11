<template>
    <div id="app">
        <v-app id="inspire">
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item v-for="dat in datas" :key="dat.text" color="{name:data.totalcolor}" fill-dot="" {{dat.side}}="">
                <span slot="opposite">
                    <p class="display-1 dat.totalcolor--text"><font size="6">{{dat.dates}}</font></p>
                </span>
                <v-card class="elevation-5" max-width="70%">
                    <v-card-title class="{name:dat.totalcolor}">
                        <h2 class="display-1 white--text font-weight-light">{{dat.title}}</h2>
                    </v-card-title>
                    <v-container>
                        <v-row class="ml-2 text-left">{{dat.info}}</v-row>
                    </v-container>
                    <v-card-actions>
                        <v-btn class="ml-5 mb-2" small="" color="{name:dat.totalcolor}" dark="">{{dat.bt1text}}</v-btn>
                        <v-btn class="ml-5 mb-2" small="" color="{name:dat.totalcolor}" dark="">{{dat.bt2text}}</v-btn>
                    </v-card-actions>
                </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-app>
    </div>
</template>
<script>
export default {
  name: "Timeline",
  data (){
    return {
        drawer: null,
        datas: [
            {totalcolor: 'orange', side: 'right', dates: 'April 2020', title: 'DevLup Labs', info:'Information',bt1text: 'Learn More', bt2text: 'Learn More'}, 
            {totalcolor: 'orange', side: 'left', dates: 'April 2020', title: 'DevLup Labs', info:'Information',bt1text: 'Learn More', bt2text: 'Learn More'}, 
      ]
    };
  }
};
</script>
