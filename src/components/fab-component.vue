<template>
  <div>
    <v-btn
      :class="
        (endofPage ? 'fab-button-bottom' : 'fab-button') +
        ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
      "
      @click="fab = !fab"
      :bottom="true"
      :absolute="true"
      :fixed="true"
      :right="true"
      rounded
      fab
    >
      <v-icon>mdi-text-account</v-icon>
    </v-btn>
    <v-dialog v-model="fab" max-width="400">
      <v-card>
        <v-card-title>Quick Actions</v-card-title>
        <v-card-text class="text-center">
          <v-row align="center" justify="center">
            <v-col>
              <musicPlayer />
            </v-col>
            <v-col>
              <bottomSettings model="icon" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import musicPlayer from './music-player';
import bottomSettings from './bottom-settings';
export default {
  components: {
    musicPlayer,
    bottomSettings,
  },
  data: function () {
    return {
      fab: false,
      endofPage: false,
    };
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop,
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.endofPage = true;
        } else {
          this.endofPage = false;
        }
      };
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
    this.scroll();
  },
};
</script>

<style></style>
