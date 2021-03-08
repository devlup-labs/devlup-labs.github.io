<template lang="pug">
v-layout(row='' wrap='')
    v-card.mx-auto(:max-width='$vuetify.breakpoint.mdAndUp ? 500 : 344', height='232px')
        v-responsive(:aspect-ratio='22/9')
            iframe#ytplayer(type='text/html' allowtransparency='true' width='350' height='232px' v-bind:src="`https://open.spotify.com/embed-podcast/episode/${podcast.guid.split('/')[4]}`" frameborder='0')
</template>
<script>
export default {
  name: "Podcastcard", 
  props: {
    podcast: {type: Object , required: true}
  }

};
</script>
