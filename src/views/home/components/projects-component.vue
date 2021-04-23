<template>
  <div class="column is-full">
    <v-row :class="ismobile ? 'ma-0' : 'ma-2'">
      <v-col cols="12" align="start" justify="start">
        <div
          id="home-projtitle"
          :class="
            'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
            ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
          "
          @click="$router.push('/projects')"
        >
          {{ title }}
          <v-icon>mdi-arrow-right-circle</v-icon>
        </div>
      </v-col>
      <v-col v-if="loading" cols="12">
        <v-row>
          <v-col v-for="n in ismobile ? 1 : 5" :key="n">
            <v-card>
              <v-skeleton-loader class="mx-auto" type="card" />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row v-if="!loading" class="mx-2 non-touch">
          <v-col
            v-for="(project, index) in projects"
            :key="index"
            class="mx-0 px-1"
            :cols="ismobile && 12"
          >
            <v-hover>
              <template #default="{ hover }">
                <v-card
                  :max-width="
                    ismobile
                      ? null
                      : (contextInfo.viewport.width -
                          contextInfo.viewport.width * 0.1) /
                        5
                  "
                >
                  <v-img contain :src="githubPhoto" />
                  <v-row justify="space-between" class="ma-0 pa-0">
                    <v-col class="ma-0 pa-0" cols="12">
                      <v-card-title class="text-overline ma-1 pa-1">
                        {{ project.name }}
                      </v-card-title>
                    </v-col>
                    <v-col cols="12">
                      <div class="caption grey--text">Description:</div>
                      <div class="text-subtitle-2">
                        {{ project.description }}
                      </div>
                    </v-col>
                    <v-col v-if="project.license" cols="12">
                      <div class="caption grey--text">
                        Licensed under
                        <span
                          class="primary--text point-cursor"
                          @click="gotoUrl(project.license.url)"
                        >
                          {{ project.license.name }}
                        </span>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="caption grey--text">Details:</div>
                      <div class="text-subtitle-2">
                        Created on
                        {{ project.created_at | moment('ddd of MMM, YY') }}
                      </div>
                      <div class="text-subtitle-2">
                        Last Commit on
                        {{ project.updated_at | moment('ddd of MMM, YY') }}
                      </div>
                    </v-col>
                    <v-col class="ma-0 pa-0" cols="12">
                      <v-col align="end">
                        <v-chip
                          class="text-right ma-1"
                          color="primary"
                          small
                          outlined
                          pill
                        >
                          <v-icon small left>mdi-language-javascript</v-icon>
                          {{ project.language }}
                        </v-chip>
                        <v-chip
                          class="text-right ma-1"
                          color="primary"
                          small
                          outlined
                          pill
                        >
                          <v-icon left small>mdi-source-branch</v-icon>
                          {{ project.default_branch }}
                        </v-chip>
                        <v-chip
                          class="text-right ma-1"
                          color="primary"
                          outlined
                          small
                          pill
                          @click="gotoUrl(project.html_url)"
                        >
                          <v-avatar size="6" left>
                            <v-img :src="project.owner.avatar_url" />
                          </v-avatar>
                          {{ project.owner.login }}
                        </v-chip>
                      </v-col>
                    </v-col>
                  </v-row>
                  <transition name="fade" mode="out-in">
                    <v-overlay
                      v-if="hover"
                      absolute
                      z-index="2"
                      opacity="0.4"
                      color="primary"
                      class="back-blur"
                    >
                      <v-row class="ma-1">
                        <v-col align="center" cols="12">
                          <v-tooltip top transition="slide-y-transition">
                            <template #activator="{ on }">
                              <v-chip
                                class="text-right ma-1"
                                color="primary"
                                pill
                                v-on="on"
                                @click="gotoUrl(project.stargazers_url)"
                              >
                                <v-icon left small>mdi-eye</v-icon>
                                {{ project.watchers }}
                              </v-chip>
                            </template>
                            <span>Watchers</span>
                          </v-tooltip>
                          <v-tooltip top transition="slide-y-transition">
                            <template #activator="{ on }">
                              <v-chip
                                class="text-right ma-1"
                                color="primary"
                                pill
                                v-on="on"
                                @click="gotoUrl(project.forks_url)"
                              >
                                <v-icon left small>mdi-source-fork</v-icon>
                                {{ project.forks }}
                              </v-chip>
                            </template>
                            <span>Forks</span>
                          </v-tooltip>
                          <v-tooltip top transition="slide-y-transition">
                            <template #activator="{ on }">
                              <v-chip
                                class="text-right ma-1"
                                color="primary"
                                pill
                                v-on="on"
                                @click="gotoUrl(project.stargazers_url)"
                              >
                                <v-icon left small>mdi-star</v-icon>
                                {{ project.stargazers_count }}
                              </v-chip>
                            </template>
                            <span>Stars</span>
                          </v-tooltip>
                        </v-col>
                        <v-col cols="12">
                          <div class="caption grey--text">Description:</div>
                          <div class="text-subtitle-2">
                            {{ project.description }}
                          </div>
                        </v-col>
                        <v-col class="my-0 py-0">
                          <v-row>
                            <v-col cols="12">
                              <v-btn
                                block
                                color="primary"
                                rounded
                                @click="$router.push('/projects')"
                              >
                                <v-icon small>mdi-folder-star</v-icon> Project
                                Breif
                              </v-btn>
                            </v-col>
                            <v-col cols="6">
                              <v-btn
                                small
                                block
                                rounded
                                color="primary"
                                @click="gotoUrl(project.homepage)"
                              >
                                <v-icon small>mdi-web</v-icon> Website
                              </v-btn>
                            </v-col>
                            <v-col cols="6">
                              <v-btn
                                small
                                block
                                rounded
                                color="primary"
                                @click="gotoUrl(project.git_url)"
                              >
                                <v-icon small>mdi-git</v-icon> Git
                              </v-btn>
                            </v-col>
                            <v-col cols="12">
                              <v-btn
                                block
                                rounded
                                color="primary"
                                @click="gotoUrl(project.html_url)"
                              >
                                <v-icon small>mdi-github</v-icon> on Github
                              </v-btn>
                            </v-col>
                            <v-col cols="6">
                              <v-btn
                                color="primary"
                                block
                                small
                                rounded
                                @click="gotoUrl(project.url)"
                              >
                                <v-icon small>mdi-webpack</v-icon> Api
                              </v-btn>
                            </v-col>
                            <v-col cols="6">
                              <v-btn
                                color="primary"
                                block
                                small
                                rounded
                                @click="gotoUrl(project.clone_url)"
                              >
                                <v-icon small>mdi-source-branch-sync</v-icon>
                                Clone
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-overlay>
                  </transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { projects } from '@p/resources/github';

