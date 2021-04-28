<template>
  <v-col id="about-moreStats" cols="12">
    <v-container>
      <v-row>
        <v-col :cols="ismobile ? 12 : 8">
          <v-card outlined elevation="6">
            <v-card-title>SWOT Analysis - Programmers Way </v-card-title>
            <v-card-subtitle>
              (Strength-Weakness-Opportunity-Threats)
            </v-card-subtitle>
            <v-card-text>
              <v-row class="my-0 py-0">
                <v-col cols="12" class="my-0 py-0">
                  <v-row class="my-0">
                    <v-col cols="5" align="right" justify="center">
                      <v-card-subtitle class="text-overline">
                        Strengths
                      </v-card-subtitle>
                      <div
                        v-for="(strength, index) in swot.strengths"
                        :key="index"
                      >
                        {{ index + 1 + '. ' + strength }}
                      </div>
                    </v-col>
                    <v-col cols="2" align="center" justify="center">
                      <v-divider vertical class="opaque mx-0 my-0 px-0 py-0" />
                    </v-col>
                    <v-col cols="5" align="left" justify="center">
                      <v-card-subtitle class="text-overline">
                        Weakness
                      </v-card-subtitle>
                      <div
                        v-for="(weakness, index) in swot.weakness"
                        :key="index"
                      >
                        {{ index + 1 + '. ' + weakness }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-divider class="opaque mx-0 my-0 px-0 py-0" />
                  <v-row>
                    <v-col cols="5" align="right" justify="center">
                      <v-card-subtitle class="text-overline">
                        Opportunities
                      </v-card-subtitle>
                      <div
                        v-for="(oppor, index) in swot.opportunities"
                        :key="index"
                      >
                        {{ index + 1 + '. ' + oppor }}
                      </div>
                    </v-col>
                    <v-col cols="2" align="center" justify="center">
                      <v-divider vertical class="opaque mx-0 my-0 px-0 py-0" />
                    </v-col>
                    <v-col cols="5" align="left" justify="center">
                      <v-card-subtitle class="text-overline">
                        Threats
                      </v-card-subtitle>
                      <div
                        v-for="(threats, index) in swot.threats"
                        :key="index"
                      >
                        {{ index + 1 + '. ' + threats }}
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col :cols="ismobile ? 12 : 4">
          <v-row>
            <v-col cols="12">
              <v-card outlined elevation="6">
                <v-card-title class="text-caption my-2 py-1 font-weight-bold">
                  Language Trend (30 Days)
                </v-card-title>
                <v-sparkline
                  :value="languageTrendData"
                  :labels="languageTrendLabels"
                  :gradient="languageTrendGradients"
                  gradient-direction="top"
                  :label-size="ismobile ? 9 : 8"
                  stroke-linecap="round"
                  class="mx-2"
                  :height="ismobile ? 90 : 97"
                  line-width="2"
                  auto-draw
                  type="trend"
                  :smooth="7"
                />
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
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
        </v-col>
      </v-row>
    </v-container>
  </v-col>
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
        this.languageTrendGradients = trendData.data.languageTrendGradients;
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
