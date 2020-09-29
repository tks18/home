<template>
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
      <template v-slot:activator="{ on, attrs }">
        <v-toolbar-title
          v-bind="attrs"
          v-on="on"
          @click="routerPush('/')"
          class="font-weight-bold non-touch point-cursor"
          v-ripple
        >
          Shan.tk 🤔😁✌
        </v-toolbar-title>
      </template>
      <span>Sudharshan TK</span>
    </v-tooltip>
    <v-spacer></v-spacer>
    <v-tooltip bottom transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
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
      avatar:
        'https://i.ibb.co/hRxTz1g/c0ec2e063895760baa493c36d2d28387-s-400.jpg',
    };
  },
  methods: {
    navclick() {
      this.$state.navbar.key++;
      this.$state.navbar.active = true;
      this.$bus.$emit('nav', 'navigation');
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
