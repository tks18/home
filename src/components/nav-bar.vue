<template lang="html">
  <v-app-bar app dense flat collapse-on-scroll>
    <v-app-bar-nav-icon @click="navclick()"></v-app-bar-nav-icon>
    <v-avatar
      @click="$router.push('/')"
      size="38"
      class="mx-2 non-touch point-cursor"
      color="primary"
    >
      <v-img :src="avatar"></v-img>
    </v-avatar>
    <v-tooltip bottom transition="slide-y-transition">
      <template lang="html" v-slot:activator="{ on, attrs }">
        <v-toolbar-title
          v-bind="attrs"
          v-on="on"
          @click="routerPush('/')"
          class="font-weight-bold non-touch point-cursor"
          v-ripple
        >
          Shan.tk ✌
        </v-toolbar-title>
      </template>
      <span>Sudharshan TK</span>
    </v-tooltip>
    <v-spacer></v-spacer>
    <v-tooltip bottom transition="slide-y-transition">
      <template lang="html" v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon @click="windowClick(github.link)">
          <v-icon color="primary">{{ github.icon }}</v-icon>
        </v-btn>
      </template>
      <span>{{ github.title }}</span>
    </v-tooltip>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Nav-Bar',
  data: function () {
    return {
      github: {
        link: 'https://github.com/tks18',
        icon: 'mdi-github',
        title: "Shan.tk's Github Profile",
      },
      avatar: 'https://i.ibb.co/9YwxPwZ/IMG-20191218-222419-347.webp',
    };
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
      return;
    },
  },
};
</script>
<style></style>
