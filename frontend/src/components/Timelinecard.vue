<template lang="pug">
div
  v-timeline-item(v-for='(timelineDetail,index) in timelineDetails', :key='timelineDetail.text', :color='timelineDetail.color', fill-dot='', :value='checkOrientation(index)' )
    span(slot='opposite')
      p(:class="['display-1', `${timelineDetail.color}--text`]")
        font(size='5') {{ timelineDetail.date }}
    v-card.elevation-5.ml-2.mr-2
      v-card-title(:class='timelineDetail.color')
        h2.display-1.white--text.font-weight-light(style='word-break: break-word;')
          | {{ timelineDetail.title }}
      v-container
        v-row.ml-2.font-weight-bold.d-lg-none.d-xl-flex.d-xl-none {{ timelineDetail.date }}
        v-row.ml-2.mr-2.text-left {{ timelineDetail.info }}
        a(:href='timelineDetail.firstButtonLink',style='text-decoration:none;',v-if='timelineDetail.firstButtonLink')
          v-btn.mb-2.mt-2(small='small', :color='timelineDetail.color', dark='dark', v-if='timelineDetail.firstButton') {{ timelineDetail.firstButton }}
        a(:href='timelineDetail.secondButtonLink',style='text-decoration:none;',v-if='timelineDetail.secondButtonLink')
          v-btn.ml-2.mb-2.mt-2(small='small', :color='timelineDetail.color', dark='dark', v-if='timelineDetail.secondButton') {{ timelineDetail.secondButton }}


</template>
<script>
export default {
  name: "TimelineCard",
  props: ["timelineDetails"],
  methods:{
    checkOrientation(index){
      if(index%2)
        return 'right'
      else
        return 'left'
      
    }
  }
};
</script>
