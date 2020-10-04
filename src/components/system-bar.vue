<template>
  <v-system-bar fixed window lights-out>
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
    <v-icon
      :class="
        'clip-text-back' +
        ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
      "
    >
      mdi-wifi-strength-4
    </v-icon>
    <span
      :class="
        'non-touch point-cursor clip-text-back' +
        ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
      "
    >
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
    };
  },
  mounted() {
    setInterval(() => {
      this.now = Date.now();
    }, 1000);
  },
};
</script>
