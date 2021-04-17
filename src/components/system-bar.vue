<template>
  <v-system-bar fixed window lights-out @click="$vuetify.goTo(0)">
    <v-spacer />
    <v-icon> mdi-wifi-strength-4 </v-icon>
    <span class="non-touch point-cursor">
      {{ now | moment('h:mm:ss a') }}
    </span>
  </v-system-bar>
</template>

<script>
export default {
  data: () => {
    return {
      now: Date.now(),
    };
  },
  mounted() {
    setInterval(() => {
      this.now = Date.now();
    }, 1000);
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
      return;
    },
  },
};
</script>
