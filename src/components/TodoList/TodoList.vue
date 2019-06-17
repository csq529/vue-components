<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <slot :todo="todo">
          {{ todo.name }}
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    todos: {
      type: Array,
      require: true,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style>
</style>
