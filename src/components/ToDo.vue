<template>
  <div class="wrapper">
    <div class="wrapper__top">
      <p>{{ toDo.name }}</p>
      <form-button
        class="delete"
        @click="removeToDo(toDo.id)"
      >
       <font-awesome-icon class="icon fa-xl" icon="fa-solid fa-circle-xmark"/>
      </form-button>
    </div>

    <div class="content">
      <div v-for="item in items.filter((item) => item.todoId == toDo.id)" :key="item.id" class="toDoItem">
        <to-do-item :item="item"></to-do-item>
      </div>
      <div class="form">
        <add-button
          v-if="!isItemAdding"
          @click.stop="setItemAdding(true)"
          class="add-button"
          >Add +</add-button>
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
      removeToDo: "deskStoreModule/removeToDo",
      setItemAdding: "inputsController/setItemAdding",
    }),
    setItemAdding(newValue) {
      this.isItemAdding = newValue;
    },
    createToDoItem(newItem) {
      newItem.todoId = this.toDo.id
      this.addToDoItem(newItem);
    },
  },
  computed: {
    ...mapState({
      isItemAdding: (state) => state.inputsController.isItemAdding,
      items: (state) => state.deskStoreModule.items,
    }),
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
  // min-height: 300px;
  max-height: 100%;
  margin: 0 30px;
  padding: 0 8px;
  overflow-y: auto;
  scroll-behavior: smooth;
  -webkit-box-shadow: 5px 5px 5px 5px rgba(34, 60, 80, 0.3);
  border-radius: 16px;
  &:hover .delete{
        opacity: 1;
      }
  &__top {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0 16px 14px;
    p {
      word-break: break-word;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #fff;
    }
    .delete {
      right: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      height: 30px;
      width: 30px;
      opacity: 0;
      transition: 0.3s;
      &:hover {
        opacity: 0.7s !important;
      }
      .icon {
        color: #f2f2f8;
      }
    }
  }

  
  .content {
    div {
      margin-bottom: 5px;
    }
  }
  .add-button {
    width: 100%;
    padding: 10px;
  }
  .add-button {
    width: 100%;
    padding: 10px;
  }
}
</style>