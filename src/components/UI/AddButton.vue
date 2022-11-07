<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "add-button",
};
</script>

<style lang='less' scoped>
button {
  background: #f2f2f8;
  box-shadow: 0px 0px 8px rgba(170, 176, 206, 0.4), 0px 0px 16px rgba(172, 179, 202, 0.2);
  border: none;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background: #cfdddb;
  }
}
</style>