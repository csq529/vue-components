<template>
  <div>
    <event-children></event-children>
    <button @click="to">Father</button>
  </div>
</template>

<script>
  import Bus from '@/common/bus'
  import EventChildren from '@/components/EventChildren'

  export default {
    components: {
      EventChildren
    },
    data() {
      return {
      }
    },
    methods: {
      to () {
        Bus.$emit('getTarget', '123')
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>