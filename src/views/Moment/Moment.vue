<template>
  <div>
    <!-- <div>{{ date | dateformat('YYYY-MM-DD HH:mm:ss')}}</div>
    <div>{{ currentDate | dateformat('YYYY-MM-DD HH:mm:ss') }}</div> -->

    <div>{{ currentDate | formatDate }}</div>
    <!-- <div>{{ currentDate | parseTime }}</div> -->
    <div>{{ currentDate1 | formatDate }}</div>
  </div>
</template>
<script>
let moment = require('moment')

export default {
  data () {
    return {
      date: '2018-08-08 12:25:30',
      currentDate: '/Date(1509932458000)/',
      currentDate1: '1509932458000'
    }
  },
  filters: {
    formatDate (date) {
      if (!date) return ''
      let time
      if (typeof time === 'object') {
        date = time
      } else {
        if (('' + time).length === 13) time = parseInt(time)
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = time
      }
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}

</script>
<style>
</style>
