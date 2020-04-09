<template lang="pug">
    v-app-bar(app clipped-left color="#000080")
        v-avatar(size="60px")
            img(src="../assets/logo.jpeg")
        v-toolbar-title.white--text
            span.title.ml-3.mr-5 Devlup Labs&nbsp;
        v-spacer
        v-btn(color="white" text rounded class="my-2") Home
        v-btn(color="white" text rounded class="my-2") About
        v-btn(color="white" text rounded class="my-2") Timeline
        v-btn(color="white" text rounded class="my-2") Blog
        v-btn(color="white" text rounded class="my-2") Contact
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
