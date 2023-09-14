<template lang="pug">
v-card.elevation-24
    v-footer(color="basic" padless)
      v-row(justify="center" no-gutters)
        v-btn.mt-1.px-6(v-for="link in links" :key="link.href" :href="link.href" color="white" icon)
          v-icon(size='30') {{link.icon}}
      v-col.mt-n2.text-center(cols="12")
       v-btn.text-center.white--text.font-weight-bold.blue.darken-2.round(to='./about' text='' plain='' justify='center' color='white' @click="viewform" ) Contact Us
      v-col.mt-n6.text-center.white--text(cols="12") © Copyright {{ new Date().getFullYear() }} Devlup Labs
</template>
<script>
// import form from "../views/AboutUs.vue";

export default {
  data() {
    return {
      links: [
        { icon: "mdi-gmail", href: "mailto:opensourceiitj@gmail.com" },
        { icon: "mdi-facebook", href: "https://www.facebook.com/devluplabs/" },
        {
          icon: "mdi-instagram",
          href: "https://www.instagram.com/devluplabs/"
        },
        { icon: "mdi-github", href: "https://github.com/devlup-labs" },
        {
          icon: "mdi-linkedin",
          href: "https://www.linkedin.com/company/devlup-labs/"
        }
      ],
      clicked: false
    };
  },
  methods: {
    scrollform: function() {
      if (this.clicked) {
        window.scrollTo(0, document.body.scrollHeight);
        this.clicked = false;
      }
    },
    viewform: function() {
      this.clicked = true;
      this.scrollform();
    }
  }
  // components: {
  //   form: form
  // }
};
</script>
<style scoped>
.white--text:before {
  background: none;
}
.round {
  border-radius: 8px;
}
</style>
