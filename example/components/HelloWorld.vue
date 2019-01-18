<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h3><button @click="increment">+</button></h3>
    <h3><button @click="decrement">-</button></h3>

    <label for="amount">Amount</label>
    <input type="text" id="amount" v-model="amount" />
    <button @click="set">Set</button>
    <p>
      <child-component />
    </p>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent';

export default {
  components: { ChildComponent },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    decrement() {
      this.$store.dispatch('decrement')
    },
    set() {
      this.$store.dispatch('set', this.amount)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
