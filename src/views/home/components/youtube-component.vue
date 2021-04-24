<template>
  <div class="column is-full non-touch">
    <v-row :class="ismobile ? 'mx-1' : 'mx-2'">
      <v-col cols="12">
        <h-title-component
          id="channel-title"
          :title="title"
          arrow="right"
          link="/gallery"
          :center="false"
          :large="false"
          :darker="false"
        />
      </v-col>
      <v-col v-if="!loading" cols="12">
        <v-row align="center" :justify="ismobile ? 'center' : null">
          <v-col :cols="ismobile ? 8 : 2" align="center">
            <v-card
              :elevation="channel_elevation"
              :height="ismobile ? '' : contextInfo.viewport.height * 0.47"
              outlined
              ripple
              class="point-cursor"
              align="center"
              justify="center"
              @mouseover="channel_elevation = 18"
              @mouseout="channel_elevation = 3"
            >
              <v-card-text>
                <v-row align="center">
                  <v-col cols="12" align="center">
                    <v-avatar
                      v-if="
                        channel.snippet.thumbnails.high.url &&
                        contextInfo.viewport.height * 0.47 > 220
                      "
                      :size="
                        ismobile ? 150 : contextInfo.viewport.width * 0.095
                      "
                      color="primary"
                    >
                      <v-img :src="channel.snippet.thumbnails.high.url" />
                    </v-avatar>
                  </v-col>
                  <v-col cols="12" align="center">
                    <div class="text-h5 font-weight-black">
                      {{ channel.snippet.title }}
                    </div>
                    <div class="text-caption">Subscribe to my Channel</div>
                  </v-col>
                  <v-col cols="12" align="center">
                    <v-btn
                      text
                      small
                      color="#C4302B"
                      dark
                      @click="
                        gotoUrl('https://youtube.com/channel/' + channel.id)
                      "
                    >
                      Subscribe <v-icon right>mdi-youtube</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col v-if="videos.length > 0" :cols="ismobile ? 12 : 10">
            <v-row align="center">
              <v-slide-group :show-arrows="!ismobile">
                <v-slide-item
                  v-for="(video, index) in videos"
                  :key="index"
                  class="mx-2"
                >
                  <v-hover>
                    <template #default="{ hover }">
                      <v-card
                        raised
                        :height="
                          ismobile
                            ? contextInfo.viewport.height * 0.5
                            : contextInfo.viewport.height * 0.47
                        "
                        :width="
                          ismobile
                            ? contextInfo.viewport.width * 0.75
                            : contextInfo.viewport.width * 0.3
                        "
                        :img="video.snippet.thumbnails.standard.url"
                      >
                        <v-slide-y-transition mode="out-in">
                          <v-card-text v-if="!hover" class="inherit-height">
                            <v-row class="inherit-height" align="end">
                              <v-spacer />
                              <v-col cols="12">
                                <v-sheet
                                  class="pa-3"
                                  rounded
                                  elevation="8"
                                  outlined
                                >
                                  <div class="text-subtitle-1">
                                    {{ video.snippet.title }}
                                  </div>
                                  <div class="text-subtitle-2">
                                    Posted on
                                    {{
                                      video.snippet.publishTime
                                        | moment('D of MMM, YYYY @ HH:MM')
                                    }}
                                  </div>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </v-card-text>
                        </v-slide-y-transition>
                        <v-dialog
                          v-model="video.model"
                          fullscreen
                          hide-overlay
                          transition="dialog-bottom-transition"
                        >
                          <v-card>
                            <v-card-title>
                              <v-row align="center">
                                <v-col :cols="ismobile ? 10 : 8" align="left">
                                  <v-icon color="#C4302B" class="mx-1">
                                    mdi-youtube
                                  </v-icon>
                                  Youtube Player
                                </v-col>
                                <v-col :cols="ismobile ? 2 : 4" align="right">
                                  <v-btn icon @click="yt_video_model(video)">
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
                                    :src="
                                      'https://www.youtube.com/embed/' +
                                      video.id.videoId
                                    "
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
                                        {{
                                          video.snippet.publishTime
                                            | moment('DD-MM-YYYY @ HH:MM')
                                        }}
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
                        <transition name="fade" mode="out-in">
                          <v-overlay
                            v-if="hover"
                            absolute
                            z-index="2"
                            opacity="0.4"
                            color="primary"
                            class="back-blur"
                          >
                            <v-row class="inherit-height" align="center">
                              <v-col
                                cols="12"
                                align="center"
                                justify="space-around"
                              >
                                <v-row align="center">
                                  <v-col cols="12" align="center">
                                    <v-btn
                                      color="primary"
                                      fab
                                      large
                                      @click="yt_video_model(video)"
                                    >
                                      <v-icon large> mdi-youtube </v-icon>
                                    </v-btn>
                                  </v-col>
                                  <v-col cols="12" align="center">
                                    <v-btn color="primary">
                                      Visit my Channel
                                      <v-icon right>
                                        mdi-television-classic
                                      </v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-col>
                            </v-row>
                          </v-overlay>
                        </transition>
                      </v-card>
                    </template>
                  </v-hover>
                </v-slide-item>
              </v-slide-group>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="loading" cols="12" align="center">
        <v-skeleton-loader
          type="card"
          class="mx-auto"
          :width="ismobile ? 'auto' : 400"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import title_component from '@v/home/components/common/title-component';
import { channel_data, videos } from '@p/resources/youtube';

export default {
  name: 'HomeYoutubeComponent',
  components: {
    'h-title-component': title_component,
  },
  props: {
    title: {
      type: String,
      default: ' ',
    },
    ismobile: {
      type: Boolean,
      default: false,
    },
    contextInfo: {
      type: Object,
      default: () => {},
    },
    gotoUrl: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    loading: true,
    channel_elevation: 2,
    ytdialog: false,
    channel: {},
    videos: [],
  }),
  mounted() {
    this.fetchApis();
  },
  methods: {
    yt_video_model(video) {
      if (this.videos[video.index].model) {
        this.$set(this.videos[video.index], 'model', false);
      } else {
        this.$set(this.videos[video.index], 'model', true);
      }
    },
    async getChannelData() {
      this.loading = true;
      const channel_data_response = await channel_data(
        'UCD0rffboMQCgIggZJWDivjg',
      );
      if (channel_data_response.success && !channel_data_response.error) {
        const data = channel_data_response.data.items[0];
        this.channel = data;
        this.loading = false;
      }
    },
    async getChannelVideos() {
      this.loading = true;
      const video_response = await videos();
      if (video_response.success && !video_response.error) {
        const channel_videos = video_response.data.items;
        const new_video_array = [];
        channel_videos.forEach((video, index) => {
          const new_video = video;
          new_video.model = false;
          new_video.index = index;
          new_video_array.push(new_video);
        });
        this.videos = new_video_array;
        this.loading = false;
      }
    },
    fetchApis() {
      this.getChannelData();
      this.getChannelVideos();
    },
  },
};
</script>
