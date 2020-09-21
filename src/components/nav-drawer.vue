<template>
  <v-navigation-drawer app temporary v-model="drawer" :src="drawerBackImg">
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
      <v-list class="text-left">
        <v-list-item-group>
          <v-list-item @click="changeTheme">
            <v-switch
              v-model="darkmode"
              dense
              inset
              :value="darkmode"
              label="Dark Mode"
            ></v-switch>
          </v-list-item>
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
        'https://i.ibb.co/hRxTz1g/c0ec2e063895760baa493c36d2d28387-s-400.jpg',
      darkmode: false,
    };
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(
        'themecache',
        JSON.stringify({ dark: this.$vuetify.theme.dark }),
      );
      this.darkmode = this.$vuetify.theme.dark;
    },
  },
  computed: {
    drawerBackImg() {
      if (!this.$vuetify.theme.dark) {
        return 'https://i.ibb.co/CW7SGhf/download-force-true-w-1920.jpg';
      } else {
        return 'https://i.ibb.co/p3Tgrt6/download-force-true-w-1920.jpg';
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
    var darkCache = JSON.parse(localStorage.getItem('themecache'));
    if (darkCache && darkCache != null) {
      this.darkmode = darkCache.dark;
      this.$vuetify.theme.dark = darkCache.dark;
    }
  },
};
</script>
<style></style>
