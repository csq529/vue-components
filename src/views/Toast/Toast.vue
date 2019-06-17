<template>
  <div>
   <!--  <cube-button @click="showToastTime">Toast - time 1s</cube-button>
    <cube-button @click="showToastMask">Toast- with mask</cube-button>
    <cube-loading :size="28"></cube-loading> -->
    <base-input ref="usernameInput"></base-input>
    <div style="width: 20px; height: 20px; background: red; margin-top: 100px" @click="clickMe">click me</div>
  </div>
</template>
<script>
import BaseInput from '@/components/BaseInput'

export default {
  components: {
    BaseInput
  },
  data () {
    return {
    }
  },
  methods: {
    clickMe () {
      this.$refs.usernameInput.popUp()
      // this.$refs.usernameInput.focus()
    },
    showToastTime () {
      const toast = this.$createToast({
        time: 1000,
        txt: 'Toast time 1s'
      })
      toast.show()
    },
    showToastMask () {
      const toast = this.$createToast({
        txt: 'Loading...',
        mask: true
      })
      toast.show()
    }
  }
}

</script>
<style>
</style>
