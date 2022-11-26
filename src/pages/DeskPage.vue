<template>
  <div class="todos">
    <div v-for="todo in todos.filter((todo) => todo.deskId == $route.params.id)" :key="todo.id">
      <to-do :toDo="todo"></to-do>
    </div>
    <add-button
      v-if="!isToDoAdding"
      @click.stop="setToDoAdding(true)"
      class="add-button"
      >Add +</add-button>
    <to-do-form
      v-else
      @click.stop=""
      @submit="setToDoAdding(false)"
      @create="createToDo"
      class="to-do-form"
    ></to-do-form>
  </div>
</template>

<script>
import ToDo from "@/components/ToDo";
import ToDoForm from "@/components/ToDoForm";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: { ToDo, ToDoForm },
  methods: {
    ...mapMutations({
      addToDo: "deskStoreModule/addToDo",
      setToDoAdding: "inputsController/setToDoAdding",
    }),
    ...mapGetters({ getDeskById: "deskStoreModule/getDeskById" }),

    createToDo(newToDo) {
      newToDo.deskId = this.$route.params.id
      newToDo.name = newToDo.value
      console.log(newToDo.name, newToDo.value);
      this.addToDo(newToDo);
    },
  },
  computed: {
    ...mapState({
      isToDoAdding: (state) => state.inputsController.isToDoAdding,
      todos: (state) => state.deskStoreModule.todos,
    }),

    getDesk() {
      return this.getDeskById()(this.$route.params.id);
    },
  },
};
</script>

<style lang="less" scoped>
.todos {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 20px;
  .add-button {
    color: #9FA5DF;
    height: 300px;
    min-width: 260px;
    margin-left: 30px;
  }
  .to-do-form {
    height: 50px;
    min-width: 200px;
  }
}
</style>