<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "form-button",
};
</script>

<style lang="less" scoped>
button {
  background: #F2F2F8;
  color: #343756;
  padding: 10px;
  border: 0;
  transition: 0.7s;
  &:hover {
    cursor: pointer;
  }
}
</style>