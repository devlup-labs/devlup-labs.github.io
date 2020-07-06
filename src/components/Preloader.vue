<template lang="pug">
  v-row.justify-center.align-center
      v-progress-circular(:size='80' :width='8' color='#1b65c4' rotate='1800' indeterminate='')

</template>
<script>
export default {
  name: "Preloader",
  props: {
    loading: Boolean,
    color: String
  }
};
</script>
