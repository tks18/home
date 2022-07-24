<template>
  <div id="youtube-videos-component" class="column is-full non-touch">
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
                  :id="`youtube_video_${video.id.videoId}`"
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
                        <youtube-player
                          :activator="video.model"
                          :video="video"
                          :ismobile="ismobile"
                          :close-function="yt_video_model"
                          :context-info="contextInfo"
                        />
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
                                    <v-btn
                                      color="primary"
                                      @click="openInYoutube(video.id.videoId)"
                                    >
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
      <v-col v-if="loading" cols="12">
        <v-row>
          <v-col v-for="n in ismobile ? 1 : 3" :key="n">
            <v-skeleton-loader
              class="mx-auto"
              :width="
                ismobile
                  ? null
                  : (contextInfo.viewport.width -
                      contextInfo.viewport.width * 0.1) /
                    3
              "
              type="card"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import title_component from '@v/home/components/common/title-component';
import youtube_player_component from '@c/youtube-player';
import { channel_data, videos } from '@p/resources/youtube';

export default {
  name: 'HomeYoutubeComponent',
  components: {
    'h-title-component': title_component,
    'youtube-player': youtube_player_component,
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
      const id = this.videos[video.index].id.videoId;
      if (video.model) {
        this.$set(this.videos[video.index], 'model', false);
        this.$router.push({
          path: `${this.$route.path}`,
          hash: 'youtube-videos-component',
        });
      } else {
        this.$router.push({
          path: `${this.$route.path}?youtube_player=${id}`,
          hash: 'youtube-videos-component',
        });
        this.load_model();
      }
    },
    load_model() {
      const params = this.$route.query;
      if (params.youtube_player) {
        const [video] = this.videos.filter(
          (vid) => vid.id.videoId === params.youtube_player,
        );
        this.$set(this.videos[video.index], 'model', true);
      }
    },
    openInYoutube(id) {
      this.gotoUrl(`https://www.youtube.com/watch?v=${id}`);
    },
    async getChannelData() {
      this.loading = true;
      const channel_data_response = await channel_data(
        'UCD0rffboMQCgIggZJWDivjg',
        this.$state.store,
      );
      if (channel_data_response.success && !channel_data_response.error) {
        const data = channel_data_response.data.items[0];
        this.channel = data;
        this.loading = false;
      }
    },
    async getChannelVideos() {
      this.loading = true;
      const video_response = await videos(this.$state.store);
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
        this.load_model();
      }
    },
    fetchApis() {
      this.getChannelData();
      this.getChannelVideos();
    },
  },
};
</script>
