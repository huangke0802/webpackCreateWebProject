<template>
  <section class="real-app">
      <input 
        type="text"
        class="add-input"
        autoFocus="autofocus"
        placeholder="接下去要做什么"
        @keyup.enter="addTodo"
      >
      <todo-item 
        v-for="todo in filteredTodos" 
        :todo="todo" 
        @del="deletItem(todo.id)"
        />
      <tabs 
        :filter="filter" 
        :todos="todos"
        @switchFilter="switchFilter"
        @clearAllCompleted = "clearAllCompleted"
        ></tabs>
  </section>
</template>

<script>
import TodoItem from "./item.vue"
import Tabs from "./tabs.vue"
let id = 0;
export default {
  data(){
      return {
          filter:'all',
          todos : []
      }
  },
  components : {
    TodoItem,
    Tabs
  },
  computed:{
      filteredTodos(){
          if(this.filter == "all"){
              return this.todos;
          }
          const completed = this.filter === "completed";
          return this.todos.filter(todo => completed == todo.completed);
      }
  },
  methods : {
      addTodo(e) {
          this.todos.unshift({
              id : id++,
              content:e.target.value.trim(),
              completed : false
          });
          e.target.value = "";
      },
      deletItem(id){
          this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1 )
      },
      switchFilter(state){
          this.filter = state;
      },
      clearAllCompleted(){
          this.todos = this.todos.filter(todo => todo.completed == false)
      }
  }
}
</script>


<style scoped>
    .real-app{
        width : 600px;
        margin: 0 auto;
        box-shadow: 0 0 5px #666;
    }
    .add-input{
        position: relative;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height : 1.4em;
        outline: none;
        color: inherit;
        padding: 6px;
        box-shadow: inset 0 -2px 1px 0 rgba(0,0,0,.1);
        box-sizing: border-box;
        padding: 16px 16px 16px 60px;
        border: none;
    }
</style>

