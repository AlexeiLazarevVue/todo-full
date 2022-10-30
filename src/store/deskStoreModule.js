export const deskStoreModule = {
  state: {
    desks: [
      {
        id: 1,
        name: "Name",
        todos: [
          {
            id: 1,
            name: "First",
            items: [{ id: 1, body: "dsdsdsds" }],
          },
          {
            id: 2,
            name: "Second",
            items: [
              {
                id: 1,
                body: "ffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffrefwetwertrewgwergewrgwergewgewgwegrwegrwergwerewwwwwweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
              },
              { id: 2, body: "dsdsds" },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Name 2",
        todos: [
          {
            id: 1,
            name: "First",
            items: [{ id: 1, body: "dsdsdsds" }],
          },
        ],
      },
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
  },
  namespaced: true,
};
