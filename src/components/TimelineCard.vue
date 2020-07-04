<template lang="pug">
div(v-if="timelineDetails")
    v-timeline-item(v-for="(timelineDetail,index) in timelineDetails" key="index" , :color='timelineDetail.gsx$colorclass.$t', fill-dot='', :value='index%2 === 0 ? "right":"left"' )
      span(slot='opposite')
        p(:class="['display-1', `${timelineDetail.gsx$colorclass.$t}--text`]")
          font(size='5') {{ timelineDetail.gsx$date.$t }}
      v-card.elevation-5.ml-2.mr-2
        v-card-title(:class='timelineDetail.gsx$colorclass.$t')
          span.display-1.white--text.font-weight-light(style='word-break: break-word;')
            | {{ timelineDetail.gsx$title.$t }}
        v-container
          v-row.ml-2.font-weight-bold.d-lg-none.d-xl-flex.d-xl-none {{ timelineDetail.gsx$date.$t }}
          v-row.ml-2.mr-2.text-left {{ timelineDetail.gsx$info.$t }}
          a(:href='timelineDetail.gsx$firstbuttonlink.$t',target='_blank',style='text-decoration:none;',v-if='timelineDetail.gsx$firstbuttonlink.$t')
            v-btn.mb-2.mt-2(small='small', style="flex-direction:column;",:color='timelineDetail.gsx$colorclass.$t', dark='dark', v-if='timelineDetail.gsx$firstbuttonlink.$t') {{ timelineDetail.gsx$firstbuttontext.$t }}
          a(:href='timelineDetail.gsx$secondbuttonlink.$t',target='_blank',style='text-decoration:none;',v-if='timelineDetail.gsx$secondbuttonlink.$t')
            v-btn.ml-2.mb-2.mt-2(small='small', :color='timelineDetail.gsx$colorclass.$t', dark='dark', v-if='timelineDetail.gsx$secondbuttonlink.$t') {{ timelineDetail.gsx$secondbuttontext.$t }}

</template>

<script>
export default {
  name: "TimelineCard",
  props: ["timelineDetails"]
};
</script>
