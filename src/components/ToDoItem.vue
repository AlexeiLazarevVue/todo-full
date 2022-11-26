<template>
  <div class="item-wrapper">
    <p>{{ item.value }}</p>
    <form-button
      class="delete"
      @click="removeItem(item.id)"
    >
      <font-awesome-icon class="icon" icon="fa-solid fa-trash" />
    </form-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      removeItem: "deskStoreModule/removeItem",
    }),
  },
};
</script>

<style lang="less" scoped>
.item-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f2f2f8;
  word-break: break-word;
  max-height: 100%;
  max-width: 100%;
  padding: 10px 0px 10px 10px;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    .delete {
      opacity: 1;
    }
  }
  .delete {
    display: flex;
    opacity: 0;
    align-items: center;
    height: 0;
    transition: 0.3s;
  }
}
</style>