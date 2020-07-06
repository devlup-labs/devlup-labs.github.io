<template lang="pug">
div(align='center', justify='center')
  div(v-if="loading")
        Preloader
  div(v-else)
    v-container
      v-row.mt-9
        v-flex.mb-6(v-for='blog in blogs', :key='blog.name', xs12='',sm12='', md6='',lg4='',xl4='')
          BlogCard(:blog='blog')
      v-btn(color='#1b65c4' dark='' large href="https://medium.com/devlup-labs") More Posts
</template>

<script>
import BlogCard from "../components/BlogCard";
import Preloader from "../components/Preloader";
export default {
  name: "Blog",
  components: { BlogCard, Preloader },
  data: () => ({
    loading: true,
    blogs: []
  }),
  methods: {
    fetchBlogs() {
      this.loading = true;
      fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fdevlup-labs"
      )
        .then(e => e.json().then(e => (this.blogs = e.items)))
        .finally(() => (this.loading = false));
    }
  },
  created() {
    this.fetchBlogs();
  }
};
</script>
