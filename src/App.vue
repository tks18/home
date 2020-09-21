<template>
  <v-app id="app has-navbar-fixed-top">
    <navDrawer />
    <navbar />
    <v-container>
      <v-main>
        <p>Welcome to Vue App</p>
      </v-main>
    </v-container>
  </v-app>
</template>
<script>
import navbar from './components/nav-bar';
import navDrawer from './components/nav-drawer';
export default {
  name: 'App',
  components: {
    navbar,
    navDrawer,
  },
  beforeMount() {
    console.log(this.$vuetify.theme);
  },
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
