<template>
  <v-navigation-drawer app temporary v-model="drawer" :src="drawerBackImg">
    <v-container class="back-blur">
      <v-row align="center" justify="center">
        <v-avatar
          @click="routerPush('/about')"
          class="point-cursor non-touch"
          size="125"
        >
          <v-img :src="avatar"></v-img>
        </v-avatar>
      </v-row>
      <v-list-item three-line class="px-2">
        <v-list-item-content>
          <v-list-item-title
            @click="routerPush('/about')"
            class="text-center point-cursor non-touch font-weight-medium"
          >
            Sudharshan TK
          </v-list-item-title>
          <v-list-item-subtitle class="text-center non-touch font-weight-thin">
            (aka Shan.tk)
          </v-list-item-subtitle>
          <v-list-item-subtitle class="text-center non-touch font-weight-light">
            Web Developer/Aspiring Chartered Accountant
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list class="text-left">
        <v-list-item-group>
          <v-divider class="ma-1"> </v-divider>
          <bottomSettings />
          <v-divider class="ma-1"> </v-divider>
          <v-list-item
            v-for="(nav, index) in navPaths"
            v-bind:key="index"
            @click="routerPush(nav.link)"
          >
            <v-list-item-icon>
              <v-icon> {{ nav.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ nav.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>
<script>
import bottomSettings from './bottom-settings';
export default {
  components: {
    bottomSettings,
  },
  data: function () {
    return {
      drawer: false,
      avatar:
        'https://i.ibb.co/hRxTz1g/c0ec2e063895760baa493c36d2d28387-s-400.jpg',
      navPaths: [
        {
          icon: 'mdi-home',
          title: 'Home',
          subtitle: 'Home',
          link: '/',
        },
        {
          icon: 'mdi-blogger',
          title: 'Blog',
          subtitle: 'My Personal Blog',
          link: '/blog',
        },
        {
          icon: 'mdi-information',
          title: 'About',
          subtitle: 'About Me',
          link: '/about',
        },
        {
          icon: 'mdi-web',
          title: 'Careers',
          subtitle: 'Careers',
          link: '/careers',
        },
        {
          icon: 'mdi-google-photos',
          title: 'Gallery',
          subtitle: 'My Photography Skills',
          link: '/gallery',
        },
      ],
    };
  },
  methods: {
    windowClick(url) {
      window.open(url);
      return;
    },
    routerPush(link) {
      this.$router.push(link);
    },
  },
  computed: {
    drawerBackImg() {
      if (!this.$vuetify.theme.dark) {
        return 'https://i.ibb.co/bKsBjMj/download-force-true-w-2400.jpg';
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
  },
};
</script>
<style></style>
