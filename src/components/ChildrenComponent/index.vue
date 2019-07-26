<template>
  <div>
    <div>父组件的值：{{ fData }}, {{ name }}</div>
    <button @click="toFather">向父组件传值</button>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        text: '我来自子组件'
      }
    },
    inject: ['fData'],
    methods: {
      toFather () {
        this.$emit('toFather', this.text)
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>