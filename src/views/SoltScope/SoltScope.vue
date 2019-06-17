<template>
  <div>
    <todo-list :todos="todoList">
      <template slot-scope="{ todo }">
        <span>
          {{ todo.name1 }}
        </span>
      </template>
    </todo-list>
  </div>
</template>
<script>
import TodoList from '@/components/TodoList/TodoList'

export default {
  components: {
    TodoList
  },
  data () {
    return {
      todoList: [
        {
          name: '吃饭',
          name1: '11'
        },
        {
          name: '睡觉',
          name1: '22'
        },
        {
          name: '打豆豆',
          name1: '33'
        }
      ]
    }
  }
}
</script>
<style>
</style>
