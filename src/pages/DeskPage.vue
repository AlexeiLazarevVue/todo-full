<template>
  <div class="todos">
    <div v-for="todo in getDesk.todos" :key="todo.id">
      <to-do :toDo="todo"></to-do>
    </div>
    <to-do-form @create="createToDo" class="to-do-form"></to-do-form>
  </div>
</template>

<script>
import ToDo from "@/components/ToDo";
import ToDoForm from "@/components/ToDoForm";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { ToDo, ToDoForm },
  methods: {
    ...mapMutations({ addToDo: "deskStoreModule/addToDo" }),
    ...mapGetters({ getDeskById: "deskStoreModule/getDeskById" }),

    createToDo(newToDo) {
      this.$store.commit("deskStoreModule/addToDo", {
        toDo: { id: newToDo.id, name: newToDo.body, items: [] },
        deskId: this.$route.params.id,
      });
    },
  },
  computed: {
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
  .to-do-form {
    height: 50px;
  }
}
</style>