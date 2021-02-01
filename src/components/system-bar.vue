<template>
  <v-system-bar @click="$vuetify.goTo(0)" fixed window lights-out>
    <v-spacer></v-spacer>
    <v-snackbar
      v-if="!$vuetify.theme.dark"
      v-model="snackbar"
      multi-line
      :timeout="6000"
    >
      Dark Mode Available Now ! Turn on Using Settings in the Nav-bar.
      <template v-slot:action="{ attrs }">
        <v-btn color="primary" v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="showUpdateUI" multi-line :timeout="6000">
      New Content Available. Update Now !
      <template v-slot:action="{ attrs }">
        <v-btn color="primary" v-bind="attrs" @click="acceptUpdate">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-icon> mdi-wifi-strength-4 </v-icon>
    <span class="non-touch point-cursor">
      {{ now | moment('h:mm:ss a') }}
    </span>
  </v-system-bar>
</template>

<script>
export default {
  data: function () {
    return {
      now: Date.now(),
      snackbar: true,
      showUpdateUI: false,
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
      return;
    },
    async acceptUpdate() {
      this.showUpdateUI = false;
      await this.$workbox.messageSW({ type: 'SKIP_WAITING' });
    },
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.showUpdateUI = true;
      });
    }
  },
  mounted() {
    setInterval(() => {
      this.now = Date.now();
    }, 1000);
  },
};
</script>
