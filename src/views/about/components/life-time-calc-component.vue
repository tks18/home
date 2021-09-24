<template>
  <v-col id="about-lifetime" align="center" cols="12">
    <v-tooltip top transition="slide-y-transition">
      <template #activator="{ on, attrs }">
        <v-row v-ripple v-bind="attrs" v-on="on">
          <v-col
            :cols="ismobile ? 12 : 6"
            :align="ismobile ? 'center' : 'end'"
            :class="
              (ismobile ? 'text-body-2' : 'text-h6') +
              ' text my-0 py-0 font-weight-bold'
            "
          >
            Time Travelling for 🤙 xD
          </v-col>
          <v-col
            :cols="ismobile ? 12 : 6"
            :align="ismobile ? 'center' : 'start'"
            :class="
              (ismobile ? 'text-body-2' : 'text-h6') +
              ' text my-0 py-0 primary--text font-weight-bold'
            "
          >
            {{
              new Intl.NumberFormat().format(
                lifeTimeCountDown.years.toFixed(0),
              ) + 'Y :'
            }}
            {{
              new Intl.NumberFormat().format(
                lifeTimeCountDown.weeks.toFixed(0),
              ) + 'W :'
            }}
            {{
              new Intl.NumberFormat().format(
                lifeTimeCountDown.days.toFixed(0),
              ) + 'D :'
            }}
            {{
              new Intl.NumberFormat().format(
                lifeTimeCountDown.hours.toFixed(0),
              ) + 'H :'
            }}
            {{
              new Intl.NumberFormat().format(
                lifeTimeCountDown.minutes.toFixed(0),
              ) + 'M :'
            }}
            {{
              new Intl.NumberFormat().format(
                lifeTimeCountDown.seconds.toFixed(0),
              ) + 'S'
            }}
          </v-col>
          <v-col
            cols="12"
            align="center"
            class="my-0 py-0 text-overline font-weight-bold"
          >
            Wish Me Good Luck in {{ birthdayDays }} Days 😁😎
          </v-col>
        </v-row>
      </template>
      <span> Counting from my Birthday</span>
    </v-tooltip>
  </v-col>
</template>

<script>
/* eslint-disable no-restricted-syntax */

import { countUpFromTime } from '@p/helpers';
import { observeNexecute } from '@p/gsap';

export default {
  name: 'AboutLifetimeCalcComponent',
  props: {
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    lifeTimeCountDown: {
      years: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  }),
  computed: {
    birthdayDays() {
      const countDown = countUpFromTime('May 16, 2000 16:21:00');
      const remainingDays = 365 - countDown.weeks * 7;
      return remainingDays;
    },
  },
  mounted() {
    this.lifeTimeCounter('#about-lifetime');
  },
  methods: {
    lifeTimeCounter(elem) {
      observeNexecute(elem, () => {
        const newVals = countUpFromTime('May 16, 2000 16:21:00');
        const tl = this.$gsap.timeline();
        for (const [key] of Object.entries(this.lifeTimeCountDown)) {
          tl.to(this.$data.lifeTimeCountDown, {
            [key]: newVals[key],
            duration: 0.8,
          });
        }
        setTimeout(() => {
          setInterval(() => {
            this.lifeTimeCountDown = countUpFromTime('May 16, 2000 16:21:00');
          }, 1000);
        }, 3800);
      });
    },
  },
};
</script>

<style></style>
