<template>
  <form action="" @submit.prevent>
    <form-input
      v-bind:value="newItem.value"
      @input="newItem.value = $event.target.value"
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
        value: "",
      },
    };
  },
  methods: {
    createItem() {
      this.newItem.id = Date.now();
      this.$emit("create", this.newItem);
      this.newItem = {
        id: "",
        value: "",
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
  margin-bottom: 15px;
  -webkit-box-shadow: 5px 5px 5px 5px rgba(34, 60, 80, 0.2);
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