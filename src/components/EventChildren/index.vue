<template>
  <div>
    {{ num }}
  </div>
</template>

<script>
  import Bus from '@/common/bus'

  export default {
    data() {
      return {
        num: ''
      }
    },
    created () {
      Bus.$on('getTarget', target => {
        this.num = target
        console.log('target:', target)
      })
    }
  }
</script>

<style lang="stylus" scoped>

</style>