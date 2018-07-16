<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links_{{ddd}}</h2>
    <button @click="goDemo1">走你！</button>
    <router-link to="/demo1">Go to demo1</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ddd: 'aaa',
      goDemo1: function() {
        alert("11")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
