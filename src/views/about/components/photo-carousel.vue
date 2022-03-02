<template>
  <v-tooltip top transition="slide-y-transition">
    <template #activator="{ on, attrs }">
      <v-scroll-y-transition mode="out-in">
        <v-col
          :key="animatorKey"
          v-bind="attrs"
          :cols="ismobile ? 12 : 4"
          v-on="on"
        >
          <v-card outlined elevation="6">
            <v-img :src="currentBg" :aspect-ratio="16 / 9">
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-scroll-y-transition>
    </template>
    <span>Click here to View My Gallery</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'ComponentName',
  props: {
    bgs: {
      type: Array,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    localBgs: [],
    currentBg: '',
    animatorKey: 0,
  }),
  mounted() {
    this.setCardBgs();
  },
  methods: {
    setCardBgs() {
      this.localBgs = this.bgs;
      const initBgId = this.$lodash.random(0, this.localBgs.length - 1);
      this.currentBg = this.localBgs[initBgId];
      this.animatorKey += 1;
      setInterval(() => {
        const intervalBgId = this.$lodash.random(0, this.localBgs.length - 1);
        this.currentBg = this.localBgs[intervalBgId];
        this.animatorKey += 1;
      }, Math.floor(Math.random() + this.duration) * 1000);
    },
  },
};
</script>

<style></style>
