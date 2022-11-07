<template>
  <div class="todos">
    <div v-for="todo in getDesk.todos" :key="todo.id">
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
      this.addToDo({
        toDo: { id: newToDo.id, name: newToDo.body, items: [] },
        deskId: this.$route.params.id,
      });
    },
  },
  computed: {
    ...mapState({
      isToDoAdding: (state) => state.inputsController.isToDoAdding,
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
    height: 300px;
    min-width: 260px;
  }
  .to-do-form {
    height: 50px;
    min-width: 200px;
  }
}
</style>