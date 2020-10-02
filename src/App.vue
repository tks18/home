<template>
  <v-app id="app has-navbar-fixed-top">
    <navDrawer />
    <v-system-bar fixed window lights-out>
      <v-spacer></v-spacer>
      <v-icon
        :class="
          'clip-text-back' +
          ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
        "
        >mdi-wifi-strength-4</v-icon
      >
      <span
        :class="
          'non-touch point-cursor clip-text-back' +
          ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
        "
      >
        {{ now | moment('h:mm:ss a') }}
      </span>
    </v-system-bar>
    <navbar />
    <v-main>
      <div class="content">
        <transition name="fadeDownBig" mode="out-in">
          <router-view></router-view>
        </transition>
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
export default {
  name: 'App',
  components: {
    navbar,
    navDrawer,
    foot,
    fabComponent,
  },
  data: function () {
    return {
      now: Date.now(),
    };
  },
  mounted() {
    setInterval(() => {
      this.now = Date.now();
    }, 1000);
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
