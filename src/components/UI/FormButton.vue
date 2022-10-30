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
  background: #303030;
  color: rgb(243, 243, 243);
  padding: 10px;
  border: 2px solid #272727;
}
</style>