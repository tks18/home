<template>
  <v-system-bar @click="$vuetify.goTo(0)" fixed window lights-out>
    <v-spacer />
    <v-icon> mdi-wifi-strength-4 </v-icon>
    <span class="non-touch point-cursor">
      {{ now | moment('h:mm:ss a') }}
    </span>
  </v-system-bar>
</template>

<script>
export default {
  data() {
    return {
      now: Date.now(),
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    setInterval(() => {
      this.now = Date.now();
    }, 1000);
  },
};
</script>
