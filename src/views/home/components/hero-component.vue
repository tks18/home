<template>
  <v-card
    id="home-mainhero"
    outlined
    :class="
      'non-touch' +
      ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
    "
  >
    <v-card-text class="hero is-fullheight">
      <div class="hero-body">
        <v-row align="center" justify="center" :class="!ismobile ? 'my-2' : ''">
          <v-col cols="12" align="center" class="my-1 py-0">
            <div
              :class="
                'text text-center font-weight-bold' +
                (ismobile ? ' text-h4' : ' text-h2')
              "
            >
              <vue-typer
                :key="$vuetify.theme.dark ? 0 : 1"
                :text="taglines"
                :class="$vuetify.theme.dark ? 'dark' : 'light'"
                :repeat="Infinity"
                :shuffle="true"
                initial-action="typing"
                :pre-type-delay="70"
                :type-delay="70"
                :pre-erase-delay="800"
                :erase-delay="100"
                erase-style="backspace"
                :erase-on-complete="false"
                caret-animation="smooth"
              />
            </div>
          </v-col>
          <v-col cols="12" class="my-0 py-0">
            <div
              :class="
                'text font-weight-bold ma-2 pa-2 text-center' +
                (ismobile ? ' text-h4' : ' text-h3')
              "
            >
              <v-tooltip
                v-model="toggleTooltip"
                top
                transition="slide-y-transition"
              >
                <template #activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    class="fit-text non-touch point-cursor"
                    v-on="on"
                    @click="loopRandEmoji()"
                  >
                    {{ animatedArray.randEmoji }}
                  </span>
                </template>
                <span>Click here to Shuffle Emoji's</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="12" class="my-0 py-0">
            <div
              :class="
                'text text-center font-weight-bold' +
                (ismobile ? ' text-body-2' : ' text-body-1')
              "
            >
              I design and code beautifully simple things, and I love what I do.
            </div>
          </v-col>
          <v-col :cols="12" align="center" class="my-2 py-0">
            <v-avatar :size="ismobile ? 250 : 350">
              <v-img :src="heroImg" alt="Main Image">
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="primary" />
                  </v-row>
                </template>
              </v-img>
            </v-avatar>
          </v-col>
          <v-col algin="center" :cols="12">
            <div class="text text-center text-overline font-weight-bold">
              <v-row align="center">
                <v-col
                  v-for="(button, index) in heroButtons"
                  :key="index"
                  align="center"
                >
                  <v-btn
                    large
                    elevation="24"
                    text
                    raised
                    outlined
                    @click="$vuetify.goTo('#' + button.id)"
                  >
                    <v-icon> {{ button.icon }} </v-icon>
                    {{ button.name }}
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import gsap from '@p/gsap';
import authorData from '@t/authorData';
import { VueTyper } from 'vue-typer';
import { generateRandomEmojis } from '@p/wordmap';

export default {
  name: 'HomeHeroComponent',
  components: {
    VueTyper,
  },
  props: {
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    heroImg: authorData.profilePicture,
    toggleTooltip: false,
    taglines: authorData.taglines,
    animatedArray: {
      randEmoji: ' ',
    },
  }),
  computed: {
    heroButtons() {
      return [
        {
          name: 'About Me',
          icon: 'mdi-information-variant',
          id: 'home-abouttitle',
        },
        {
          name: 'What i Do',
          icon: 'mdi-console-network',
          id: 'home-whatiDo',
        },
        {
          name: 'Projects',
          icon: 'mdi-projector-screen',
          id: 'home-projtitle',
        },
      ];
    },
  },
  mounted() {
    this.loopRandEmoji();
    setTimeout(() => {
      this.toggleTooltip = true;
    }, 2000);
  },
  methods: {
    loopRandEmoji() {
      gsap.tweenTo({
        vm: this,
        emoji: true,
        arrayName: 'animatedArray',
        map: generateRandomEmojis(3),
        arrayProperty: 'randEmoji',
      });
      setTimeout(() => {
        this.toggleTooltip = false;
      }, 5000);
    },
  },
};
</script>
