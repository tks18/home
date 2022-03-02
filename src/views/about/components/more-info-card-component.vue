<template>
  <v-container>
    <v-row>
      <v-col :cols="ismobile ? 12 : 4">
        <v-card outlined elevation="6">
          <v-card-title class="font-weight-bold"> Language Trend </v-card-title>
          <v-card-subtitle> (30 Days) </v-card-subtitle>
          <v-sparkline
            :value="languageTrendData"
            :labels="languageTrendLabels"
            :gradient="languageTrendGradients"
            gradient-direction="top"
            :label-size="ismobile ? 9 : 8"
            stroke-linecap="round"
            class="mx-2"
            :height="80"
            line-width="2"
            auto-draw
            type="trend"
            :fill="true"
            :smooth="10"
          />
        </v-card>
      </v-col>
      <v-col :cols="ismobile ? 12 : 8">
        <v-card outlined elevation="6">
          <v-card-title class="font-weight-bold">
            Top Editors I Use
          </v-card-title>
          <v-card-subtitle>(All Time)</v-card-subtitle>
          <v-card-text>
            <v-row class="mx-0">
              <v-col
                v-for="(editor, index) in editorsTrendData"
                :key="index"
                cols="6"
                class="my-0 py-1"
              >
                <div class="text-caption">
                  {{ index + 1 + '. ' }}{{ editorsTrendLabels[index] }} -
                  {{ editor }}%
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { languageTrend, editorsData } from '@p/resources/wakatime';

export default {
  name: 'AboutMoreInfoCard',
  props: {
    ismobile: {
      type: Boolean,
      default: false,
    },
    swot: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    languageTrendData: [],
    languageTrendLabels: [],
    languageTrendGradients: [],
    editorsTrendData: [],
    editorsTrendLabels: [],
  }),
  mounted() {
    this.getLanguageTrend();
    this.getEditorsTrend();
  },
  methods: {
    async getLanguageTrend() {
      const trendData = await languageTrend();
      if (trendData.success && trendData.data != null) {
        this.languageTrendData = trendData.data.languageTrendData;
        this.languageTrendLabels = trendData.data.languageTrendLabels;
        this.languageTrendGradients = ['#f72047', '#ffd200', '#1feaea'];
      } else {
        this.languageTrendData = [];
        this.languageTrendLabels = [];
        this.languageTrendGradients = [];
      }
    },
    async getEditorsTrend() {
      const editorData = await editorsData();
      if (editorData.success && editorData.data != null) {
        this.editorsTrendData = editorData.data.editorsTrendData;
        this.editorsTrendLabels = editorData.data.editorsTrendLabels;
      } else {
        this.editorsTrendData = [];
        this.editorsTrendLabels = [];
      }
    },
  },
};
</script>

<style></style>
