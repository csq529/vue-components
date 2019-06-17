<template>
  <div>
    mixins
  </div>
</template>
<script>
import mixin from './mixin'

export default {
  mixins: [mixin],
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
    console.log('demo:', this.demo)
    let currentArr = [2, 1, 3, 4, 5, 7, 6]
    let arr = this.sortData(currentArr)
    console.log('arr:', arr)
  }
}

</script>
<style>
</style>
