<template>
  <div>
    <!-- <input ref="input" value="text"> -->
    <div>child component</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    focus: function () {
      this.$refs.input.focus()
    },
    popUp () {
      alert(11)
    }
  }
}

</script>
<style>
</style>
