<template>
  <v-system-bar
    class="point-cursor"
    fixed
    window
    lights-out
    @click="$vuetify.goTo(0)"
  >
    <v-spacer />
    <v-tooltip v-if="backendStatus" transition="slide-x-transition" bottom>
      <template #activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on"> mdi-wifi-strength-4 </v-icon>
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
  }),
  mounted() {
    this.checkBackend();
    setInterval(() => {
      this.now = Date.now();
    }, 1000);
  },
  methods: {
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
