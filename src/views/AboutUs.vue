<template lang="pug">
  v-container(grid-list-md='')
    v-layout(row='' wrap='')
      v-flex(xs12='')
            v-card.mb-5(style='border: 5px solid #1b65c4')
              v-card-text.display-1.text-center
                | About Us
      v-flex(xs12='',sm12='', md8='',lg8='',xl8='')
        v-card.mx-auto.mt-4(max-width='100%' tile='')
          v-list.pa-3.ma-3(rounded='')
            p.title(style="text-align: left;") {{desc}}
            v-list-item-group(v-model='item' color='primary')
              v-list-item(v-for='(item, i) in items' :key='i')
                v-list-item-icon.text-center
                  v-icon mdi-compass
                v-list-item-content.text-center
                  v-list-item-title.text-center(v-text='item.text')
      v-flex(xs12='',sm12='', md4='',lg4='',xl4='') 
        h2.mt-1.ml-2 What We Do
        v-row.mt-5(justify='space-around')
          v-avatar.elevation-6(color='#fff' size='120')
            v-icon(size='95') mdi-cloud-braces
        v-row.mt-5(justify='space-around')
          h4.ml-3.mr-3 Prominent Technologies
        v-row.mt-5(justify='space-around')
          v-avatar.elevation-6(color='#1b65c4' size='120')
            v-icon( dark= '' size='95') mdi-web
        v-row.mt-5(justify='space-around')
          h4 Open-Source Development
        v-row.mt-5(justify='space-around')
          v-avatar.elevation-6(color='#fff' size='120')
            v-icon(size='95') mdi-coffee-outline
        v-row.mt-5(justify='space-around')
          h4 Spreading Technical Knowledge          
</template>
<script>
export default {
  name: "Project",
  data: () => ({
    desc:
      "psum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'', comes from a line in section 1.10.32",
    item: 1,
    items: [
      { text: "Vuetify" },
      { text: "Django" },
      { text: "Node.js" },
      { text: "React Native" },
      { text: "Arduino" }
    ]
  })
};
</script>
