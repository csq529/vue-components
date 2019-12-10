<template>
    <div class="container">
        <div class="scroll-wrapper">
            <div class="scroll-top" id="top"></div>
        </div>
    </div>
</template>

<script>
import ScrollToTop from "../../assets/js/scrollToTop.js";

export default {
  data() {
    return {};
  },
  mounted() {
    var toTop = new ScrollToTop("#top", {
      // 滚动条向下滑动多少时，出现回到顶部按钮
      showWhen: 100,
      // 回到顶部的速度。
      speed: 100,
      // 元素淡入和淡出的速度
      fadeSpeed: 10
    });
  }
};
</script>

<style scoped>

.scroll-wrapper {
    height: 1000px;
}
#top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 60px solid #3498db;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
}

#top.backing {
    border-bottom: 60px solid #e74c3c;
}
</style>