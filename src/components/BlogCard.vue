<template lang="pug">
v-layout(row='' wrap='')
  v-card.mx-auto.elevation-4(max-width='344',height='100%',:href="blog.link",target='_blank')
    v-img(:src="blog.thumbnail" height='150')
    v-list-item
      v-list-item-content
        v-list-item.title {{blog.title}}
        v-list-item-subtitle {{blog.author}}
    v-card-actions
        v-col
            v-row.mt-n4.align-content-center.justify-center
                v-chip.pa-2.ma-1(v-for='tags in blog.categories', :key='tags.name', label='label', rounded,small='small') {{ tags }}

</template>
<script>
export default {
  name: "BlogCard",
  props: ["blog"]
};
</script>
