<!-- WoC[0]-> index -->
<!-- WoC[1]-> mentor name -->
<!-- WoC[2]-> mentor email -->
<!-- WoC[3]-> mentee name -->
<!-- WoC[4]-> mentee email -->
<!-- WoC[5]-> project name -->
<!-- WoC[6]-> project repo -->

<template lang="pug">
v-row(justify='left')
  v-col
    v-card.elevation-4(:width="1.08*getwidth")
            v-card(:width="getwidth" flat)
              v-row
                v-col(style="padding-bottom: 0")
                  div
                    h4 {{ WoC[3] }}
                  v-col(cols="12")
                    v-row.justify-center
                      h6(style="color: rgb(120,120,120; font-weight:normal;margin-bottom:-4px)")
                    v-row.justify-center
                      h5(style="font-weight:normal") {{ WoC[1] }}
                        v-btn.mb-1(color='red' :href="`mailto:${WoC[2]}`" target='_blank' v-if='WoC[4]' icon small)
                          v-icon(color='red' small='true') mdi-email
                    v-row.pt-0.justify-center(style="margin-top:-4px")
                        h5 {{ WoC[5] }}
                    v-row(justify='center') 
                      v-btn(color='black',:href="WoC[6]",target='_blank',v-if='WoC[6]' icon small)
                        v-icon(color='black') mdi-github
</template>
<script>
export default {
  name: "WoCCard",
  props: ["WoC"],
  data: () => ({
    pageNo: 1,
    getwidth: 200
  })
};
</script>
