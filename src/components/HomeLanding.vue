<template lang="pug">
div#inspire(style="margin-top:-50pt; height:100%;")
  v-content.pa-0(style="height:100%;")
    v-container(style='z-index:1 ; height:100%;')
      v-row.px-4(align='center' justify='center' style='height:100%')
        v-col.text-left.px-md-3.px-10(sm='7' cols='12' :style="[$vuetify.breakpoint.lgAndUp ? 'margin-top:180pt' : 'margin-top:40 px']")
          .pl-md-10.pr-sm-7
            h1.font-weight-bold.mb-1.mb-sm-5(:class="[$vuetify.breakpoint.lgAndUp ? 'display-3' :'display-2']") DevlUp Labs
            h1.font-weight-regular(:class="[$vuetify.breakpoint.lgAndUp ? 'display-1' : 'display-1']")
              span.blue--text Open Source
              |  Development Enthusiasts Group @ IIT Jodhpur
        v-col(sm='5' cols='12')

</template>

<style>
#inspire {
  background-image: url("../assets/bg.svg");
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: right top;
}

@media screen and (max-width: 1264px) and (min-width: 800px) {
  #inspire {
    background-size: 45%;
  }
}
@media screen and (max-width: 799px) and (min-width: 415px) {
  #inspire {
    background-size: 50%;
  }
}
@media (max-width: 414px) {
  #inspire {
    background-size: 65%;
  }
}
</style>

<script>
export default {};
</script>
