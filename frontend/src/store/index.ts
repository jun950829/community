import { createStore } from "vuex";

export default createStore({
  state: {
    userId: null,
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
      console.log("vuex : userId", state.userId);
      return state.userId;
    },
  },
  actions: {},
  modules: {},
});
