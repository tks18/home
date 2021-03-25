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
        <v-col cols="12">
          <v-row class="non-touch">
            <div
              id="this-project-details-title"
              :class="
                (ismobile ? ' text-h6 ' : ' text-h5 ') +
                'font-weight-bold mx-3 text-capitalize' +
                ($vuetify.theme.dark
                  ? ' underhover-light '
                  : ' underhover-dark ')
              "
            >
              {{ animatedText.detailsTitle }}
              <v-icon>mdi-arrow-right-circle</v-icon>
            </div>
          </v-row>
        </v-col>
        <v-col cols="12" v-if="repoDetailsAvbl" class="mx-2">
          <v-row align="center" justify="center">
            <v-col :cols="ismobile ? 12 : 5">
              <v-row>
                <v-col cols="12" :align="ismobile ? 'center' : 'right'">
                  <v-img :src="repoDetails.img"></v-img>
                </v-col>
                <v-col align="center" cols="12">
                  <div class="heading my-2">
                    <v-btn
                      color="primary"
                      @click="gotourl(repoDetails.homepage)"
                      class="mx-1 my-1"
                    >
                      <v-icon left>mdi-home</v-icon>
                      Home Page
                    </v-btn>
                    <v-btn
                      color="primary"
                      class="mx-1 my-1"
                      @click="gotourl(repoDetails.git_url)"
                    >
                      <v-icon left>mdi-github</v-icon> Git
                    </v-btn>
                    <v-btn
                      color="primary"
                      class="mx-1 my-1"
                      @click="gotourl(repoDetails.ssh_url)"
                    >
                      <v-icon left> mdi-git </v-icon> Git-SSH
                    </v-btn>
                    <v-btn
                      color="primary"
                      class="mx-1 my-1"
                      @click="gotourl(repoDetails.clone_url)"
                    >
                      <v-icon left> mdi-digital-ocean </v-icon> Clone
                    </v-btn>
                    <v-btn
                      color="primary"
                      class="mx-1 my-1"
                      @click="gotourl(repoDetails.svn_url)"
                    >
                      <v-icon left>mdi-microsoft-visual-studio-code</v-icon>
                      Source
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col :cols="ismobile ? 12 : 6" align="left">
              <div class="details non-touch">
                <div class="heading font-weight-bold my-1">
                  Name:
                  <span class="primary--text">{{ repoDetails.name }}</span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Fullname:
                  <span class="primary--text">{{ repoDetails.full_name }}</span>
                </div>
                <div class="heading font-weight-bold my-1">
                  <div>Description</div>
                  <div class="primary--text">
                    {{ repoDetails.description }}
                  </div>
                </div>
                <div class="heading font-weight-bold my-1">
                  Project Source Code:
                  <span class="primary--text">
                    {{ repoDetails.private ? 'Private' : 'Public' }}
                    <v-icon color="primary">mdi-web</v-icon>
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Maintainer:
                  <span class="primary--text">
                    <v-avatar size="20">
                      <v-img :src="repoDetails.owner.avatar_url"></v-img>
                    </v-avatar>
                    {{ repoDetails.owner.login }}
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Created at:
                  <span class="primary--text">
                    {{
                      repoDetails.created_at
                        | moment('D,dddd of MMM, YYYY @ hh:mm a')
                    }}
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Production Updated at:
                  <span class="primary--text">
                    {{
                      repoDetails.updated_at
                        | moment('D,dddd of MMM, YYYY @ hh:mm a')
                    }}
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Last Pushed at:
                  <span class="primary--text">
                    {{
                      repoDetails.pushed_at
                        | moment('D,dddd of MMM, YYYY @ hh:mm a')
                    }}
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Repo Size:
                  <v-chip outlined color="primary">
                    <v-icon left small> mdi-arrow-split-vertical </v-icon>
                    {{ Math.floor(repoDetails.size / 8192) + ' mb' }}
                  </v-chip>
                </div>
              </div>
            </v-col>
            <v-col cols="12" v-if="repoDetailsAvbl" class="mx-4">
              <div class="heading" v-if="repoTopicsAvbl">
                Project Topics:
                <div class="tags">
                  <v-chip-group column>
                    <v-chip
                      v-for="(topic, index) in repoDetails.topics.names"
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
                <v-col v-if="repoContentsAvbl" cols="12" class="mx-1">
                  <v-card class="lighten-1">
                    <v-card-text class="text-caption">
                      <v-row>
                        <v-col cols="12" class="mx-6">
                          <div class="text-caption darken-1 breadcrumb">/</div>
                        </v-col>
                        <v-col cols="12">
                          <v-list>
                            <v-list-item
                              v-for="(file, index) in repoContents.sort()"
                              v-bind:key="index"
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
      repoName: 'matte-portfolio',
      repoDetails: {},
      repoDetailsAvbl: false,
      repoTopicsAvbl: false,
      repoContentsAvbl: false,
      repoContents: {},
      animatedText: {
        mainTitle: '',
        detailsTitle: '',
        sourceCode: '',
      },
    };
  },
  methods: {
    async getRepoData() {
      const repo_data_resp = await repoData(this.repoName);
      if (repo_data_resp.success && repo_data_resp.error == null) {
        this.repoDetails = repo_data_resp.data;
        this.repoDetails['img'] = 'https://i.ibb.co/Y7BFDqN/shan-tk-1.png';
        this.repoDetailsAvbl = true;
      }
    },
    async getRepoTopics() {
      const repo_topics_resp = await repoTopics(this.repoName);
      if (repo_topics_resp.success && repo_topics_resp.error == null) {
        this.repoDetails['topics'] = repo_topics_resp.topics;
        this.repoTopicsAvbl = true;
      }
    },
    async getRepoContent() {
      const repo_contents_resp = await repoContents(this.repoName, '/');
      console.log(repo_contents_resp);
      if (repo_contents_resp.success && repo_contents_resp.error == null) {
        this.repoContents = repo_contents_resp.contents;
        this.repoContentsAvbl = true;
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
    this.getRepoContent();
  },
};
</script>

<style></style>
