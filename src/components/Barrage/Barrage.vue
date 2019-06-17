<template>
  <div>
    <div class="block">我是弹幕</div>
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
.block {
  min-width: 2rem;
  font-size: .32rem;
  position: absolute;
  /* other decorate style */
  animation: barrage 4s linear 0s;
}

//@keyframes barrage {
//  from {
//    left: 100%;
//    transform: translateX(0);
//  }
//
//  to {
//    left: 0;
//    transform: translateX(-100%);
//  }
//}

@keyframes barrage{
   from{
     left:100%;
     transform:translate3d(0,0,0);
   }
   to{
     left:-100%;
     transform:translate3d(-100%,0,0);
   }
}

</style>
