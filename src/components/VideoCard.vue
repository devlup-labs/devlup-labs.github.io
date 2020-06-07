<template lang="pug">
v-layout(row='' wrap='')
  v-card.mx-auto.elevation-4(max-width='344',height='100%')
    iframe#ytplayer(type='text/html' allowfullscreen='true' width='344' height='300' v-bind:src="`https://www.youtube.com/embed/${tutorial.guid.split(':')[2]}?autoplay=1&origin=http://example.com`" frameborder='0')
    v-list-item
      v-list-item-content
        v-list-item.title {{tutorial.title}}
        v-list-item-subtitle {{tutorial.pubDate.split(" ")[0]}}
    

</template>
<script>
export default {
  name: "VideoCard",
  props: {
    tutorial: { type: Object, required: true }
  }
};
</script>
