import Store from './Store'

const install = (Vue) => {
  Vue.mixin({ 
    beforeCreate() {
      const options = this.$options;

      if (options.store) {
        Vue.prototype.$store = options.store
      }
    }
  })
}

export default {
  Store,
  install
};