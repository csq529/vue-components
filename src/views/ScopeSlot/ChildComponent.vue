<template>
  <div>
      <div>
        <!--通过v-bind 可以向外传递参数, 告诉父组件是否显示-->
        <slot name="child" v-bind="{ washer: true }"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>