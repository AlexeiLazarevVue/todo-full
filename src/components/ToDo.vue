<template>
  <div class="wrapper">
    <p>{{ toDo.name }}</p>
    <div class="content">
      <div v-for="item in toDo.items" :key="item.id" class="toDoItems">
        <to-do-item :item="item"></to-do-item>
      </div>
      <div class="form">
        <add-button
          v-if="!isItemAdding"
          @click.stop="setItemAdding(true)"
          class="add-button"
          >Add +</add-button
        >
        <to-do-form
          v-else
          @submit="setItemAdding(false)"
          @create="createToDoItem"
        ></to-do-form>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
import ToDoForm from "@/components/ToDoForm";
import { mapMutations, mapState } from "vuex";
export default {
  components: { ToDoItem, ToDoForm },
  props: {
    toDo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isItemAdding: false,
    };
  },
  methods: {
    ...mapMutations({
      addToDoItem: "deskStoreModule/addToDoItem",
      setItemAdding: "inputsController/setItemAdding",
    }),
    setItemAdding(newValue) {
      this.isItemAdding = newValue;
    },
    createToDoItem(newItem) {
      this.addToDoItem({
        item: newItem,
        deskId: this.$route.params.id,
        todoId: this.toDo.id,
      });
    },
  },
  computed: {
    ...mapState({
      isItemAdding: (state) => state.inputsController.isItemAdding,
    }),
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  background: linear-gradient(135deg, #0065ef, #006ca6);
  width: 260px;
  min-height: 300px;
  max-height: 100%;
  margin: 0 30px;
  padding: 10px;
  overflow-y: auto;
  scroll-behavior: smooth;
  -webkit-box-shadow: 5px 5px 5px 5px rgba(34, 60, 80, 0.3);
  border-radius: 16px;

  p {
    margin-bottom: 20px;
    word-break: break-word;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #fff;
    margin: 6px 14px;
  }
  div {
    margin-bottom: 5px;
  }
  .add-button {
    width: 100%;
    padding: 10px;
  }
}
</style>