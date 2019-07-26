<template>
  <div>
    <children-component
      name="csq"
      @toFather="fromChildren">
    </children-component>
    <div>{{ childrenData }}</div>
  </div>
</template>

<script>
  import ChildrenComponent from '@/components/ChildrenComponent'
  export default {
    data() {
      return {
        toC: 123,
        childrenData: ''
      }
    },
    provide: {
      fData: 123
    },
    components: {
      ChildrenComponent
    },
    methods: {
      fromChildren(data) {
        console.log('childrenData:', data)
        this.childrenData = data
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>