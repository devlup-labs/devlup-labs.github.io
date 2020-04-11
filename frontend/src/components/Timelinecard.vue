<template lang="pug">
div
  v-timeline-item(v-for='dat in datas', :key='dat.text', :color='dat.totalcolor', fill-dot='', v-model='dat.side')
    span(slot='opposite')
      p(:class="['display-1', `${dat.totalcolor}--text`]")
        font(size='5') {{ dat.dates }}
    v-card.elevation-5(max-width='70%')
      v-card-title(:class='dat.totalcolor')
        h2.display-1.white--text.font-weight-light
          | {{ dat.title }}
      v-container
        v-row.ml-2.text-left {{ dat.info }}
      v-card-actions
        v-btn.ml-5.mb-2(small='', :color='dat.totalcolor', dark='')
          | {{ dat.bt1text }}
        v-btn.ml-5.mb-2(small='', :color='dat.totalcolor', dark='')
          | {{ dat.bt2text }}

</template>

<script>
export default {
  name: 'Timelinecard',
  props: ['datas']
} 

</script>
