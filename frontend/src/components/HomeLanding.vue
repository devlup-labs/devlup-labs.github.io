<template>
  <v-app id="inspire">
    <v-container style="z-index:1 ; height:100%;" class="mt-12 mt-sm-0 pt-sm-3 pt-12">
      <v-row
        align="center"
        justify="center"
        style="height:100%"
        class="mt-12 mt-sm-0 pt-sm-0 pt-12 px-4"
      >
        <v-col sm="7" cols=12 class="text-left px-md-3  px-10" >
        <div class="pl-md-10 pr-sm-7">
        <h1 class="font-weight-bold mb-1 mb-sm-5" :class="[$vuetify.breakpoint.lgAndUp ? 'display-4' :'display-2']">DevlUp Labs</h1>
        <h1 class="font-weight-regular" :class="[$vuetify.breakpoint.lgAndUp ? 'display-2' : 'headline']"> <span class="blue--text">Open Source</span> development enthusiasts group at IIT Jodhpur</h1>
        </div>
        </v-col>
        
        <v-col sm="5" cols=12>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<style>
#inspire{
  background-image:url("../assets/bg.svg");
  background-repeat: no-repeat;
  background-size: 40%;
  background-position:right top;
}

@media screen and (max-width: 1264px) and (min-width: 800px){
  #inspire{
      background-size: 45%;
  }
}
@media screen and (max-width: 799px) and (min-width: 415px){
  #inspire{
      background-size: 50%;
  }
}
@media (max-width:414px){
#inspire{
      background-size: 65%;
  }
}







</style>
<script>
export default {
  data: () => ({
    show: false
  })
};
</script>
