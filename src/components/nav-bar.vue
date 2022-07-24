<template>
  <v-app-bar app dense elevate-on-scroll>
    <v-app-bar-nav-icon @click="navclick()" />
    <v-tooltip bottom transition="slide-y-transition">
      <template #activator="{ on, attrs }">
        <v-avatar
          size="38"
          :class="
            'mx-2 non-touch point-cursor ' +
            ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
          "
          v-bind="attrs"
          v-on="on"
          @click="$router.push('/')"
        >
          <v-img :src="avatar" />
        </v-avatar>
      </template>
      <span> Go to Home </span>
    </v-tooltip>
    <v-slide-y-transition mode="out-in">
      <v-toolbar-title
        :key="routeKey"
        class="text-h6 font-weight-black non-touch"
      >
        {{ $route.name === 'Home' ? 'Shan.tk ✌' : $route.name }}
      </v-toolbar-title>
    </v-slide-y-transition>
    <v-spacer />
    <v-tooltip bottom transition="slide-y-transition">
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" icon v-on="on" @click="windowClick(github.link)">
          <v-icon color="primary">{{ github.icon }}</v-icon>
        </v-btn>
      </template>
      <span>{{ github.title }}</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
import authorData from '@t/authorData.json';

export default {
  name: 'NavBar',
  props: {
    ismobile: {
      type: Boolean,
      default: () => {},
    },
  },
  data: () => ({
    currentPage: '',
    routeKey: 0,
    github: {
      link: 'https://github.com/tks18',
      icon: 'mdi-github',
      title: 'Github Profile',
    },
    avatar: authorData.logo,
  }),
  watch: {
    $route(to) {
      this.currentPage = to.name;
      this.routeKey++;
    },
  },
  methods: {
    navclick() {
      this.$state.store.navbar.active = true;
    },
    routerPush(link) {
      this.$router.push(link);
    },
    windowClick(url) {
      window.open(url);
    },
  },
};
</script>

<style></style>
