<template>
  <v-bottom-sheet v-model="activated" inset>
    <template #activator="{ on, attrs }">
      <v-btn rounded outlined color="primary" v-bind="attrs" v-on="on">
        <v-icon>mdi-music</v-icon> Music Player
      </v-btn>
    </template>
    <v-card tile>
      <v-slider
        v-model="moveSeek"
        :max="duration == 0 ? 100 : duration"
        thumb-label="always"
        :thumb-size="40"
        :loading="loading"
        color="primary"
        class="mx-0 my-0"
        dense
        @click.stop="handleChange()"
      >
        <template #thumb-label>
          {{ currentText }}
        </template>
      </v-slider>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ metadata.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ metadata.artist }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-spacer />

          <v-list-item-content class="text-center">
            <v-list-item-subtitle>
              {{ currentText }} / {{ durationText }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-rewind</v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
            <v-btn icon @click="handlePlayPause()">
              <v-icon>{{ play ? 'mdi-pause' : 'mdi-play' }}</v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon
            class="ml-0"
            :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
          >
            <v-btn icon>
              <v-icon>mdi-fast-forward</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  props: {
    model: {
      type: Boolean,
    },
  },
  data: () => ({
    activated: false,
    play: false,
    audio: null,
    moveSeek: 0,
    changeSeek: 0,
    duration: 0,
    loading: false,
    clip: 'https://gitlab.com/tks18/portfolio-res/-/raw/master/audio/avicii-nights.mp3',
    metadata: {
      name: 'The Nights',
      artist: 'by Avicii',
    },
    durationText: '00:00',
    currentText: '00:00',
  }),
  methods: {
    createElement() {
      this.loading = true;
      if (this.audio == null) {
        this.audio = new Audio(this.clip);
        this.audio.addEventListener('loadeddata', () => {
          this.duration = this.audio.duration;
          let minutes = Math.floor(this.duration / 60);
          let remainingSecs = Math.round(this.duration % 60);
          minutes = minutes.toString().length > 1 ? minutes : `0${minutes}`;
          remainingSecs =
            remainingSecs.toString().length > 1
              ? remainingSecs
              : `0${remainingSecs}`;
          this.durationText = `${minutes}:${remainingSecs}`;
          this.loading = false;
          this.handlePlayPause();
          this.calculateSeeker();
        });
      }
    },
    handleChange() {
      if (this.audio != null) {
        const changeVals = this.moveSeek;
        const { duration } = this.audio;
        const changedTime = (changeVals / 100) * duration;
        this.audio.currentTime = changedTime;
      }
    },
    calculateSeeker() {
      this.audio.ontimeupdate = () => {
        const currentFloat = this.audio.currentTime;
        let minutes = Math.floor(currentFloat / 60);
        let remainingSecs = Math.round(currentFloat % 60);
        minutes = minutes.toString().length > 1 ? minutes : `0${minutes}`;
        remainingSecs =
          remainingSecs.toString().length > 1
            ? remainingSecs
            : `0${remainingSecs}`;
        this.currentText = `${minutes}:${remainingSecs}`;
        this.moveSeek = currentFloat;
      };
    },
    handlePlayPause() {
      if (this.audio == null) {
        this.createElement();
      } else {
        this.play = !this.play;
        this.play ? this.audio.play() : this.audio.pause();
      }
    },
  },
};
</script>

<style></style>
