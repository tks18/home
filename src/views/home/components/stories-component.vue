<template>
  <div class="column is-full ma-2">
    <v-row>
      <v-col align="start" justify="start">
        <h-title-component
          id="storytitle"
          :title="title"
          arrow="right"
          :center="false"
          :large="false"
          :darker="false"
        />
      </v-col>
      <v-col align="end" justify="start" class="mr-4">
        <v-btn icon color="primary"><v-icon>mdi-arrow-left</v-icon></v-btn>
        <v-btn icon color="primary"><v-icon>mdi-arrow-right</v-icon></v-btn>
      </v-col>
    </v-row>
    <div
      v-if="loading"
      class="scrollable-x columns ma-1 pa-1 is-vcentered is-mobile"
    >
      <div
        v-for="n in ismobile ? 1 : 5"
        :key="n"
        class="scrollable-x-child column ma-0 pa-0 non-touch"
      >
        <v-skeleton-loader
          class="mx-auto"
          :width="ismobile ? 225 : 250"
          :height="ismobile ? 300 : 325"
          type="card"
        />
      </div>
    </div>
    <div
      v-if="!loading"
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
          class="mx-2"
          :style="{
            background: 'center',
            backgroundImage: 'url(' + site + story.asset + ')',
            backgroundSize: 'cover',
          }"
          :width="ismobile ? 225 : 250"
          :height="ismobile ? 300 : 325"
          @click="gotoUrl(`${site}${story.link}`)"
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
      </div>
    </div>
  </div>
</template>

<script>
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
    gotoUrl: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    loading: true,
    stories: [],
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
    fetchApis() {
      this.getStories();
    },
  },
};
</script>
