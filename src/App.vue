<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <jest></jest>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Jest from './Jest'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Jest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
