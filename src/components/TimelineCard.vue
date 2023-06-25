<!-- timelineDetail[1]->timelineDetail card color -->
<!-- timelineDetail[2]->timelineDetail date -->
<!-- timelineDetail[3]->timelineDetail title -->
<!-- timelineDetail[4]->timelineDetail info -->
<!-- timelineDetail[5]->timelineDetail first button text -->
<!-- timelineDetail[6]->timelineDetail first button link -->
<!-- timelineDetail[7]->timelineDetail second button text -->
<!-- timelineDetail[8]->timelineDetail second button link -->

<template lang="pug">
div(v-if="timelineDetails")
    v-timeline-item(v-for="(timelineDetail,index) in timelineDetails" :key='timelineDetail[0]' :color='timelineDetail[1]', fill-dot='', :value='index%2 === 0 ? "right":"left"' )
      span(slot='opposite')
        p(:class="['display-1', `${timelineDetail.colorClass}--text`]")
          font(size='5') {{ timelineDetail.date }}
      v-card.elevation-5.ml-2.mr-2
        v-card-title(:class='timelineDetail[1]')
          span.display-1.font-weight-light(style='word-break: break-word;')
            | {{ timelineDetail.title}}
        v-container
          v-row.ml-2.font-weight-bold.d-lg-none.d-xl-flex.d-xl-none {{ timelineDetail.date }}
          v-row.ml-2.mr-2.text-left {{ timelineDetail.info }}
          a(:href='timelineDetail.firstButtonLink',style='text-decoration:none;',v-if='timelineDetail.firstButtonLink')
            v-btn.mb-2.mt-2(small='small', style="flex-direction:column;",:color='timelineDetail[1]', dark='dark', v-if='timelineDetail[6]') {{ timelineDetail.firstButtonText }}
          a(:href='timelineDetail.secondButtonLink',style='text-decoration:none;',v-if='timelineDetail.secondButtonLink')
            v-btn.ml-2.mb-2.mt-2(small='small', :color='timelineDetail.colorClass', dark='dark', v-if='timelineDetail.secondButtonLink') {{ timelineDetail.secondButtonText }}

</template>

<script>
export default {
  name: "TimelineCard",
  props: ["timelineDetails"]
};
</script>
