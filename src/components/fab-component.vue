<template>
  <div>
    <v-btn
      :class="
        (endofPage ? 'fab-button-bottom' : 'fab-button') +
        ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
      "
      :bottom="true"
      :absolute="true"
      :fixed="true"
      :right="true"
      rounded
      fab
      @click="fab = !fab"
    >
      <v-icon>mdi-tune</v-icon>
    </v-btn>
    <v-dialog v-model="fab" transition="slide-y-transition" max-width="400">
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
/* eslint-disable no-restricted-globals */

import { ismobile } from '@p/helpers';
import musicPlayer from './music-player.vue';
import bottomSettings from './bottom-settings.vue';

export default {
  components: {
    musicPlayer,
    bottomSettings,
  },
  data: () => ({
    fab: false,
    endofPage: false,
  }),
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        if (
          window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight - 60
        ) {
          this.endofPage = true;
        } else {
          this.endofPage = false;
        }
      };
    },
  },
};
</script>

<style></style>
