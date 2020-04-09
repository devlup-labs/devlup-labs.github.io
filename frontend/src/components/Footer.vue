<template lang="pug">
  v-footer(color="#000080" padless)
    v-row(justify="center" no-gutters)
      v-btn(v-for="link in links" :key="link" color="white" text rounded class="py-2") {{ link }}
    v-col(style="background-color:#000099" class="py-4 text-center white--text" cols="12") {{ new Date().getFullYear() }} — 
        strong Devlup Labs
</template>

<script>
export default {
  data() {
    return {
      links: ["Facebook", "Instagram", "Gmail", "Github"]
    };
  }
};
</script>
