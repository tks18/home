<template>
  <v-dialog
    :value="activator"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-card-title>
        <v-row align="center">
          <v-col :cols="ismobile ? 10 : 8" align="left">
            <v-icon color="#C4302B" class="mx-1"> mdi-youtube </v-icon>
            Youtube Player
          </v-col>
          <v-col :cols="ismobile ? 2 : 4" align="right">
            <v-btn icon @click="closeFunction(video)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text :class="ismobile ? 'mx-0 px-0' : ' '">
        <v-row :class="ismobile ? 'mx-0 px-0' : ' '">
          <v-col
            :cols="ismobile ? 12 : 7"
            align="center"
            :class="ismobile ? 'mx-0 px-0' : ' '"
          >
            <iframe
              :width="
                ismobile
                  ? contextInfo.viewport.width * 0.8
                  : contextInfo.viewport.width * 0.55
              "
              :height="
                ismobile
                  ? contextInfo.viewport.height * 0.5
                  : contextInfo.viewport.height * 0.6
              "
              :src="'https://www.youtube.com/embed/' + video.id.videoId"
              :title="video.snippet.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </v-col>
          <v-col
            :cols="ismobile ? 12 : 5"
            :class="ismobile ? 'mx-0 px-0' : ' '"
          >
            <v-row>
              <v-col cols="12">
                <v-card-title>
                  {{ video.snippet.title }}
                </v-card-title>
                <v-card-subtitle>
                  Posted on
                  {{ video.snippet.publishTime | moment('DD-MM-YYYY @ HH:MM') }}
                </v-card-subtitle>
                <v-card-text>
                  {{ video.snippet.description }}
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'YoutubePlayerComponent',
  props: {
    activator: {
      type: Boolean,
      default: false,
    },
    ismobile: {
      type: Function,
      default: () => {},
    },
    video: {
      type: Object,
      default: () => {},
    },
    closeFunction: {
      type: Function,
      default: () => {},
    },
    contextInfo: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({}),
};
</script>
