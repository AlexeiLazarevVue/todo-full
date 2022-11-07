export const inputsController = {
  state: {
    isToDoAdding: false,
    isDeskAdding: false,
  },
  mutations: {
    setToDoAdding(state, newValue) {
      state.isToDoAdding = newValue;
    },
    setDeskAdding(state, newValue) {
      state.isDeskAdding = newValue;
    },
  },
  namespaced: true 
};
