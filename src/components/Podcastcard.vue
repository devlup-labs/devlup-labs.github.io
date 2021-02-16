<template lang="pug">
v-layout(row='' wrap='')
    v-card.mx-auto(:max-width='$vuetify.breakpoint.mdAndUp ? 450 : 344', height='100%')
        v-responsive(:aspect-ratio='16/9')
            iframe#ytplayer(type='text/html' allowfullscreen='true' width='450' height='100%' v-bind:src="`https://www.youtube.com/embed/${podcast.guid.split(':')[2]}`" frameborder='0')
</template>
<script>
export default {
  name: "Podcastcard", 
  props: {
    podcast: {type: Object , required: true}
  }

};
</script>
