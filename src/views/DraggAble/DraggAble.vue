<template>
  <div>
    <draggable v-model="myArray">
      <transition-group>
          <div v-for="element in myArray" :key="element.id">
              {{element.name}}
          </div>
      </transition-group>
  </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data () {
    return {
      myArray: [
        {
          name: '香蕉',
          id: 1
        },
        {
          name: '橘子',
          id: 2
        }
      ]
    }
  }
}

</script>
<style>
</style>
