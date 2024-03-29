<template>
  <v-app id="app has-navbar-fixed-top">
    <navDrawer />
    <navbar :ismobile="ismobile" />
    <Notification group="main" position="top right" />
    <Notification group="worker" position="bottom right" />
    <v-main>
      <div class="content">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </v-main>
    <bottomSettings model="fab" />
    <foot />
  </v-app>
</template>
<script>
import navbar from '@c/nav-bar';
import navDrawer from '@c/nav-drawer';
import Notification from '@c/notification';
import foot from '@c/footer';
import bottomSettings from '@c/bottom-settings.vue';
import { notifications } from '@p/backend';
import { ismobile } from '@p/helpers';

export default {
  name: 'App',
  metaInfo: {
    title: 'Sudharshan TK',
    titleTemplate: (insertedTitle) => {
      if (insertedTitle === 'Sudharshan TK') {
        return insertedTitle;
      }
      if (insertedTitle === 'Careers') {
        return `${insertedTitle} @ Sudharshan TK`;
      }
      return `${insertedTitle} | Sudharshan TK`;
    },
  },
  jsonld: () => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
  }),
  components: {
    navbar,
    navDrawer,
    Notification,
    foot,
    bottomSettings,
  },
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  mounted() {
    this.notifyDarkTheme();
    this.getServerNotifications();
    this.updateServiceWorker();
  },
  methods: {
    async getServerNotifications() {
      const currentNotifications = await notifications.get.current(
        this.$state.store,
      );
      if (currentNotifications.success) {
        currentNotifications.data.notifications.forEach((notification) => {
          this.$notify(notification.properties);
        });
      }
    },
    updateServiceWorker() {
      if (this.$worker) {
        this.$worker.addEventListener('waiting', () => {
          this.$notify({
            group: 'worker',
            type: 'info',
            duration: -100,
            title: 'Update Available',
            text: 'New Content is Available from the Server. Click the below button to update the App.',
            data: {
              loading: true,
              type: 'Worker Updates',
              buttons: [
                {
                  text: 'Update Now',
                  onClick: async () => {
                    this.$worker.addEventListener('controlling', () => {
                      this.$router.go();
                    });
                    await this.$worker.messageSW({ type: 'SKIP_WAITING' });
                  },
                },
              ],
            },
          });
        });
      }
    },
    notifyDarkTheme() {
      const notifications_store = JSON.parse(
        localStorage.getItem('notification'),
      );
      const { dark } = this.$vuetify.theme;
      if (
        (!dark && notifications_store == null) ||
        (!dark && !notifications_store.dark)
      ) {
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
};
</script>
