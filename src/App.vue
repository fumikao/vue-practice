<template>
  <div id="app">
    <h1>Vue.jsの練習作品集</h1>
    <clock />
    <router-link to="/" class="top-link">
      <font-awesome-icon :icon="['fas', 'home']" /> HOME
    </router-link>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Clock from '@/components/Clock'
export default {
  name: 'App',
  components: {
    clock: Clock
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

.fade-enter-active {
  transition: opacity 0.2s ease-in
  }
.fade-leave-active {
  transition: opacity .0.2s ease-out
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

a {
  text-decoration: none;
}

a:hover {
  opacity: 0.5;
}

.top-link {
  background:  #4fc08d;
  color: #fff;
  border-radius: 30px;
  padding: 10px;
}

li {
  list-style: none;
}

.container {
  margin: 40px;
}

</style>
