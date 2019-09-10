<template>
  <div>
    <span class="show-more-arrow"></span>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}

</script>
<style lang="stylus" scoped>
.show-more-arrow {
  margin: 1rem auto
  display: block
  width: .32rem
  height: .32rem
  background: url('../../assets/images/more_arrow.png') no-repeat center center
  animation: arrow .4s infinite alternate
}

@keyframes arrow {
  0% {
    transform: translate3d(0, -40%, 0)
  }

  100% {
    transform: translate3d(0, 40%, 0)
  }
}
</style>
