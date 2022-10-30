<template>
  <div class="wrapper">
    <p>{{ toDo.name }}</p>
    <div class="content">
      <div class="form">
        <to-do-form @create="createToDoItem"></to-do-form>
      </div>
      <div v-for="item in toDo.items" :key="item.id" class="toDoItems">
        <to-do-item :item="item"></to-do-item>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
import ToDoForm from "@/components/ToDoForm";
import { mapMutations } from "vuex";
export default {
  components: { ToDoItem, ToDoForm },
  props: {
    toDo: {
      type: Object,
      // isRequired: true
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({ addToDoItem: "deskStoreModule/addToDoItem" }),
    createToDoItem(newItem) {
      this.$store.commit("deskStoreModule/addToDoItem", {
        item: newItem,
        deskId: this.$route.params.id,
        todoId: this.toDo.id,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  background: #303030;
  width: 200px;
  min-height: 300px;
  max-height: calc(100% - 40px);
  margin: 0 20px;
  padding: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
  border-radius: 10px;

  p {
    margin-bottom: 20px;
  }
  div {
    margin-bottom: 5px;
  }
}
</style>