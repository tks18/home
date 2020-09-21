<template>
  <v-app-bar app flat collapse-on-scroll>
    <v-app-bar-nav-icon @click="navclick()"></v-app-bar-nav-icon>
    <v-tooltip bottom transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-toolbar-title
          v-bind="attrs"
          v-on="on"
          class="font-weight-bold non-touch point-cursor"
          v-ripple
        >
          Shan.tk 🤔😁✌
        </v-toolbar-title>
      </template>
      <span>Sudharshan TK</span>
    </v-tooltip>
    <v-spacer></v-spacer>
    <v-btn icon> <v-icon>mdi-github</v-icon> </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Nav-Bar',
  data: function () {
    return {};
  },
  methods: {
    navclick() {
      this.$state.navbar.key++;
      this.$state.navbar.active = true;
      this.$bus.$emit('nav', 'navigation');
    },
  },
};
</script>
<style></style>
