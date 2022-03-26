<template>
  <v-container fluid>
    <v-card flat elevation="12">
      <v-card-title class="no-break-words">
        Top Languages, Frameworks, Softwares that i Know
      </v-card-title>
      <v-card-subtitle class="no-break-words">
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
          :fill="true"
          auto-draw
          :smooth="10"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AboutKnownLangsComponent',
  props: {
    ismobile: {
      type: Boolean,
      default: false,
    },
    sparklineData: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({}),
  computed: {
    languagesKnown() {
      if (this.ismobile) {
        return {
          values: this.sparklineData.mobile.perct,
          labels: this.sparklineData.mobile.langs,
          gradient: ['#f72047', '#ffd200', '#1feaea'],
        };
      }
      return {
        values: this.sparklineData.desktop.perct,
        labels: this.sparklineData.desktop.langs,
        gradient: ['#f72047', '#ffd200', '#1feaea'],
      };
    },
  },
};
</script>

<style></style>
