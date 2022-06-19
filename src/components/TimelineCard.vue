<template lang="pug">
div(v-if="timelineDetails")
    v-timeline-item(v-for="(timelineDetail,index) in timelineDetails" :key='timelineDetail[0]' :color='timelineDetail[1]', fill-dot='', :value='index%2 === 0 ? "right":"left"' )
      span(slot='opposite')
        p(:class="['display-1', `${timelineDetail[1]}--text`]")
          font(size='5') {{ timelineDetail[2] }}
      v-card.elevation-5.ml-2.mr-2
        v-card-title(:class='timelineDetail[1]')
          span.display-1.white--text.font-weight-light(style='word-break: break-word;')
            | {{ timelineDetail[3]}}
        v-container
          v-row.ml-2.font-weight-bold.d-lg-none.d-xl-flex.d-xl-none {{ timelineDetail[2] }}
          v-row.ml-2.mr-2.text-left {{ timelineDetail[4] }}
          a(:href='timelineDetail[6]',style='text-decoration:none;',v-if='timelineDetail[5]')
            v-btn.mb-2.mt-2(small='small', style="flex-direction:column;",:color='timelineDetail[1]', dark='dark', v-if='timelineDetail[6]') {{ timelineDetail[5] }}
          a(:href='timelineDetail[8]',style='text-decoration:none;',v-if='timelineDetail[7]')
            v-btn.ml-2.mb-2.mt-2(small='small', :color='timelineDetail[1]', dark='dark', v-if='timelineDetail[8]') {{ timelineDetail[7] }}

</template>

<script>
export default {
  name: "TimelineCard",
  props: ["timelineDetails"]
};
</script>
