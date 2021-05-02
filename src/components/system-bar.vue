<template>
  <v-system-bar
    class="point-cursor"
    fixed
    window
    lights-out
    @click="$vuetify.goTo(0)"
  >
    <v-spacer />
    <v-icon>mdi-</v-icon>
    <v-tooltip v-if="backendStatus" transition="slide-x-transition" bottom>
      <template #activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">
          mdi-wifi-strength-{{ strength }}
        </v-icon>
      </template>
      <span>Backend in Available</span>
    </v-tooltip>
    <v-tooltip v-if="!backendStatus" transition="slide-x-transition" bottom>
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
    strength: 4,
  }),
  watch: {
    'this.$state.store.backend.progress': function (progress) {
      console.log(progress);
    },
  },
  mounted() {
    this.checkBackend();
    setInterval(() => {
      this.now = Date.now();
    }, 1000);
  },
  methods: {
    requestUnderProgress() {
      setInterval(() => {
        if (this.strength === 4) {
          this.strength = 1;
        } else {
          this.strength++;
        }
      }, 200);
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
    async checkBackend() {
      const status = await ping();
      this.backendStatus = status.success;
    },
  },
};
</script>
