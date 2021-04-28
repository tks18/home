<template>
  <v-col id="about-languagesknown" cols="12">
    <v-card flat elevation="12">
      <v-card-title class="mx-2 no-break-words">
        Top Languages, Frameworks, Softwares that i Know
      </v-card-title>
      <v-card-subtitle class="mx-2 no-break-words">
        (Scores upto 100)
      </v-card-subtitle>
      <v-card-text>
        <v-sparkline
          :value="languagesKnown.values"
          :labels="languagesKnown.labels"
          :gradient="languagesKnown.gradient"
          gradient-direction="top"
          :label-size="ismobile ? 10 : 3"
          :height="ismobile ? 130 : 70"
          :class="ismobile ? 'mx-0' : 'mx-2'"
          line-width="3"
          auto-draw
          type="bar"
        />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'AboutKnownLangsComponent',
  props: {
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    languagesKnown() {
      if (this.ismobile) {
        return {
          values: [79, 47, 32, 93, 41],
          labels: ['Nodejs', 'Python', 'ReactJs', 'Vuejs', 'Flutter'],
          gradient: ['#77a1d3', '#79cbca', '#e684ae'],
        };
      }
      return {
        values: [79, 47, 38, 32, 93, 39, 49, 52, 21, 26, 99, 48, 62],
        labels: [
          'Nodejs',
          'Python',
          'Illustrator',
          'ReactJs',
          'Vuejs',
          'Adobe Xd',
          'Lightroom',
          'Flutter',
          'Ruby',
          'Java',
          'Excel',
          'Photoshop',
          'Premiere',
        ],
        gradient: ['#77a1d3', '#79cbca', '#e684ae'],
      };
    },
  },
};
</script>

<style></style>
