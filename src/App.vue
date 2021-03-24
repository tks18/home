<template>
  <v-app id="app has-navbar-fixed-top">
    <navDrawer />
    <navbar />
    <sysBar />
    <Notification group="main" position="top right" />
    <Notification
      group="server"
      :position="ismobile ? 'bottom left' : 'top left'"
    />
    <v-main>
      <div class="content my-2">
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
import Notification from '@c/notification';
import foot from '@c/footer';
import fabComponent from '@c/fab-component';
import sysBar from '@c/system-bar';
import { notifications } from '@p/backend';
import { ismobile } from '@p/helpers';
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
    Notification,
    foot,
    fabComponent,
    sysBar,
  },
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  methods: {
    async getServerNotifications() {
      let currentNotifications = await notifications.get.current();
      if (currentNotifications.success) {
        currentNotifications.data.notifications.forEach((notification) => {
          this.$notify(notification.properties);
        });
      }
    },
    notifyDarkTheme() {
      let notifications = JSON.parse(localStorage.getItem('notification'));
      let dark = this.$vuetify.theme.dark;
      if ((!dark && notifications == null) || (!dark && !notifications.dark)) {
        this.$notify({
          group: 'main',
          type: 'info',
          duration: 5000,
          title: 'Dark Mode',
          text: 'Dark Theme Customization Available. Click here to Turn on.',
          data: {
            loading: false,
            type: 'Feature Notification',
            onClick: () => {
              this.$state.store.navbar.active = true;
              localStorage.setItem(
                'notification',
                JSON.stringify({
                  dark: true,
                }),
              );
            },
            onClose: () => {
              localStorage.setItem(
                'notification',
                JSON.stringify({
                  dark: true,
                }),
              );
            },
          },
        });
      }
    },
  },
  mounted() {
    this.notifyDarkTheme();
    this.getServerNotifications();
  },
};
</script>
