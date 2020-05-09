<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>

      <!--  Spinner -->
    <div class="text-center" v-if="GET_SPINNER == true">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
    <router-view v-else></router-view>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import {mapGetters} from 'vuex'
export default {
  components: {
    Header
  },
  computed:{
    ...mapGetters(["GET_SPINNER"]),
  }

};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
