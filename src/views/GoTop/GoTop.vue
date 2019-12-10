<template> 
  <div class="gotop-container" ref="gotopContainer">
    <div class="gotop-content">
      <ul>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
        <li>plaseholder</li>
      </ul>
    </div>
    <back-top ref="backTop"></back-top>
    <div style="height: 200px; width: 200px; background: red" @click="go"></div>
  </div>
</template>
<script>
import BackTop from '@/components/BackTop'

export default {
  components: {
    BackTop
  },
  data () {
    return {
    }
  },
  methods: {
    go () {
      this.$refs.backTop.backTop()
    }
  },
  mounted () {
    let targetTom = this.$refs.gotopContainer
    let height = document.body.offsetHeight
    console.log('height:', height)
    targetTom.style.height = height + 'px'
    console.log('targetTom:', targetTom)
  }
}

</script>
<style scoped>
.gotop-content {
  height: 1000px;
}
</style>
