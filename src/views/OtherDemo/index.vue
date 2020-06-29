<template>
  <div>
    <c-triangle></c-triangle>
    <van-progress :percentage="50" />
  </div>
</template>

<script>
import CTriangle from '@/components/CTriangle'

  export default {
    components: {
      CTriangle
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>