<template>
  <div class="item-wrapper">
    <p>{{ item.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.item-wrapper {
  background: #272727;
  word-break: break-word;
  max-height: 100%;
  padding: 10px;
  border-radius: 10px;
}
</style>