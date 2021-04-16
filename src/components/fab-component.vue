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
      <v-icon>mdi-tune</v-icon>
    </v-btn>
    <v-dialog transition="slide-y-transition" v-model="fab" max-width="400">
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
import { ismobile } from '@p/helpers';
import musicPlayer from './music-player.vue';
import bottomSettings from './bottom-settings.vue';

export default {
  components: {
    musicPlayer,
    bottomSettings,
  },
  data() {
    return {
      fab: false,
      endofPage: false,
    };
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        if (
          window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight
        ) {
          this.endofPage = true;
        } else {
          this.endofPage = false;
        }
      };
    },
  },
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  mounted() {
    this.scroll();
  },
};
</script>

<style></style>
