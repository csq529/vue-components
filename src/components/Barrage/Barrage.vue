<template>
  <div>
    <div class="block">
      <span v-for="(item, index) in barrageList2" :key="index">{{ item }}</span>
    </div>
    <div class="block1">
      <span v-for="(item, index) in barrageList" :key="index">{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      barrageList: ["我是弹幕1", "我是弹幕2", "我是弹幕3"],
      barrageList2: ["我是弹幕4", "我是弹幕5", "我是弹幕6"]
    };
  }
};
</script>
<style lang="stylus" scoped>
.block1 {
  // min-width: 2rem;
  font-size: .32rem;
  width: 100%;
  position: absolute;
  left: 10px;
  top: 30px;
  /* other decorate style */
  animation: barrage 9s linear 0s infinite;
  span {
    margin-right: 10px;
  }
}
.block {
  // min-width: 2rem;
  width: 100%
  font-size: .32rem;
  position: absolute;
  top: 10px;
  /* other decorate style */
  animation: barrage 10s linear 0s infinite;

  span {
    margin-right: 10px;
  }
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
