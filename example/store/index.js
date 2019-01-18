import Vue from 'vue'
import SimpleStore from "../plugin";

Vue.use(SimpleStore)

const state = {
  count: 0
}

const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },
  set(state, payload) {
    state.count = payload
  }
}

const actions = {
  increment: ({ commit, payload }) => {
    commit("increment", payload)
  },
  decrement: ({ commit, payload }) =>
    commit("decrement", payload),
  set: ({ commit, payload }) => commit("set", payload)
};

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default new SimpleStore.Store({
  state,
  getters,
  actions,
  mutations
})