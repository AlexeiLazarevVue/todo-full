<template>
  <form action="" @submit.prevent>
    <form-input
      v-bind:value="newItem.body"
      @input="newItem.body = $event.target.value"
    />
    <form-button @click="createItem">Add</form-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newItem: {
        id: "",
        body: "",
      },
    };
  },
  methods: {
    createItem() {
      this.newItem.id = Date.now();
      this.$emit("create", this.newItem);
      this.newItem = {
        id: "",
        body: "",
      };
    },
  },
};
</script>

<style lang="less" scoped>
form {
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  input {
    width: 100%;
    border-radius: 10px 0 0 10px;
  }
  button {
    border-left: none;
    border-radius: 0 10px 10px 0;
  }
}
</style>