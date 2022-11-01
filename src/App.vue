<template>
  <div class="main-wrapper">
    <div class="menu">
      <div class="menu__user">
        <img class="menu__user_logo" src="@/images/CatXD.png" />
        <h3 class="menu__user_name">AlexeiLazarevVue</h3>
        <p class="menu__user_job">Vue-developer</p>
      </div>
      <div class="menu__content">
        <router-link
          v-for="desk in getDesks()"
          :key="desk.id"
          v-bind:to="`/${desk.id}`"
          class="menu__content_link"
          >{{ desk.name }}</router-link
        >
      </div>

      <to-do-form @create="createDesk"></to-do-form>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ToDoForm from "@/components/ToDoForm";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { ToDoForm },
  methods: {
    ...mapGetters({ getDesks: "deskStoreModule/getDesks" }),
    ...mapMutations({ addDesk: "deskStoreModule/addDesk" }),
    createDesk(newDesk) {
      this.addDesk({
        id: newDesk.id,
        name: newDesk.body,
        todos: [],
      });
    },
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #c1463f;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f87855;
    border-radius: 20px;
  }
}
.main-wrapper {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #052a3f;
  background-size: cover;
  color: #dcebeb;
}

.menu {
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 300px;
  background: #cfdddb;
  overflow: auto;
  -webkit-box-shadow: 5px 5px 5px 5px rgba(34, 60, 80, 0.2);
  form {
    input {
      padding: 20px !important;
      border-radius: 0 !important;
    }
    button {
      border-radius: 0 !important;
    }
  }

  &__user {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
    &_logo {
      height: 100px;
      width: 100px;
      margin-bottom: 10px;
      border-radius: 100%;
      cursor: pointer;
    }
  }
  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    &_link {
      color: #616969;;
      text-decoration: none;
      width: 100%;
      padding: 20px;
      transition: 0.1s;
      &:hover {
        cursor: pointer;
        background: rgba(83, 85, 223, 0.85);
      }
    }
  }
}
</style>