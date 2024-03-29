<template>
  <v-navigation-drawer
    v-model="$state.store.navbar.active"
    app
    temporary
    :src="$state.store.botSettings.navBlur ? drawerBackImg : undefined"
  >
    <v-container
      :class="$state.store.botSettings.navBlur ? 'back-blur' : ' ' + ' my-5'"
    >
      <v-list-item three-line class="px-2">
        <v-list-item-content>
          <v-list-item-title
            class="point-cursor non-touch font-weight-bold"
            @click="routerPush('/about/me')"
          >
            Sudharshan TK
          </v-list-item-title>
          <v-list-item-subtitle class="non-touch font-weight-light">
            Chartered Accountant / Web Developer
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list class="text-left">
        <v-list-item-group>
          <v-divider class="ma-1" />
          <bottomSettings model="list" />
          <v-divider class="ma-1" />
          <v-list-item
            v-for="(nav, index) in navPaths"
            :key="index"
            @click="nav.outside ? windowClick(nav.link) : routerPush(nav.link)"
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
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header> Website Stats </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list-item-group>
              <v-tooltip
                v-for="(stats, index) in siteStats"
                :key="index"
                top
                transition="scroll-y-transition"
              >
                <template #activator="{ on, attrs }">
                  <v-list-item
                    v-bind="attrs"
                    @click="windowClick(stats.link)"
                    v-on="on"
                  >
                    <v-list-item-icon>
                      <v-icon small>{{ stats.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> {{ stats.name }} </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
                <span>{{ stats.tooltip }}</span>
              </v-tooltip>
            </v-list-item-group>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-navigation-drawer>
</template>
<script>
import authorData from '@t/authorData.json';
import bottomSettings from './bottom-settings.vue';

export default {
  components: {
    bottomSettings,
  },
  data: () => ({
    avatar: authorData.profilePicture,
    navPaths: [
      {
        icon: 'mdi-home',
        title: 'Home',
        subtitle: 'Home',
        link: '/',
      },
      {
        icon: 'mdi-information',
        title: 'About',
        subtitle: 'About Me',
        link: '/about/me',
      },
      {
        icon: 'mdi-folder-information',
        title: 'About this Project',
        subtitle: 'Know the Code, workings of this Website',
        link: '/about/project',
      },
      {
        icon: 'mdi-post',
        title: 'Blog',
        subtitle: 'My Personal Blog',
        outside: true,
        link: 'https://blog.sudharshan.dev',
      },
      {
        icon: 'mdi-notebook-multiple',
        title: 'Projects',
        subtitle: 'Currently Working Projects and Issues',
        link: '/projects',
      },
      {
        icon: 'mdi-camera',
        title: 'Gallery',
        subtitle: 'My Photography Skills',
        link: '/gallery',
      },
    ],
    siteStats: [
      {
        name: 'Bundle Stats',
        icon: 'mdi-bag-checked',
        link: '/stats/bundle-analyzer.json',
        tooltip: 'Website Bundle Statistics in JSON Data',
      },
      {
        name: 'Bundle Analysis',
        icon: 'mdi-bag-carry-on-check',
        link: '/stats/bundle-analyzer.html',
        tooltip: 'Visualization of Website Bundle Statistics',
      },
      {
        name: 'UI Stats',
        icon: 'mdi-database-check',
        link: '/stats/ui-stats.json',
        tooltip: 'Website UI Statistics in JSON Data',
      },
      {
        name: 'UI Analysis',
        icon: 'mdi-eye-check-outline',
        link: '/stats/ui-stats.html',
        tooltip: 'Visualization of Website Bundle Statistics',
      },
      {
        name: 'Size Analysis',
        icon: 'mdi-progress-check',
        link: '/stats/size-analysis.txt',
        tooltip: 'Size Analysis for this Website',
      },
      {
        name: 'Sitemap',
        icon: 'mdi-map-check-outline',
        link: '/sitemap.xml',
        tooltip: 'Sitemap of the Website',
      },
    ],
  }),
  computed: {
    drawerBackImg() {
      if (!this.$vuetify.theme.dark) {
        return 'https://i.ibb.co/bKsBjMj/download-force-true-w-2400.jpg';
      }
      return 'https://i.ibb.co/p3Tgrt6/download-force-true-w-1920.jpg';
    },
  },
  methods: {
    windowClick(url) {
      window.open(url);
    },
    routerPush(link) {
      this.$router.push(link);
    },
  },
};
</script>
<style></style>
