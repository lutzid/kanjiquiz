<template>
  <div id="app">
    <Quiz :kanji="kanji"/>
  </div>
</template>

<script>
import kanji from "./assets/kanji.json";
import Quiz from './pages/Quiz.vue'

export default {
  name: 'App',
  components: {
    Quiz
  },
  data () {
    return {
      kanji: kanji.items
    }
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
}
</style>
