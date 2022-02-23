<template>
  <v-app-bar app dense flat collapse-on-scroll>
    <v-app-bar-nav-icon @click="navclick()" />
    <v-avatar
      size="38"
      class="mx-2 non-touch point-cursor"
      color="primary"
      @click="$router.push('/')"
    >
      <v-img :src="avatar" />
    </v-avatar>
    <v-tooltip bottom transition="slide-y-transition">
      <template #activator="{ on, attrs }">
        <v-toolbar-title
          v-ripple
          v-bind="attrs"
          class="font-weight-bold non-touch point-cursor"
          v-on="on"
          @click="routerPush('/')"
        >
          Shan.tk ✌{{ ismobile ? '' : ' | Chartered Accountant' }}
        </v-toolbar-title>
      </template>
      <span>Sudharshan TK</span>
    </v-tooltip>
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
export default {
  name: 'NavBar',
  props: {
    ismobile: {
      type: Boolean,
      default: () => {},
    },
  },
  data: () => ({
    github: {
      link: 'https://github.com/tks18',
      icon: 'mdi-github',
      title: "Shan.tk's Github Profile",
    },
    avatar: 'https://i.ibb.co/CWY7dSm/IMG-20220206-130734-Close-up.webp',
  }),
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
