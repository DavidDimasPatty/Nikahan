import { createStore } from 'vuex';

export default createStore({
  state: {
    data: {}
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  actions: {
    setData({ commit }, data) {
      commit('setData', data);
    }
  },
  getters: {
    getData: state => state.data
  }
});