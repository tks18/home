<template>
  <div class="column is-full">
    <v-container>
      <v-row :class="ismobile ? 'mx-1' : 'mx-2'">
        <v-col cols="12">
          <div
            id="home-astroPicTitle"
            :class="
              'clip-text-back text-h5 non-touch ml-2 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
          >
            {{ title }}
            <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col :cols="12">
          <v-card :loading="loading" elevation="15" class="mx-auto">
            <v-card-text v-if="!loading">
              <v-row align="center">
                <v-col
                  :cols="ismobile ? 12 : 7"
                  :class="ismobile ? 'ma-0 mb-1' : 'ml-0 my-0'"
                >
                  <v-img :src="!loading ? apod.hdurl : null" />
                </v-col>
                <v-col :cols="ismobile ? 12 : 5">
                  <v-card-title v-if="!loading">
                    {{ apod.title }}
                  </v-card-title>
                  <v-card-subtitle v-if="!loading">
                    Dated: {{ apod.date }}
                  </v-card-subtitle>
                  <v-card-text>
                    {{ apod.explanation }}
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import apod from '@p/resources/nasa';

export default {
  name: 'HomeApodComponent',
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
    apod: {},
  }),
  mounted() {
    fetchApis();
  },
  methods: {
    async getNasaApod() {
      const apodData = await apod();
      if (apodData.success) {
        this.apod = apodData.data.data;
        this.loading = false;
      } else {
        this.apod = {};
        this.loading = true;
      }
    },
    fetchApis() {
      this.getNasaApod();
    },
  },
};
</script>

<style></style>
