<template>
  <div>
    <child-component >
      <template v-slot:child="scope">
        <span v-if="scope.washer">我是子组件</span>
      </template>
    </child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'

export default {
  components: {
    ChildComponent
  }
}
</script>

<style>

</style>