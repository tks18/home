<template>
  <div class="column is-full my-1 py-1">
    <v-container class="non-touch">
      <v-row class="my-0 py-0">
        <v-col cols="12">
          <h-title-component
            id="whatiDo"
            :title="title"
            arrow="right"
            :center="false"
            :large="false"
            :darker="false"
          />
        </v-col>
        <v-col align="center" justify="center" class="text-center" cols="12">
          <v-tabs
            v-model="activityTab"
            centered
            center-active
            grow
            icons-and-text
          >
            <v-tabs-slider />
            <v-tab v-for="(activity, index) in activities" :key="index">
              {{ activity.name }} <v-icon> {{ activity.icon }} </v-icon>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="activityTab" class="py-2">
            <v-tab-item
              v-for="(activity, mainindex) in activities"
              :key="mainindex"
            >
              <v-row align="center" justify="center">
                <v-col
                  v-for="(services, index) in activity.services"
                  :key="index"
                  v-ripple
                  :cols="ismobile ? 5 : 3"
                  align="center"
                  :class="
                    (ismobile ? 'mx-1 my-1' : 'mx-3 my-2') + ' point-cursor'
                  "
                  justify="center"
                >
                  <v-row align="center">
                    <v-col align="center" justify="center">
                      <v-img
                        :max-width="ismobile ? 80 : 110"
                        :src="services.asset"
                      />
                    </v-col>
                  </v-row>
                  <v-row align="center" class="text-center">
                    <v-col
                      cols="12"
                      align="center"
                      class="text-overline ma-0 pa-0 text-center font-weight-bold"
                    >
                      {{ services.activity }}
                    </v-col>
                    <v-col
                      cols="12"
                      align="center"
                      class="text-caption ma-0 pa-0 font-weight-light"
                    >
                      {{ services.description }}
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import authorData from '@t/authorData';
import title_component from '@v/home/components/common/title-component';

export default {
  name: 'HomeWhatIDoComponent',
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
  },
  data: () => ({
    activities: authorData.activities,
    activityTab: 0,
  }),
};
</script>
