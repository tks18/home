<template>
  <v-app id="app has-navbar-fixed-top">
    <navDrawer />
    <navbar />
    <sysBar />
    <v-main>
      <div class="content">
        <router-view></router-view>
      </div>
    </v-main>
    <fabComponent />
    <foot />
  </v-app>
</template>
<script>
import navbar from './components/nav-bar';
import navDrawer from './components/nav-drawer';
import foot from './components/footer';
import fabComponent from './components/fab-component';
import sysBar from './components/system-bar';
export default {
  name: 'App',
  components: {
    navbar,
    navDrawer,
    foot,
    fabComponent,
    sysBar,
  },
  methods: {},
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