export default {
  name: 'HomeProjectsComponent',
  props: {
    title: {
      type: String,
      default: ' ',
    },
    ismobile: {
      type: Boolean,
      default: false,
    },
    contextInfo: {
      type: Object,
      default: () => {},
    },
    gotoUrl: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    loading: true,
    user: 'tks18',
    githubPhoto:
      'https://i.ibb.co/C6Y6Rwt/6efb9bc5d143-article-190612-github-body-text.webp',
    projects: [],
  }),
  mounted() {
    this.fetchApis();
  },
  methods: {
    async getProjects() {
      const projectsData = await projects(this.ismobile, this.user);
      if (projectsData.success && projectsData.data != null) {
        this.projects = this.ismobile
          ? projectsData.data.slice(0, 2)
          : projectsData.data;
        this.loading = false;
      } else {
        this.$notify({
          group: 'main',
          type: 'error',
          duration: 5000,
          title: 'Projects Error',
          text:
            'Error While Getting Projects Data from the Github Server. Please Reload the Website to Get the Data',
          data: {
            loading: false,
            dark: true,
            type: 'Error Notification',
            buttons: [
              {
                text: 'Reload Now',
                onClick: () => {
                  this.$router.go();
                },
              },
            ],
          },
        });
        this.loading = false;
        this.projects = [];
      }
    },
    fetchApis() {
      this.getProjects();
    },
  },
};
</script>
