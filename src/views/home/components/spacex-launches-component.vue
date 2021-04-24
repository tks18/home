<template>
  <div class="column is-full">
    <v-row :class="ismobile ? 'mx-1' : 'mx-2'">
      <v-col cols="12">
        <h-title-component
          id="spacextitle"
          :title="title"
          arrow="right"
          link="/spacex"
          :center="false"
          :large="false"
          :darker="false"
        />
      </v-col>
      <v-col cols="12">
        <div class="text-body-1 ml-4">
          SpaceX is the innovative and ambitious private aerospace manufacturer
          founded in 2002 by Elon Musk. SpaceX truly earned its place among the
          aeronautical elite—and changed the economics of space flight­—by
          making its reusable rocket system seemingly as reliable as the
          sunrise. We will Soon have a Dedicated Page for Spacex and Elon Musk
          (Really Sooon).
          <span class="primary--text font-weight-bold">
            So here is the Latest Launch News below:
          </span>
        </div>
      </v-col>
      <v-col cols="12">
        <v-container>
          <v-card elevation="15" :loading="loading">
            <v-card-title v-if="!loading">
              {{ launch.name }}
            </v-card-title>
            <v-card-subtitle v-if="!loading">
              {{ launch.date_utc | moment('DD-MM-YYYY [at] hh:mm a') }}
              (UTC)
            </v-card-subtitle>
            <v-card-text v-if="!loading">
              <v-row>
                <v-col :cols="ismobile ? 12 : 6" justify="center">
                  <div class="text text-body-1">
                    {{ launch.details }}
                  </div>
                  <div class="text-overline my-1 mx-1">
                    <div>
                      <span class="font-weight-bold">Flight Number</span> -
                      {{ launch.flight_number }}
                    </div>
                    <div v-if="launch.crew.length">
                      <span class="font-weight-bold">Crew Members</span> -
                      {{ launch.crew.length }}
                    </div>
                    <div v-if="launch.static_fire_date_utc">
                      <span class="font-weight-bold">Static Fire Date</span> -
                      {{
                        launch.static_fire_date_utc
                          | moment('DD-MM-YYYY [at] hh:mm a')
                      }}
                      (UTC)
                    </div>
                    <div v-if="launch.date_utc">
                      <span class="font-weight-bold">Launch Date</span> -
                      {{ launch.date_utc | moment('DD-MM-YYYY [at] hh:mm a') }}
                      (UTC)
                    </div>
                    <div v-if="launch.success">
                      <span class="font-weight-bold"> Launch Status </span> -
                      <v-tooltip top transition="slide-y-transition">
                        <template #activator="{ on, attrs }">
                          <v-icon
                            v-bind="attrs"
                            :color="launch.success ? 'success' : 'error'"
                            v-on="on"
                          >
                            {{
                              launch.success
                                ? 'mdi-rocket-launch'
                                : 'mdi-rocket'
                            }}
                          </v-icon>
                        </template>
                        <span>{{ launch.success ? 'Success' : 'Failed' }}</span>
                      </v-tooltip>
                    </div>
                    <div v-if="launch.fairings && launch.fairings.recovered">
                      <span class="font-weight-bold">Ship Recovered</span> -
                      {{
                        launch.fairings.recovered ? 'Recovered' : 'Lost it !'
                      }}
                    </div>
                    <div class="my-1">
                      <v-chip
                        outlined
                        ripple
                        class="mx-1"
                        small
                        color="orange"
                        @click="gotoUrl(launch.links.reddit.campaign)"
                      >
                        <v-icon small left>mdi-reddit</v-icon>
                        Campaign
                      </v-chip>
                      <v-chip
                        outlined
                        ripple
                        class="mx-1"
                        small
                        color="orange"
                        @click="gotoUrl(launch.links.reddit.launch)"
                      >
                        <v-icon small left> mdi-reddit </v-icon>
                        Launch
                      </v-chip>
                      <v-chip
                        outlined
                        ripple
                        class="mx-1"
                        small
                        color="orange"
                        @click="gotoUrl(launch.links.reddit.media)"
                      >
                        <v-icon small left> mdi-reddit </v-icon>
                        Media
                      </v-chip>
                      <v-chip
                        outlined
                        ripple
                        class="mx-1"
                        small
                        color="orange"
                        @click="gotoUrl(launch.links.reddit.recovery)"
                      >
                        <v-icon small left> mdi-reddit </v-icon>
                        Recovery
                      </v-chip>
                    </div>
                    <div>
                      <v-chip
                        ripple
                        small
                        color="red"
                        outlined
                        class="mx-1"
                        @click="gotoUrl(launch.links.webcast)"
                      >
                        <v-icon small left> mdi-youtube </v-icon>
                        Watch Webcast
                      </v-chip>
                      <v-chip
                        rounded
                        small
                        outlined
                        class="mx-1"
                        color="primary"
                        @click="gotoUrl(launch.links.article)"
                      >
                        <v-icon small left> mdi-text-box-search</v-icon>
                        Article
                      </v-chip>
                      <v-chip
                        rounded
                        small
                        outlined
                        class="mx-1"
                        color="primary"
                        @click="gotoUrl(launch.links.wikipedia)"
                      >
                        <v-icon small left> mdi-wikipedia</v-icon> wiki
                      </v-chip>
                      <v-chip
                        rounded
                        small
                        outlined
                        class="mx-1"
                        color="primary"
                        @click="$router.push('/spacex/' + launch.id)"
                      >
                        <v-icon small left> mdi-file-document-outline </v-icon>
                        More Info
                      </v-chip>
                    </div>
                  </div>
                </v-col>
                <v-col
                  :cols="ismobile ? 12 : 6"
                  align="center"
                  justify="center"
                >
                  <v-img :src="launch.links.flickr.original[0]" />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions v-if="!loading" class="mx-2">
              <v-spacer />
              <v-tooltip top transition="slide-x-transition">
                <template #activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    color="primary"
                    icon
                    @click="gotoUrl(launch.links.flickr.original[0])"
                    v-on="on"
                  >
                    <v-icon>mdi-download</v-icon>
                  </v-btn>
                </template>
                <span>Download this Image</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import title_component from '@v/home/components/common/title-component';
import latestLaunches from '@p/resources/spacex';

export default {
  name: 'HomeSpacexLaunchesComponent',
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
    launch: {},
  }),
  mounted() {
    this.fetchApis();
  },
  methods: {
    async getLaunchNews() {
      const launchdata = await latestLaunches();
      if (launchdata.success && launchdata.data != null) {
        this.launch = launchdata.data;
        this.loading = false;
      } else {
        this.launch = {};
        this.loading = true;
      }
    },
    fetchApis() {
      this.getLaunchNews();
    },
  },
};
</script>
