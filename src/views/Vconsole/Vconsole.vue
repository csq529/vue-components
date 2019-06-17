<template>
  <div>
    Vconsole
  </div>
</template>
<script>
// var VConsole = require('../../../node_modules/vconsole/dist/vconsole.min.js')
export default {
  data () {
    return {
      studentList: [
        {
          name: '小明',
          age: 18
        },
        {
          name: '小明',
          age: 19
        },
        {
          name: '小明',
          age: 20
        },
        {
          name: '小明',
          age: 21
        },
        {
          name: '小明',
          age: 22
        }
      ]
    }
  },
  mounted () {
    var VConsole = require('../../../node_modules/vconsole/dist/vconsole.min.js')
    var vConsole = new VConsole()
    console.log('vConsole:', vConsole)
    console.log('studentList:', this.studentList)
  }
}

</script>
<style>
</style>
