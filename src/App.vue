<template>
  <div id="app">
    <h1>Vue.jsの練習作品集</h1>
    <clock />
    <router-link to="/" class="top-link">
      <v-btn fab color="#4fc08d" dark v-on="on">
        <font-awesome-icon :icon="['fas', 'home']" />
      </v-btn>
    </router-link>
    <v-menu>
      <template v-slot:activator="{ on }">
        <v-btn fab color="#4fc08d" dark v-on="on">
          <font-awesome-icon :icon="['fas', 'list']" />
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          @click=""
        >
          <v-list-tile-title><router-link :to="item.link">{{ item.title }}</router-link></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
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
  },
  data: () => ({
    items: [
      { title: '西暦', link: '/year-converter' },
      { title: 'じゃんけん', link: '/janken' },
      { title: 'Qiita', link: '/qiita' },
      { title: 'Bitcoin', link: '/bitcoin' }
    ]
  })
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

li {
  list-style: none;
}

.v-btn__content {
  font-size: 1.5em;
}

.container {
  margin: 40px;
}
</style>