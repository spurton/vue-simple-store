import Vue from 'vue'

export default class Store {
  constructor ({ state, getters, actions, mutations }) {
    this._actions = actions
    this._state = state
    this._getters = getters
    this._mutations = mutations
    this.store = this

    this.setStoreVM(this, state)
  }

  get state () {
    return this._state
  }

  commit (type, payload) {
    this._mutations[type](this._state, payload)
  }

  dispatch (type, payload) {
    const entry = this._actions[type]
    entry.bind(this)({ commit: this.commit.bind(this), payload })
  }

  setStoreVM (store, state) {
    const computed = {}

    store._vm = new Vue({
      data: {
        $$state: state
      },
      computed
    })

    Vue.config.silent = true
  }
}
