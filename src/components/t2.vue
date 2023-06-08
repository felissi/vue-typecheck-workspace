<template>
  <div></div>
</template>
<script>
export default {
  props: {
    tt: { default: 1, required: true, type: String },
    propT: { default: 1, required: true, type: Number }
  },
  data() {
    return {
      tData: false
    }
  }
}
</script>
