<template>
  <div id="app">
    <div>this is something that shouldn't show</div>
    <Reusable />
  </div>
</template>

<script>
import Reusable from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Reusable
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
