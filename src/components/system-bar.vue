<template>
  <v-system-bar
    class="point-cursor"
    fixed
    window
    lights-out
    @click="$vuetify.goTo(0)"
  >
    <v-spacer />
    <v-tooltip
      v-if="!$state.store.app.online"
      transition="slide-x-transition"
      bottom
    >
      <template #activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on"> mdi-download-network-outline </v-icon>
      </template>
      <span>App is Offline now.</span>
    </v-tooltip>
    <v-tooltip
      v-if="$state.store.app.online && backendAvailability"
      transition="slide-x-transition"
      bottom
    >
      <template #activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">
          mdi-wifi-strength-{{
            $state.store.backend.progress ? strength : networkStrength
          }}
        </v-icon>
      </template>
      <span>
        {{
          $state.store.backend.progress
            ? 'Requesting Data from Backend'
            : 'Last Response Took ' +
              Number($state.store.backend.timing / 1000).toFixed(2) +
              's'
        }}
      </span>
    </v-tooltip>
    <v-tooltip
      v-if="$state.store.app.online && !backendAvailability"
      transition="slide-x-transition"
      bottom
    >
      <template #activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">
          mdi-wifi-strength-alert-outline
        </v-icon>
      </template>
      <span>Unable to Connect to Backend</span>
    </v-tooltip>
    <span class="non-touch point-cursor">
      {{ now | moment('h:mm:ss a') }}
    </span>
  </v-system-bar>
</template>

<script>
import { ping } from '@p/backend';

export default {
  data: () => ({
    now: Date.now(),
    backendStatus: false,
    requestAnimator: null,
    strength: 4,
  }),
  computed: {
    backendAvailability() {
      if (this.backendStatus) {
        this.requestUnderProgress();
        return true;
      }
      clearInterval(this.requestAnimator);
      return false;
    },
    networkStrength() {
      const backendStore = this.$state.store.backend;
      if (this.backendStatus) {
        if (!backendStore.progress && backendStore.timing) {
          const { timing } = backendStore;
          if (timing < 500) {
            return 4;
          }
          if (timing > 500 && timing < 1500) {
            return 3;
          }
          if (timing > 1500 && timing < 2500) {
            return 2;
          }
        }
      }
      return 1;
    },
  },
  mounted() {
    this.rollTheClock();
    this.requestUnderProgress();
    this.checkBackend();
    this.checkOfflineStatus();
  },
  methods: {
    requestUnderProgress() {
      this.requestAnimator = setInterval(() => {
        if (this.strength === 4) {
          this.strength = 1;
        } else {
          this.strength++;
        }
      }, 300);
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
    rollTheClock() {
      setInterval(() => {
        this.now = Date.now();
      }, 1000);
    },
    checkOfflineStatus() {
      window.addEventListener('offline', () => {
        this.$state.store.app.online = false;
      });
      window.addEventListener('online', () => {
        this.$state.store.app.online = true;
      });
    },
    async checkBackend() {
      const status = await ping(this.$state.store);
      this.backendStatus = status.success;
    },
  },
};
</script>
