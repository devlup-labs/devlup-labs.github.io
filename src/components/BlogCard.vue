<style>
.elip {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.cardclicked:before {
  background: none;
}
</style>
<template lang="pug">
v-layout(row='' wrap='')
  v-card.mx-auto.elevation-4.pa-md-2.cardclicked(v-ripple="false" max-width='344',height='370',:href="blog.link",target='_blank')
    v-img(:src="blog.thumbnail" height='150')
    v-container.py-2
    v-list-item
      v-list-item-content
        v-list-item.title.px-md-2.elip {{blog.title}}
        v-list-item-subtitle.mb-n4.mt-1 {{blog.author}}
    v-card-actions
        v-col
          v-row.justify-center
            v-sheet(max-width='100%' @click.prevent="add") 
                v-slide-group(multiple='' show-arrows='')
                  v-slide-item.caption(v-for='tags in blog.categories' :key='tags.name' small='small' v-slot='{ active, toggle }')
                    v-btn.text-lowercase(:input-value='activenp' height="80%" active-class='black white--text' depressed='' rounded="" @click='toggle')
                      |{{ tags }}
                    


</template>
<script>
export default {
  name: "BlogCard",
  props: ["blog"]
};
</script>
