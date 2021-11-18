<template>
  <div class="column is-full py-1">
    <v-container>
      <v-row>
        <v-col align="start" justify="start">
          <div
            id="about-someWordsTitle"
            :class="
              'clip-text-back text-h5 non-touch text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
          >
            {{ title }}
            <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col cols="12" :class="(ismobile ? 'mx-1' : 'mx-2') + ' text-body-1'">
          {{ authorData.intro }}
        </v-col>
        <v-col cols="12" align="center">
          <v-chip
            v-for="(chip, index) in aboutChips"
            :key="index"
            color="primary"
            outlined
            class="my-1 mx-1"
            @click="$vuetify.goTo(chip.id)"
          >
            <v-icon left color="primary">
              {{ chip.icon }}
            </v-icon>
            {{ chip.name }}
          </v-chip>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AboutSomeWordsComponent',
  props: {
    title: {
      type: String,
      default: ' ',
    },
    authorData: {
      type: Object,
      default: () => {},
    },
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  computed: {
    aboutChips() {
      return [
        {
          name: 'Profile Card',
          icon: 'mdi-account-box-outline',
          id: '#about-aboutmecard',
        },
        {
          name: 'Languages Known',
          icon: 'mdi-language-csharp',
          id: '#about-languagesknown',
        },
        {
          name: 'More Stats',
          icon: 'mdi-sign-real-estate',
          id: '#about-moreStats',
        },
      ];
    },
  },
};
</script>

<style></style>
