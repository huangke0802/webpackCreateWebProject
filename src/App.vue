<template>
    <div id="app">
        <div id="cover"></div>
        <todo-header></todo-header>
        <todo></todo>    
        <todo-footer></todo-footer>
    </div>
</template>

<script>
import TodoHeader from "./todo/header.vue";
import TodoFooter from "./todo/footer.jsx"
import Todo from "./todo/todo.vue"
export default {
  components: {
    TodoHeader,
    TodoFooter,
    Todo
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
#app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

#cover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(255, 255, 255, 0.3);
}
</style>

