<template lang="pug">
v-layout(row='' wrap='')
  v-card.mx-auto.elevation-4(:max-width='$vuetify.breakpoint.mdAndUp ? 500 : 344',height='100%')
    v-responsive(:aspect-ratio='16/9')
      iframe#ytplayer(type='text/html' allowfullscreen='true' width='500' height='100%' v-bind:src="`https://www.youtube.com/embed/${tutorial.guid.split(':')[2]}`" frameborder='0')
</template>
<script>
export default {
  name: "VideoCard",
  props: {
    tutorial: { type: Object, required: true }
  }
};
</script>
