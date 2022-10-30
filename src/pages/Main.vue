<template>
  <div class="wrapper">
    <div v-for="desk in $store.state.desks" :key="desk.id" class="desks">
      <button @click="$router.push(`/${desk.id}`)" :desk="desk">
        {{ desk.name }}
      </button>
    </div>
  </div>
</template>

<script>
import Desk from "@/components/Desk.vue";
export default {
  components: { Desk },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}
</style>