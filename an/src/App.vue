<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script>
import hello from '@/components/Hello'

export default {
  name: 'app',
  components: {
      hello
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  width:100%;

}
</style>
