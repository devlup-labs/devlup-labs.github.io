<template lang="pug">
v-row(justify='left')
  v-col
    v-card.elevation-4(:width="1.08*getwidth")
            v-card(:width="getwidth" flat)
              v-row
                v-col(style="padding-bottom: 0")
                  div
                    h4 {{ WoC.gsx$menteename.$t }}
                  v-col(cols="12")
                    v-row.justify-center
                      h6(style="color: rgb(120,120,120; font-weight:normal;margin-bottom:-4px" ) Mentor
                    v-row.justify-center
                      h5(style="font-weight:normal") {{ WoC.gsx$mentorname.$t }}
                        v-btn.mb-1(color='red' :href="`mailto:${WoC.gsx$mentoremail.$t}`" target='_blank' v-if='WoC.gsx$menteeemail.$t' icon small)
                          v-icon(color='red' small='true') mdi-email
                    v-row.pt-0.justify-center(style="margin-top:-4px")
                        h5 {{ WoC.gsx$projectname.$t }}
                    v-row(justify='center') 
                      v-btn(color='black',:href="WoC.gsx$projectrepo.$t",target='_blank',v-if='WoC.gsx$projectrepo.$t' icon small)
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
