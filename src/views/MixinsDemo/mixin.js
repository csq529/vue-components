export default {
  data () {
    return {
      demo: 1
    }
  },
  methods: {
    sortData (data) {
      console.log('data:', data)
      let arr = data.sort((a, b) => {
        return a < b
      })
      console.log('arr:', arr)
      return arr
    }
  }
}
