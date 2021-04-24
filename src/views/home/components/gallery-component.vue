<template>
  <div class="column is-full">
    <v-row :class="ismobile ? 'mx-1' : 'mx-2'">
      <v-col cols="12">
        <h-title-component
          id="gallerytitle"
          :title="title"
          arrow="right"
          link="/gallery"
          :center="false"
          :large="false"
          :darker="false"
        />
      </v-col>
      <v-col :cols="ismobile ? 12 : 6">
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-1 px-0 my-1 py-0"
            :img="loading ? null : photos[0].links.regular"
            outlined
            :loading="loading"
            :max-width="
              ismobile
                ? contextInfo.viewport.width - contextInfo.viewport.width * 0.1
                : (contextInfo.viewport.width -
                    contextInfo.viewport.width * 0.1) /
                  2
            "
            :height="
              ismobile
                ? contextInfo.viewport.height -
                  contextInfo.viewport.height * 0.5
                : (contextInfo.viewport.height -
                    contextInfo.viewport.height * 0.1) /
                  1.3
            "
          >
            <v-expand-transition>
              <v-card
                v-if="hover"
                outlined
                :loading="loading"
                :max-width="
                  ismobile
                    ? contextInfo.viewport.width -
                      contextInfo.viewport.width * 0.1
                    : (contextInfo.viewport.width -
                        contextInfo.viewport.width * 0.1) /
                      2
                "
                :max-height="
                  ismobile
                    ? contextInfo.viewport.height -
                      contextInfo.viewport.height * 0.5
                    : (contextInfo.viewport.height -
                        contextInfo.viewport.height * 0.1) /
                      1.3
                "
                class="transition-fast-in-fast-out v-card--reveal"
              >
                <v-card-subtitle class="my-1 py-0 text-h6 font-weight-bold">
                  {{ loading ? ' ' : photos[0].description }}
                </v-card-subtitle>
                <v-card-subtitle class="my-1 py-0">
                  {{ loading ? ' ' : 'by ' + photos[0].by.user }}
                  <v-avatar v-if="!loading" size="25">
                    <v-img :src="photos[0].by.profilePic" />
                  </v-avatar>
                </v-card-subtitle>
                <v-card-text v-if="!loading">
                  <div class="text text-overline font-weight-bold">
                    Posted on:
                    {{ photos[0].createdAt | moment('DD of MMM, YY') }}
                  </div>
                  <v-btn
                    text
                    color="primary"
                    @click="gotoUrl(photos[0].originalUrl)"
                  >
                    See Post
                  </v-btn>
                  <v-btn icon @click="gotoUrl(photos[0].downloadLink)">
                    <v-icon>mdi-download</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-for="m in ismobile ? 1 : 2" :key="m" :cols="ismobile ? 12 : 3">
        <v-hover v-for="n in 2" :key="n" v-slot="{ hover }">
          <v-card
            :img="
              loading ? null : photos[m == 2 ? m + n : m + n - 1].links.regular
            "
            class="mx-1 px-0 my-1 py-0"
            outlined
            :loading="loading"
            :max-width="
              ismobile
                ? contextInfo.viewport.width - contextInfo.viewport.width * 0.1
                : (contextInfo.viewport.width -
                    contextInfo.viewport.width * 0.1) /
                  4
            "
            :height="
              ismobile
                ? contextInfo.viewport.height -
                  contextInfo.viewport.height * 0.5
                : (contextInfo.viewport.height -
                    contextInfo.viewport.height * 0.1) /
                  (m == 1 ? (n == 1 ? 2.1 : 3.6) : n == 1 ? 3.6 : 2.1)
            "
          >
            <v-expand-transition>
              <v-card
                v-if="hover"
                outlined
                :loading="loading"
                :max-width="
                  ismobile
                    ? contextInfo.viewport.width -
                      contextInfo.viewport.width * 0.1
                    : (contextInfo.viewport.width -
                        contextInfo.viewport.width * 0.1) /
                      4
                "
                :max-height="
                  ismobile
                    ? contextInfo.viewport.height -
                      contextInfo.viewport.height * 0.5
                    : (contextInfo.viewport.height -
                        contextInfo.viewport.height * 0.1) /
                      (m == 1 ? (n == 1 ? 2.1 : 3.6) : n == 1 ? 3.6 : 2.1)
                "
                class="transition-fast-in-fast-out v-card--reveal"
              >
                <v-card-subtitle class="my-1 py-0 text-h6 font-weight-bold">
                  {{
                    loading
                      ? ' '
                      : photos[m == 2 ? m + n : m + n - 1].description
                  }}
                </v-card-subtitle>
                <v-card-subtitle class="my-1 py-0">
                  {{
                    loading
                      ? ' '
                      : 'by ' + photos[m == 2 ? m + n : m + n - 1].by.user
                  }}
                  <v-avatar v-if="!loading" size="25">
                    <v-img
                      :src="photos[m == 2 ? m + n : m + n - 1].by.profilePic"
                    />
                  </v-avatar>
                </v-card-subtitle>
                <v-card-text v-if="!loading">
                  <div class="text text-overline font-weight-bold">
                    Posted on:
                    {{
                      photos[m == 2 ? m + n : m + n - 1].createdAt
                        | moment('DD of MMM, YY')
                    }}
                  </div>
                  <v-btn
                    text
                    color="primary"
                    @click="
                      gotoUrl(photos[m == 2 ? m + n : m + n - 1].originalUrl)
                    "
                  >
                    See Post
                  </v-btn>
                  <v-btn
                    icon
                    color="primary"
                    @click="
                      gotoUrl(photos[m == 2 ? m + n : m + n - 1].downloadLink)
                    "
                  >
                    <v-icon>mdi-download</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import title_component from '@v/home/components/common/title-component';
import { gallery } from '@p/backend';

export default {
  name: 'HomeGalleryComponent',
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
    photos: [],
  }),
  mounted() {
    this.fetchApis();
  },
  methods: {
    async getGalleryPics() {
      const galleryData = await gallery.get();
      if (galleryData.success) {
        const shuffledPics = galleryData.data.slice(0, 5);
        shuffledPics.forEach((pic) => {
          this.photos.push({
            description: pic.description,
            createdAt: pic.created_at,
            color: pic.color,
            links: {
              thumb: pic.urls.thumb,
              regular: pic.urls.regular,
              full: pic.urls.full,
            },
            originalUrl: pic.links.html,
            downloadLink: pic.links.download,
            by: {
              user: pic.user.username,
              name: pic.user.first_name,
              profilePic: pic.user.profile_image.medium,
            },
          });
          this.loading = false;
        });
      } else {
        this.loading = true;
        this.$notify({
          group: 'main',
          type: 'error',
          duration: 5000,
          title: 'Gallery Error',
          text:
            'Error While Getting Gallery Photos from the Server. Please Reload the Website to Get the Data',
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
      this.getGalleryPics();
    },
  },
};
</script>
