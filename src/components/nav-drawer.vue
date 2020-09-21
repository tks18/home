<template>
  <v-navigation-drawer
    v-bind:key="navBarKey"
    app
    temporary
    v-model="drawer"
    :src="drawerBackImg"
  >
    <v-container>
      <v-list-item three-line class="px-2">
        <v-list-item-avatar>
          <v-img :src="avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-left non-touch font-weight-medium">
            Sudharshan TK
          </v-list-item-title>
          <v-list-item-subtitle class="text-left non-touch font-weight-light">
            Web Developer/Aspiring Chartered Accountant
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-switch
        v-model="darkmode"
        @click="changeTheme"
        dense
        inset
        label="Dark Mode"
      ></v-switch>
      <v-list class="text-left">
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
              <v-list-item-subtitle>Home</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon> mdi-web </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> About </v-list-item-title>
              <v-list-item-subtitle>About</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: function () {
    return {
      drawer: false,
      avatar:
        'https://s.gravatar.com/avatar/c0ec2e063895760baa493c36d2d28387?s=400',
      darkmode: false,
      navBarKey: 0,
    };
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.navBarKey++;
    },
  },
  computed: {
    drawerBackImg() {
      if (!this.$vuetify.theme.dark) {
        return 'https://unsplash.com/photos/kkfBE9qBSxA/download?force=true&w=1920';
      } else {
        return 'https://unsplash.com/photos/IaVXvH_z2PY/download?force=true&w=1920';
      }
    },
  },
  mounted() {
    this.$bus.$on('nav', () => {
      if (this.$state.navbar.active) {
        this.drawer = true;
      } else {
        this.drawer = false;
      }
    });
  },
};
</script>
<style></style>
