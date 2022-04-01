<template>
  <div
    :id="'home-' + id"
    :class="
      'clip-text-back' +
      (large ? ' text-h4 ' : ' text-h5 ') +
      (center ? ' text-center ma-0 pa-0 ' : ' ml-6 ') +
      (darker ? ' font-weight-bold ' : ' ') +
      'non-touch point-cursor text-capitalize' +
      ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
    "
    @click="link !== '/' && (outside ? gotoUrl(link) : $router.push(link))"
  >
    {{ title }} <v-icon :large="large">mdi-arrow-{{ arrow }}-circle</v-icon>
  </div>
</template>

<script>
export default {
  Name: 'CommonTitleComponent',
  props: {
    id: {
      type: String,
      default: ' ',
    },
    title: {
      type: String,
      default: ' ',
    },
    arrow: {
      type: String,
      default: 'right',
    },
    outside: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    darker: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '/',
    },
  },
  data: () => ({
    gotoUrl: (url) => {
      window.open(url);
    },
  }),
};
</script>
