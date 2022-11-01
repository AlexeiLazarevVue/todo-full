<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "form-button",
};
</script>

<style scoped>
button {
  background: #e6788b;
  color: rgb(243, 243, 243);
  padding: 10px;
  border: 0;
}
</style>