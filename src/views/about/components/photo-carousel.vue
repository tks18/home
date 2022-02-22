<template>
  <v-tooltip top transition="slide-y-transition">
    <template #activator="{ on, attrs }">
      <v-scroll-y-transition mode="out-in">
        <v-col v-if="!play" :cols="ismobile ? 12 : 4">
          <v-skeleton-loader type="card-avatar" height="150" />
        </v-col>
        <v-col
          v-if="play"
          :key="animatorKey"
          v-bind="attrs"
          :cols="ismobile ? 12 : 4"
          v-on="on"
        >
          <v-card
            :img="currentBg"
            :height="ismobile ? 250 : 150"
            outlined
            elevation="6"
          />
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
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    localBgs: [],
    play: false,
    currentBg: '',
    animatorKey: 0,
  }),
  mounted() {
    this.setCardBgs();
  },
  methods: {
    setCardBgs() {
      this.localBgs = this.bgs;
      this.play = false;
      const initBgId = this.$lodash.random(0, this.localBgs.length - 1);
      this.currentBg = this.localBgs[initBgId];
      this.animatorKey += 1;
      setInterval(() => {
        const intervalBgId = this.$lodash.random(0, this.localBgs.length - 1);
        this.currentBg = this.localBgs[intervalBgId];
        this.animatorKey += 1;
        this.play = true;
      }, Math.floor(Math.random() + this.duration) * 1000);
    },
  },
};
</script>

<style></style>
