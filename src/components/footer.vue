<template>
  <v-footer elevation="12" inset rounded shaped>
    <v-row>
      <v-col align="start" justify="end">
        <v-btn
          v-for="(social, index) in socials"
          v-bind:key="index"
          icon
          @click="windowLink(social.link)"
          :color="social.color != null ? social.color : 'default'"
        >
          <v-icon>{{ social.icon }}</v-icon>
        </v-btn>
      </v-col>
      <v-col align="end" justify="start">
        <div class="font-weight-light primary--text">{{ now }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="end" justify="end">
        <div :class="'font-weight-black' + (ismobile ? ' text-center' : '')">
          Shan.tk 🤔😁✌ | <v-icon color="default">mdi-copyright</v-icon>
          {{ new Date().getFullYear() }}
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: function () {
    return {
      now: new Date().toLocaleTimeString(),
      clockDiag: false,
      socials: [
        {
          icon: 'mdi-twitter',
          link: 'https://twitter.com/shantk18',
          color: 'info',
        },
        {
          icon: 'mdi-instagram',
          link: 'https://instagram.com/shantk18',
          color: 'primary',
        },
        {
          icon: 'mdi-github',
          link: 'https://github.com/tks18',
          color: null,
        },
      ],
    };
  },
  methods: {
    windowLink(url) {
      window.open(url);
      return;
    },
  },
  computed: {
    ismobile() {
      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      if (width > 966) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.now = new Date().toLocaleTimeString();
    }, 1000);
  },
};
</script>
