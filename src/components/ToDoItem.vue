<template>
  <div @contextmenu="showContext" ref="itemWrapper" class="item-wrapper">
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
  methods: {
    showContext(event) {
      
    }
  }
};
</script>

<style scoped>
.item-wrapper {
  background: linear-gradient(135deg, #007c62, #1ea869);
  word-break: break-word;
  max-height: 100%;
  max-width: 200px;
  padding: 10px;
  -webkit-box-shadow: 5px 5px 5px 5px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
}
</style>