export const deskStoreModule = {
  state: {
    items: [
      { id: 1, todoId: 1, value: "Task n1" },
      { id: 2, todoId: 1, value: "Task n2" },
      { id: 3, todoId: 2, value: "Task n1" },
    ],
    todos: [
      { id: 1, deskId: 1, name: "Card title n1" },
      { id: 2, deskId: 1, name: "Card title n2" },
      { id: 3, deskId: 2, name: "Card title n1" },
    ],
    desks: [
      { id: 1, name: "Desk title n1" },
      { id: 2, name: "Desk title n2" },
    ],
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
    addToDoItem: (state, newItem) => {
      if (newItem.value.trim() != "") {
        state.items.push(newItem);
      }
    },
    addToDo: (state, newToDo ) => {
      if (newToDo.name.trim() != "") {
        state.todos.push(newToDo);
      }
    },
    addDesk: (state, newDesk) => {
      if (newDesk.name.trim() != "") {
        state.desks.push(newDesk);
      }
    },
    removeItem: (state, itemId) => {
      state.items = state.items.filter((item) => item.id != itemId)
    },
    removeToDo: (state, todoId) => {
      state.todos = state.todos.filter((todo) => todo.id != todoId)
    },
    removeDesk: (state, deskId) => {
      state.desks = state.desks.filter((desk) => desk.id != deskId)
    },
  },
  namespaced: true,
};
