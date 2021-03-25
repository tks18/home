<template>
  <div class="my-2 mx-2 mr-3">
    <div
      id="this-project-main-title"
      :class="
        (ismobile ? ' text-h5 ' : ' text-h4 ') +
        'text-center non-touch font-weight-bold text-capitalize'
      "
    >
      {{ animatedText.mainTitle }}
    </div>
    <div class="non-touch text-subtitle-2 darken-3 text-center">
      "Carve your name on hearts, not tombstones." Let you Know my Legacy. Lol
      xD 😜
    </div>
    <div class="mx-2 my-2">
      <v-row>
        <v-col class="non-touch" cols="12">
          <div
            id="this-project-details-title"
            :class="
              (ismobile ? ' text-h6 ' : ' text-h5 ') +
              'font-weight-bold mx-3 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light ' : ' underhover-dark ')
            "
          >
            {{ animatedText.detailsTitle }}
            <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col cols="12" class="mx-2 my-0 py-0">
          <v-row align="center" justify="center">
            <v-col v-if="!repo.details.loading" :cols="ismobile ? 12 : 5">
              <v-row>
                <v-col cols="12" :align="ismobile ? 'center' : 'right'">
                  <v-img :src="repo.details.data.img"></v-img>
                </v-col>
                <v-col align="center" cols="12">
                  <div class="heading my-2">
                    <v-btn
                      color="primary"
                      @click="gotourl(repo.details.data.homepage)"
                      class="mx-1 my-1"
                    >
                      <v-icon left>mdi-home</v-icon>
                      Home Page
                    </v-btn>
                    <v-btn
                      color="primary"
                      class="mx-1 my-1"
                      @click="gotourl(repo.details.data.git_url)"
                    >
                      <v-icon left>mdi-github</v-icon> Git
                    </v-btn>
                    <v-btn
                      color="primary"
                      class="mx-1 my-1"
                      @click="gotourl(repo.details.data.ssh_url)"
                    >
                      <v-icon left> mdi-git </v-icon> Git-SSH
                    </v-btn>
                    <v-btn
                      color="primary"
                      class="mx-1 my-1"
                      @click="gotourl(repo.details.data.clone_url)"
                    >
                      <v-icon left> mdi-digital-ocean </v-icon> Clone
                    </v-btn>
                    <v-btn
                      color="primary"
                      class="mx-1 my-1"
                      @click="gotourl(repo.details.data.svn_url)"
                    >
                      <v-icon left>mdi-microsoft-visual-studio-code</v-icon>
                      Source
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col
              v-if="!repo.details.loading"
              :cols="ismobile ? 12 : 6"
              align="left"
            >
              <div class="details non-touch">
                <div class="heading font-weight-bold my-1">
                  Name:
                  <span class="primary--text">{{
                    repo.details.data.name
                  }}</span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Fullname:
                  <span class="primary--text">{{
                    repo.details.data.full_name
                  }}</span>
                </div>
                <div class="heading font-weight-bold my-1">
                  <div>Description</div>
                  <div class="primary--text">
                    {{ repo.details.data.description }}
                  </div>
                </div>
                <div class="heading font-weight-bold my-1">
                  Project Source Code:
                  <span class="primary--text">
                    {{ repo.details.data.private ? 'Private' : 'Public' }}
                    <v-icon color="primary">mdi-web</v-icon>
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Maintainer:
                  <span class="primary--text">
                    <v-avatar size="20">
                      <v-img :src="repo.details.data.owner.avatar_url"></v-img>
                    </v-avatar>
                    {{ repo.details.data.owner.login }}
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Created at:
                  <span class="primary--text">
                    {{
                      repo.details.data.created_at
                        | moment('D,dddd of MMM, YYYY @ hh:mm a')
                    }}
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Production Updated at:
                  <span class="primary--text">
                    {{
                      repo.details.data.updated_at
                        | moment('D,dddd of MMM, YYYY @ hh:mm a')
                    }}
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Last Pushed at:
                  <span class="primary--text">
                    {{
                      repo.details.data.pushed_at
                        | moment('D,dddd of MMM, YYYY @ hh:mm a')
                    }}
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Repo Size:
                  <v-chip outlined small color="primary">
                    <v-icon left small> mdi-arrow-split-vertical </v-icon>
                    {{ Math.floor(repo.details.data.size / 8192) + ' mb' }}
                  </v-chip>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              align="center"
              v-if="repo.details.loading"
              class="mx-4"
            >
              <v-skeleton-loader type="card" width="400" height="300">
              </v-skeleton-loader>
            </v-col>
            <v-col cols="12" v-if="!repo.topics.loading" class="mx-4">
              <div class="heading" v-if="!repo.topics.loading">
                Project Topics:
                <div class="tags">
                  <v-chip-group column>
                    <v-chip
                      v-for="(topic, index) in repo.topics.data"
                      v-bind:key="index"
                      @click="openGhTopic(topic)"
                      color="primary"
                      outlined
                      small
                    >
                      {{ topic }}
                    </v-chip>
                  </v-chip-group>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              align="center"
              v-if="repo.topics.loading"
              class="mx-4"
            >
              <v-skeleton-loader type="card" width="400" height="300">
              </v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <v-row class="non-touch">
                <v-col cols="12">
                  <div
                    id="this-project-source-code"
                    :class="
                      (ismobile ? ' text-h6 ' : ' text-h5 ') +
                      'font-weight-bold mx-3 text-capitalize' +
                      ($vuetify.theme.dark
                        ? ' underhover-light '
                        : ' underhover-dark ')
                    "
                  >
                    {{ animatedText.sourceCode }}
                    <v-icon>mdi-arrow-right-circle</v-icon>
                  </div>
                </v-col>
                <v-col cols="12" class="mx-1">
                  <v-card
                    transition="slide-x-transition"
                    :loading="repo.contents.loading"
                    class="lighten-1"
                  >
                    <v-card-text
                      v-if="!repo.contents.loading"
                      class="text-caption"
                    >
                      <v-row>
                        <v-col cols="12" class="mx-6">
                          <v-row class="my-0 py-0" align="center">
                            <v-col
                              v-if="currentPath != '/'"
                              :cols="ismobile ? 2 : 1"
                            >
                              <v-btn @click="handleNavigation(true)" icon>
                                <v-icon>mdi-arrow-left</v-icon>
                              </v-btn>
                            </v-col>
                            <v-col
                              :cols="
                                currentPath != '/' ? (ismobile ? 10 : 11) : 12
                              "
                            >
                              <div
                                class="text-body-1 font-weight-light darken-1 breadcrumb"
                              >
                                <slide-y-transition>
                                  {{ currentPath }}
                                </slide-y-transition>
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12">
                          <v-list>
                            <v-list-item
                              v-for="(file, index) in repo.contents.data"
                              v-bind:key="index"
                              @click="handleNavigation(false, file)"
                            >
                              <v-list-item-icon
                                ><v-icon>{{
                                  file.type == 'file'
                                    ? 'mdi-file-outline'
                                    : 'mdi-folder'
                                }}</v-icon></v-list-item-icon
                              >
                              <v-list-item-title>
                                {{ file.name }}
                              </v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-text v-if="repo.contents.loading">
                      <v-row align="center" justify="center">
                        <v-col cols="12" align="center">
                          <v-progress-circular
                            color="primary"
                            indeterminate
                            size="50"
                          >
                          </v-progress-circular>
                        </v-col>
                        <v-col cols="12" align="center">
                          <div class="text-subtitle-1 my-2">
                            Loading files...
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { generateWordMaps } from '@p/wordmap';
import { tweenToObserver } from '@p/gsap';
import { ismobile } from '@p/helpers';
import { repoData, repoTopics, repoContents } from '@p/resources/github';
export default {
  metaInfo: function () {
    return {
      title: 'About This Project',
    };
  },
  data: function () {
    return {
      repo: {
        name: 'matte-portfolio',
        details: {
          loading: true,
          data: {},
        },
        topics: {
          loading: true,
          data: [],
        },
        contents: {
          loading: true,
          data: [],
        },
      },
      startPath: '/',
      currentPath: '/',
      historyState: [],
      animatedText: {
        mainTitle: '',
        detailsTitle: '',
        sourceCode: '',
      },
    };
  },
  methods: {
    async getRepoData() {
      const repo_data_resp = await repoData(this.repo.name);
      if (repo_data_resp.success && repo_data_resp.error == null) {
        let repoData = repo_data_resp.data;
        repoData['img'] = 'https://i.ibb.co/Y7BFDqN/shan-tk-1.png';
        this.$set(this.repo.details, 'data', repoData);
        this.$set(this.repo.details, 'loading', false);
      }
    },
    async getRepoTopics() {
      const repo_topics_resp = await repoTopics(this.repo.name);
      if (repo_topics_resp.success && repo_topics_resp.error == null) {
        this.$set(this.repo.topics, 'data', repo_topics_resp.topics.names);
        this.$set(this.repo.topics, 'loading', false);
      }
    },
    async getRepoContent(backtrigger, path) {
      const repo_contents_resp = await repoContents(this.repo.name, path);
      if (repo_contents_resp.success && repo_contents_resp.error == null) {
        if (!backtrigger) {
          this.historyState.push(this.currentPath);
        }
        this.currentPath = path;
        let sortedContents = this.$_.orderBy(
          repo_contents_resp.contents,
          ['type', 'name'],
          ['asc'],
        );
        this.$set(this.repo.contents, 'data', sortedContents);
        this.$set(this.repo.contents, 'loading', false);
      }
    },
    async handleNavigation(backtrigger, file) {
      if (backtrigger) {
        if (this.currentPath != '/') {
          this.$set(this.repo.contents, 'loading', true);
          let newPath = this.historyState.pop();
          console.log(this.historyState);
          this.getRepoContent(backtrigger, newPath);
        }
      } else if (file) {
        if (file.type == 'dir') {
          this.$set(this.repo.contents, 'loading', true);
          let newPath = this.startPath + file.path;
          this.getRepoContent(backtrigger, newPath);
        }
      } else {
        if (this.currentPath == '/') {
          this.$set(this.repo.contents, 'loading', true);
          let newPath = this.currentPath;
          this.getRepoContent(backtrigger, newPath);
        }
      }
    },
    gotourl(url) {
      window.open(url);
      return;
    },
    openGhTopic(topic) {
      let url = `https://github.com/search?q=${topic}`;
      window.open(url);
      return;
    },
  },
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  mounted() {
    tweenToObserver({
      vm: this,
      elem: '#this-project-main-title',
      emoji: false,
      arrayName: 'animatedText',
      map: generateWordMaps('About This Project'),
      arrayProperty: 'mainTitle',
    });
    tweenToObserver({
      vm: this,
      elem: '#this-project-details-title',
      emoji: false,
      arrayName: 'animatedText',
      map: generateWordMaps('Project Details'),
      arrayProperty: 'detailsTitle',
    });
    tweenToObserver({
      vm: this,
      elem: '#this-project-source-code',
      emoji: false,
      arrayName: 'animatedText',
      map: generateWordMaps('Source Code'),
      arrayProperty: 'sourceCode',
    });
    this.getRepoData();
    this.getRepoTopics();
    this.handleNavigation(false);
  },
};
</script>

<style></style>
