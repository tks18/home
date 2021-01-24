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
import navbar from '@c/nav-bar';
import navDrawer from '@c/nav-drawer';
import foot from '@c/footer';
import fabComponent from '@c/fab-component';
import sysBar from '@c/system-bar';
export default {
  name: 'App',
  metaInfo: {
    title: 'Sudharshan TK',
    titleTemplate: (insertedTitle) => {
      if (insertedTitle == 'Sudharshan TK') {
        return insertedTitle;
      } else if (insertedTitle == 'Careers') {
        return `${insertedTitle} @ Sudharshan TK`;
      } else {
        return `${insertedTitle} | Sudharshan TK`;
      }
    },
  },
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
