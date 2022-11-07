export const deskStoreModule = {
  state: {
    desks: [],
  },
  getters: {
    getDeskById: (state) => (id) => {
      return state.desks.find((desk) => desk.id === +id);
    },
    getDesks: (state) => {
      return state.desks;
    },
  },
  mutations: {
    addToDoItem: (state, newItemInfo) => {
      if (newItemInfo.item.body.trim() != "") {
        state.desks
          .find((desk) => desk.id === +newItemInfo.deskId)
          ?.todos.find((todo) => todo.id === +newItemInfo.todoId)
          ?.items.push(newItemInfo.item);
      }
    },
    addToDo: (state, newToDoInfo) => {
      if (newToDoInfo.toDo.name.trim() != "") {
        state.desks
          .find((desk) => desk.id === +newToDoInfo.deskId)
          ?.todos.push(newToDoInfo.toDo);
      }
    },
    addDesk: (state, newDeskInfo) => {
      if (newDeskInfo.name.trim() != "") {
        state.desks.push(newDeskInfo);
      }
    },
    removeItem: (state, targetItemInfo) => {
      state.desks
        .find((desk) => desk.id === +targetItemInfo.deskId).todos.forEach((todo) => todo.items = todo.items.filter((item) => +item.id != +targetItemInfo.id) );
    },
  },
  namespaced: true,
};
