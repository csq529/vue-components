<template>
  <div>
    <div style="margin-top: 50px">
      <vue-slider v-model="value"></vue-slider>

      <div>value: {{ value }}</div>
    </div>
  </div>
</template>
<script>
import vueSlider from 'vue-slider-component'

export default {
  components: {
    vueSlider
  },
  data () {
    return {
      value: 10,
      width: 'auto', // 组件宽度
      height: 6, // 组件高度
      direction: 'horizontal', // 组件方向
      dotSize: 16, // 滑块大小
      eventType: 'auto', // 事件类型
      min: 0, // 最小值
      max: 100, // 最大值
      interval: 1, // 分段间隔
      startAnimation: false, // 是否开启初始动画
      tooltipMerge: true,
      processDragable: false, // 进度条是否可拖拽（只限范围模式）
      minRange: null, // 最小范围
      maxRange: null, // 最大范围
      fixed: false, // 是否固定距离
      debug: false, // 是否为开发环境（打印错误）
      disabled: false, // 是否不可用
      show: true, // 是否显示组件
      enableCross: true, // 在范围模式中，是否允许交叉
      realTime: false, // 是否实时计算组件布局
      tooltip: 'always', // 是否显示工具提示
      clickable: true, // 是否可点击的
      tooltipDir: 'top', // 工具提示方向
      piecewise: false, // 是否显示分段样式
      lazy: false, // 是否在拖拽结束后同步值
      useKeyboard: true, // 是否使用键盘控制
      reverse: false, // 是否反向组件
      speed: 0.5, // 动画速度
      focusStyle: null, // 键盘控制时，算滑块获得焦点时样式
      bgStyle: null, // 组件背景样式
      sliderStyle: null, // 滑块样式
      tooltipStyle: null, // 工具提示样式
      processStyle: null, // 进度条样式
      piecewiseStyle: null, // 分割点的样式
      disabledStyle: null // 组件禁用状态下样式
    }
  }
}

</script>
<style>
</style>
