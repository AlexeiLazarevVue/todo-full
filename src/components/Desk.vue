<template>
  <div class="wrapper">
    <h1>{{ desk.id }}</h1>
    <h1>{{ desk.name }}</h1>
    <div v-for="todo in desk.todos" :key="todo.id" class="toDos">
      <to-do :toDo="todo"></to-do>
    </div>
  </div>
</template>

<script>
import ToDo from "@/components/ToDo";
export default {
  components: { ToDo },
  props: {
    desk: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>