<template>
  <div class="column is-full">
    <v-row :class="ismobile ? 'ma-0' : 'ma-2'">
      <v-col cols="12" align="start" justify="start">
        <h-title-component
          id="storytitle"
          :title="title"
          arrow="right"
          :center="false"
          :large="false"
          :darker="false"
        />
      </v-col>
    </v-row>
    <div
      v-if="loading"
      class="scrollable-x columns ma-1 pa-1 is-vcentered is-mobile"
    >
      <div
        v-for="n in ismobile ? 1 : 10"
        :key="n"
        class="scrollable-x-child column ma-0 mx-1 pa-0 non-touch"
      >
        <v-skeleton-loader
          class="mx-auto"
          :width="
            ismobile
              ? null
              : (contextInfo.viewport.width -
                  contextInfo.viewport.width * 0.1) /
                6
          "
          type="card"
        />
      </div>
    </div>
    <div
      v-if="!loading && !ismobile"
      class="scrollable-x columns ma-1 pa-1 is-vcentered is-mobile"
    >
      <div
        v-for="(story, index) in stories"
        :key="index"
        class="scrollable-x-child column ma-0 pa-0 non-touch"
      >
        <v-dialog
          v-model="dialog"
          fullscreen
          :persistent="false"
          transition="dialog-bottom-transition"
        >
          <template #activator="{ on, attrs }">
            <v-card
              v-ripple
              elevation="6"
              v-bind="attrs"
              :style="{
                background: 'center',
                backgroundImage: 'url(' + site + story.asset + ')',
                backgroundSize: 'cover',
              }"
              :width="ismobile ? 225 : 250"
              :height="ismobile ? 300 : 325"
              class="mx-2"
              v-on="on"
              @click="calcResp"
            >
              <v-card-text class="inherit-height-responsive">
                <v-row
                  align="start"
                  justify="start"
                  class="back-blur-no-inherit"
                >
                  <v-col cols="2" class="mx-1 pa-0">
                    <v-avatar size="30">
                      <v-img src="https://i.ibb.co/X4BknVG/DJI-0793-1.webp" />
                    </v-avatar>
                  </v-col>
                  <v-col cols="8" class="text-subtitle-1 white--text mx-1 pa-0">
                    Shan.tk
                  </v-col>
                </v-row>
                <v-row
                  align="end"
                  justify="end"
                  class="inherit-height text-right white--text text-overline mx-1 font-weight-bold"
                >
                  <div class="back-blur-no-inherit">{{ story.title }}</div>
                </v-row>
              </v-card-text>
            </v-card>
          </template>
          <v-overlay v-if="!ismobile" opacity="0.5" :value="true">
            <v-col align="right">
              <v-btn icon outlined color="primary" @click="dialog = !dialog">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
            <v-col align="center">
              <iframe
                :ref="`story-iframe-${index}`"
                :src="`${site}${story.link}`"
                :style="storyIframe"
              />
            </v-col>
          </v-overlay>
        </v-dialog>
      </div>
    </div>
    <div
      v-if="!loading && ismobile"
      class="scrollable-x columns ma-1 pa-1 is-vcentered is-mobile"
    >
      <div
        v-for="(story, index) in stories"
        :key="index"
        class="scrollable-x-child column ma-0 pa-0 non-touch"
      >
        <v-card
          v-ripple
          elevation="6"
          :style="{
            background: 'center',
            backgroundImage: 'url(' + site + story.asset + ')',
            backgroundSize: 'cover',
          }"
          :width="ismobile ? 225 : 250"
          :height="ismobile ? 300 : 325"
          class="mx-2"
          @click="
            snackbar = true;
            gotoUrl(`${site}${story.link}`);
          "
        >
          <v-card-text class="inherit-height-responsive">
            <v-row align="start" justify="start" class="back-blur-no-inherit">
              <v-col cols="2" class="mx-1 pa-0">
                <v-avatar size="30">
                  <v-img src="https://i.ibb.co/X4BknVG/DJI-0793-1.webp" />
                </v-avatar>
              </v-col>
              <v-col cols="8" class="text-subtitle-1 white--text mx-1 pa-0">
                Shan.tk
              </v-col>
            </v-row>
            <v-row
              align="end"
              justify="end"
              class="inherit-height text-right white--text text-overline mx-1 font-weight-bold"
            >
              <div class="back-blur-no-inherit">{{ story.title }}</div>
            </v-row>
          </v-card-text>
        </v-card>
        <v-snackbar v-model="snackbar" timeout="-1" vertical>
          Currently Stories are not Supported in mobile to View inside the
          Website, Opening in a new Tab

          <template #action="{ attrs }">
            <v-btn
              color="primary"
              text
              v-bind="attrs"
              @click="snackbar = !snackbar"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </div>
  </div>
</template>

<script>
import { getViewport } from '@p/helpers';
import title_component from '@v/home/components/common/title-component';
import { stories } from '@p/backend';

export default {
  name: 'HomeStoriesComponent',
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
    stories: [],
    dialog: false,
    overlay: false,
    snackbar: false,
    storyIframe: {
      width: '500px',
      height: '800px',
    },
    site: ' ',
  }),
  mounted() {
    this.fetchApis();
  },
  methods: {
    async getStories() {
      this.loading = true;
      const storydata = await stories.get(this.$state.store);
      if (storydata.success && storydata.data) {
        this.site = storydata.data.website;
        this.stories = storydata.data.stories;
        this.loading = false;
      } else {
        this.loading = true;
        this.$notify({
          group: 'main',
          type: 'error',
          duration: 5000,
          title: 'Stories Error',
          text: 'Error While Getting Stories from the Server. Please Reload the Website to Get the Data',
          data: {
            loading: false,
            dark: true,
            type: 'Error Notification',
            buttons: [
              {
                text: 'Reload Now',
                onClick: () => {
                  this.$router.go();
                },
              },
            ],
          },
        });
      }
    },
    calcResp() {
      if (!this.ismobile) {
        const vwInfo = getViewport();
        const storyHeight = vwInfo.height * 0.85;
        const storyWidth = this.ismobile ? vwInfo.width : vwInfo.width * 0.5;
        this.$set(this.storyIframe, 'height', `${storyHeight}px`);
        this.$set(this.storyIframe, 'width', `${storyWidth}px`);
      } else {
        this.dialog = false;
        this.overlay = false;
      }
    },
    fetchApis() {
      this.getStories();
    },
  },
};
</script>
