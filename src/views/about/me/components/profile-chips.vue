<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'AboutSomeWordsComponent',
  props: {
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
          name: 'Certifications',
          icon: 'mdi-certificate',
          id: '#about-certifications-gallery',
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
