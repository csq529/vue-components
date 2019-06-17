<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}

</script>
<style>
</style>
