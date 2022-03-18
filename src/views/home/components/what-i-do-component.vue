<template>
  <div class="column is-full ma-0 pa-0">
    <v-container class="non-touch">
      <v-row align="center" justify="center" class="ma-0 pa-0">
        <v-col cols="12" align="center">
          <h-title-component
            id="whatiDo"
            :title="title"
            arrow="down"
            :center="true"
            :large="true"
            :darker="true"
          />
        </v-col>
        <v-col align="center" justify="center" class="text-center" cols="12">
          <!-- <v-tabs centered grow>
            <v-tab>Web Design</v-tab>
            <v-tab>Cloud Management</v-tab>
            <v-tab>Technology & Platform Development</v-tab>
            <v-tab>Accounting Advisory</v-tab>
            <v-tab>Consulting</v-tab>
            <v-tab>Others</v-tab>
          </v-tabs> -->
          <v-row align="center" justify="center">
            <v-tooltip
              v-for="(activity, index) in activities"
              :key="index"
              top
              transition="slide-y-transition"
            >
              <template #activator="{ on, attrs }">
                <v-col
                  v-ripple
                  v-bind="attrs"
                  :cols="ismobile ? 5 : 2"
                  align="center"
                  :class="
                    (ismobile ? 'mx-1 my-1' : 'mx-3 my-2') + ' point-cursor'
                  "
                  justify="center"
                  v-on="on"
                >
                  <v-row align="center">
                    <v-col align="center" justify="center">
                      <v-img
                        :max-width="ismobile ? 80 : 110"
                        :src="activity.asset"
                      />
                    </v-col>
                  </v-row>
                  <v-row align="center" class="text-center">
                    <v-col
                      cols="12"
                      align="center"
                      class="text-overline ma-0 pa-0 text-center font-weight-bold"
                    >
                      {{ activity.activity }}
                    </v-col>
                    <v-col
                      cols="12"
                      align="center"
                      class="text-caption ma-0 pa-0 font-weight-light"
                    >
                      {{ activity.description }}
                    </v-col>
                  </v-row>
                </v-col>
              </template>
              <span>{{ activity.tooltip }}</span>
            </v-tooltip>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
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
  data: () => ({}),
  computed: {
    activities() {
      return [
        {
          asset: 'https://i.ibb.co/30nd1YV/web-coding.png',
          activity: 'Developing Frontends',
          description: 'Developing Classy, Sassy, Professional Grade Frontends',
          tooltip: 'Get to Know What Frameworks I Code for Development',
        },
        {
          asset: 'https://i.ibb.co/xH2ZbFx/picture.png',
          activity: 'Image Manipulation',
          description: 'Well Versed in Post Processing of Photographs',
          tooltip: 'Get to Know What Softwares I Use for Post Processing',
        },
        {
          asset: 'https://i.ibb.co/Hgmr79D/device.png',
          activity: 'App Development',
          description: 'Mobile App Development Based on Flutter SDK',
          tooltip: 'Get to Know What i learnt in Flutter',
        },
        {
          asset: 'https://i.ibb.co/9wmnjy3/idea.png',
          activity: 'Hosting Solutions Guidance',
          description:
            'Advising on Suitable and Best Hosting Solutions for a Website / Server',
          tooltip: 'Get to Know What type of Consulting i will give',
        },
        {
          asset: 'https://i.ibb.co/HtyrcKJ/programming.png',
          activity: 'Presentations',
          description: 'Desgining Wonderful and Eye Catching Presentations',
          tooltip:
            'Get to Know What Softwares i use for Designing Presentations',
        },
        {
          asset: 'https://i.ibb.co/7bFKmPq/layer.png',
          activity: 'Architecting Backends',
          description:
            'Constructing Secure and Powerful Backends for Frontends',
          tooltip: 'Get to Know What Languages I Use for Backends',
        },
        {
          asset: 'https://i.ibb.co/ys3H4gr/speed-test.png',
          activity: 'Video Editing',
          description: 'Editing and Color Grading Videos  for a Cinematic Look',
          tooltip: 'Get to Know What Softwares I Use for Video Editing',
        },
        {
          asset: 'https://i.ibb.co/x2ZjnxF/binary-code.png',
          activity: 'Data Analytics',
          description:
            'Crunching, Cleaning and Manipluating Data and Getting Insights',
          tooltip:
            'Get to Know What Languages and Softwares with Which i Analyze Data',
        },
      ];
    },
  },
};
</script>
