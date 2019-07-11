<template>
  <div id="app">
    <h1>Vue.jsの練習作品集</h1>
    <router-link to="/">Home</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

li {
  list-style: none;
}

.container {
  margin: 50px;
}

</style>
