<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  created(){
    let _this = this;
    this.$store.dispatch('getActivityData',_this);
  }
}
</script>

<style>
body{margin:0;padding:0;}
#app {
  font-size:16px;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
