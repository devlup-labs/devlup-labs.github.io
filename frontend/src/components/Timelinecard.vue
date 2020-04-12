<template lang="pug">
div
  v-timeline-item(v-for='timelineDetail in timelineDetails', :key='timelineDetail.text', :color='timelineDetail.color', fill-dot='', v-model='timelineDetail.side')
    span(slot='opposite')
      p(:class="['display-1', `${timelineDetail.color}--text`]")
        font(size='5') {{ timelineDetail.date }}
    v-card.elevation-5.ml-2.mr-2
      v-card-title(:class='timelineDetail.color')
        h2.display-1.white--text.font-weight-light
          | {{ timelineDetail.title }}
      v-container
        v-row.ml-2.font-weight-bold.d-lg-none.d-xl-flex.d-xl-none {{ timelineDetail.date }}
        v-row.ml-2.mr-2.text-left {{ timelineDetail.info }}
        v-btn.ml-5.mb-2.mt-2(small='', :color='timelineDetail.color', dark='')
          |{{ timelineDetail.firstButton }}
        v-btn.ml-5.mb-2.mt-2(small='', :color='timelineDetail.color', dark='')
          |{{ timelineDetail.secondButton }}

</template>
<script>
export default {
  name: 'Timelinecard',
  props: ['timelineDetails']
} 

</script>
