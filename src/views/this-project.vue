<template lang="html">
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
    <v-row align="center">
      <v-col cols="12" align="center" justify="center">
        <div class="text-overline">Select Code Base</div>
        <v-btn v-if="repo.details.loading" color="primary" loading> </v-btn>
        <v-btn-toggle
          v-if="!repo.details.loading"
          mandatory
          v-model="code_base_toggle"
        >
          <v-btn
            color="primary"
            v-for="(repo, index) in repos"
            v-bind:key="index"
            @click="code_base_change(repo.repo)"
          >
            {{ repo.title }}
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
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
                  <div>Description:</div>
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
                        | moment('D,dddd of MMM, YYYY @ HH:MM')
                    }}
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Last Pushed at:
                  <span class="primary--text">
                    {{
                      repo.details.data.pushed_at
                        | moment('D,dddd of MMM, YYYY @ HH:MM')
                    }}
                  </span>
                </div>
                <div class="heading font-weight-bold my-1">
                  Repo Size:
                  <v-chip outlined small color="primary">
                    <v-icon left small> mdi-arrow-split-vertical </v-icon>
                    {{ $_.round(repo.details.data.size / 8192, 2) + ' mb' }}
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
              <v-skeleton-loader
                type="card"
                class="mx-auto"
                :width="ismobile ? 'auto' : 400"
              >
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
              <v-skeleton-loader
                type="card"
                class="mx-auto"
                :width="ismobile ? 'auto' : 400"
              >
              </v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <v-row class="non-touch" align="center">
                <v-col :cols="ismobile ? 12 : 8" align="left">
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
                <v-col
                  :cols="ismobile ? 12 : 4"
                  :align="ismobile ? 'center' : 'right'"
                  v-if="!repo.branches.loading"
                >
                  <div v-if="ismobile" class="text-caption">Branches</div>
                  <v-btn-toggle v-model="branch_toggle" mandatory>
                    <v-btn
                      color="primary"
                      v-for="(branch, index) in repo.branches.data"
                      v-bind:key="index"
                      @click="branch_change(branch)"
                      small
                    >
                      {{ branch.name }}
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
                <v-col v-if="repo.commits.data.length > 0" cols="12">
                  <v-alert
                    transition="slide-y-transition"
                    border="left"
                    dense
                    color="primary"
                    :class="ismobile ? 'mx-2' : 'mx-10'"
                  >
                    <v-progress-linear
                      v-if="repo.commits.loading"
                      :color="$vuetify.theme.dark ? 'white' : 'black'"
                      indeterminate
                    ></v-progress-linear>
                    <v-row
                      v-if="!repo.commits.loading"
                      align="center"
                      class="my-0 py-0"
                    >
                      <v-col v-if="!ismobile" align="center">
                        <v-icon class="mx-1">
                          mdi-code-less-than-or-equal
                        </v-icon>
                      </v-col>
                      <v-col class="my-0 py-0 grow" :cols="ismobile ? 12 : 11">
                        <v-row align="center" class="my-0 py-0">
                          <v-col
                            :cols="ismobile ? 12 : 10"
                            class="point-cursor"
                            @click="gotourl(repo.commits.data[0].html_url)"
                          >
                            <span class="font-weight-bold">
                              Latest Commit:
                            </span>
                            {{ '  ' + repo.commits.data[0].commit.message }}
                            <span>
                              {{
                                repo.commits.data[0].commit.committer.date
                                  | moment('...on DD, MMM of YYYY')
                              }}
                            </span>
                          </v-col>
                          <v-col
                            class="shrink"
                            :cols="ismobile ? 12 : 2"
                            :align="ismobile ? 'center' : 'right'"
                          >
                            <v-tooltip top transition="slide-y-transition">
                              <template
                                lang="html"
                                v-slot:activator="{ on, attrs }"
                              >
                                <v-btn
                                  icon
                                  v-on="on"
                                  v-bind="attrs"
                                  @click="
                                    gotourl(repo.commits.data[0].comments_url)
                                  "
                                >
                                  <v-icon>mdi-api</v-icon>
                                </v-btn>
                              </template>
                              <span> Go to Comments API </span>
                            </v-tooltip>
                            <v-tooltip top transition="slide-y-transition">
                              <template
                                lang="html"
                                v-slot:activator="{ on, attrs }"
                              >
                                <v-btn
                                  @click="
                                    $vuetify.goTo('#this-project-timeline')
                                  "
                                  v-on="on"
                                  v-bind="attrs"
                                  icon
                                >
                                  <v-icon>mdi-plus</v-icon>
                                </v-btn>
                              </template>
                              <span>More Commits</span>
                            </v-tooltip>
                            <v-tooltip top transition="slide-y-transition">
                              <template
                                lang="html"
                                v-slot:activator="{ on, attrs }"
                              >
                                <v-btn
                                  v-on="on"
                                  @click="
                                    gotourl(repo.commits.data[0].html_url)
                                  "
                                  v-bind="attrs"
                                  icon
                                >
                                  <v-icon>mdi-xml</v-icon>
                                </v-btn>
                              </template>
                              <span>Changelog</span>
                            </v-tooltip>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-alert>
                </v-col>
                <v-col cols="12" class="mx-1">
                  <v-card
                    id="this-project-source-code-content"
                    transition="slide-x-transition"
                    :loading="repo.contents.loading"
                    class="lighten-1"
                  >
                    <v-card-text
                      v-if="!repo.contents.loading && !file_view"
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
                              <v-slide-y-transition>
                                <div
                                  class="text-body-1 d-inline-block text-truncate font-weight-light darken-1 breadcrumb"
                                >
                                  {{ currentPath }}
                                </div>
                              </v-slide-y-transition>
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
                    <v-card-text
                      v-if="!repo.contents.loading && file_view"
                      class="text-caption"
                    >
                      <v-row class="my-0 py-0">
                        <v-col cols="12" class="my-0 py-0">
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
                              <v-slide-y-transition>
                                <div
                                  class="text-body-1 d-inline-block text-truncate font-weight-light darken-1 breadcrumb"
                                >
                                  {{ currentPath }}
                                </div>
                              </v-slide-y-transition>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12" class="my-0 py-0">
                          <v-row class="my-0 py-0">
                            <v-col cols="12" class="my-0 mx-1 py-0">
                              <v-row class="my-0 py-0" align="center">
                                <v-col
                                  :cols="ismobile ? 12 : 8"
                                  align="left"
                                  class="d-inline-block text-truncate"
                                >
                                  <div
                                    class="text-subtitle-1 mx-2 font-weight-bold"
                                  >
                                    {{
                                      this.repo.name + '/' + current_file.path
                                    }}
                                  </div>
                                </v-col>
                                <v-col
                                  :cols="ismobile ? 12 : 4"
                                  :align="ismobile ? 'center' : 'right'"
                                >
                                  <v-btn
                                    small
                                    @click="open_raw_code(current_file.path)"
                                    icon
                                    color="primary"
                                    class="mx-1"
                                    ><v-icon>mdi-download</v-icon></v-btn
                                  >
                                  <v-btn
                                    small
                                    @click="
                                      copy_content_code(
                                        current_file.decoded_content_original,
                                      )
                                    "
                                    icon
                                    color="primary"
                                    class="mx-1"
                                    ><v-icon>mdi-content-copy</v-icon></v-btn
                                  >
                                  <v-btn
                                    icon
                                    @click="open_gh_path(current_file.path)"
                                    color="primary"
                                    class="mx-1"
                                    small
                                    ><v-icon>mdi-xml</v-icon></v-btn
                                  >
                                </v-col>
                              </v-row>
                            </v-col>
                            <v-col cols="12" class="my-0 mx-1 py-0">
                              <v-sheet
                                outlined
                                :class="'code-viewer touchable my-0 px-3 py-3 mx-0'"
                                :max-height="ismobile ? 700 : 650"
                                rounded
                                elevation="13"
                                v-html="current_file.decoded_content_display"
                              ></v-sheet>
                            </v-col>
                          </v-row>
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
        <v-col cols="12">
          <v-row class="non-touch" align="center">
            <v-col cols="12" align="left">
              <div
                id="this-project-timeline"
                :class="
                  (ismobile ? ' text-h6 ' : ' text-h5 ') +
                  'font-weight-bold mx-3 text-capitalize' +
                  ($vuetify.theme.dark
                    ? ' underhover-light '
                    : ' underhover-dark ')
                "
              >
                {{ animatedText.timeline }}
                <v-icon>mdi-arrow-right-circle</v-icon>
              </div>
            </v-col>
            <v-col cols="12" :align="!repo.commits.loading ? 'left' : 'center'">
              <v-progress-circular
                v-if="repo.commits.loading"
                indeterminate
                color="primary"
                size="50"
              ></v-progress-circular>
              <v-timeline
                v-if="!repo.commits.loading"
                align-top
                :dense="$vuetify.breakpoint.smAndDown"
              >
                <v-timeline-item
                  v-for="(commit, index) in repo.commits.data.slice(
                    0,
                    repo.commits.slicer,
                  )"
                  fill-dot
                  :class="
                    ismobile
                      ? 'text-left'
                      : index % 2 == 0
                      ? 'text-left'
                      : 'text-right'
                  "
                  v-bind:key="index"
                >
                  <template lang="html" v-slot:icon>
                    <v-avatar size="50">
                      <v-icon> mdi-calendar </v-icon>
                    </v-avatar>
                  </template>
                  <template lang="html" v-if="!ismobile" v-slot:opposite>
                    <div class="text-overline">
                      <div>
                        {{ repo.name }}
                      </div>
                      <div v-if="index % 2 == 0">
                        by {{ commit.author.login }}
                        <v-avatar size="20">
                          <v-img :src="commit.author.avatar_url"></v-img>
                        </v-avatar>
                      </div>
                      <div v-else>
                        <v-avatar size="20">
                          <v-img :src="commit.author.avatar_url"></v-img>
                        </v-avatar>
                        {{ commit.author.login }} by
                      </div>
                    </div>
                  </template>
                  <v-card>
                    <v-card-subtitle>
                      {{
                        commit.commit.committer.date
                          | moment('DD, MMMM of YY @ hh:mm a')
                      }}
                    </v-card-subtitle>
                    <v-card-text class="code-viewer">
                      <v-row>
                        <v-col cols="12">
                          <v-sheet
                            outlined
                            class="code-viewer touchable py-2 px-2"
                            max-height="300"
                            rounded
                            elevation="13"
                            v-html="pre_format_text(commit.commit.message)"
                          ></v-sheet>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer
                        v-if="ismobile ? false : index % 2 == 0 ? false : true"
                      ></v-spacer>
                      <v-btn icon color="primary">
                        <v-icon>mdi-github</v-icon>
                      </v-btn>
                      <v-btn icon color="primary">
                        <v-icon>mdi-xml</v-icon>
                      </v-btn>
                      <v-btn icon color="primary">
                        <v-icon>mdi-microsoft-visual-studio-code</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-timeline-item>
                <v-timeline-item v-if="repo.commits.slicer > 5" large>
                  <template lang="html" v-slot:icon>
                    <v-tooltip left transition="slide-x-transition">
                      <template lang="html" v-slot:activator="{ on, attrs }">
                        <v-btn
                          @click="load_more_commits(true)"
                          fab
                          v-on="on"
                          color="primary"
                          v-bind="attrs"
                        >
                          <v-icon large>mdi-minus</v-icon>
                        </v-btn>
                      </template>
                      <span>Minimize</span>
                    </v-tooltip>
                  </template>
                </v-timeline-item>
                <v-timeline-item
                  v-if="repo.commits.slicer != repo.commits.slicer_length"
                  large
                >
                  <template lang="html" v-slot:icon>
                    <v-tooltip right transition="slide-x-transition">
                      <template lang="html" v-slot:activator="{ on, attrs }">
                        <v-btn
                          @click="load_more_commits()"
                          fab
                          v-on="on"
                          color="primary"
                          v-bind="attrs"
                        >
                          <v-icon large>mdi-plus</v-icon>
                        </v-btn>
                      </template>
                      <span>Load More</span>
                    </v-tooltip>
                  </template>
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="text-overline white--text">
          <render-markdown
            v-if="!repo.readme.loading"
            :content="repo.readme.data"
          ></render-markdown>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { generateWordMaps } from '@p/wordmap';
import { tweenToObserver } from '@p/gsap';
import { ismobile, generate_code_editor, pre_format_text } from '@p/helpers';
import {
  repoData,
  repoTopics,
  repoCommits,
  repoContents,
  repoBranches,
} from '@p/resources/github';
import renderMd from '@c/render-markdown';
export default {
  metaInfo: function () {
    return {
      title: 'About This Project',
    };
  },
  components: {
    'render-markdown': renderMd,
  },
  data: function () {
    return {
      user: 'tks18',
      repo: {
        name: 'matte-portfolio',
        details: {
          loading: true,
          data: {},
        },
        branches: {
          loading: true,
          data: {},
        },
        commits: {
          loading: true,
          page: 1,
          nos: 30,
          slicer: 5,
          slicer_length: 0,
          data: [],
        },
        topics: {
          loading: true,
          data: [],
        },
        contents: {
          loading: true,
          data: [],
        },
        readme: {
          loading: true,
          data: '',
        },
      },
      branch_toggle: 0,
      code_base_toggle: 0,
      current_branch: {},
      pre_format_text: pre_format_text,
      file_view: false,
      current_file: {},
      startPath: '/',
      currentPath: '/',
      historyState: [],
      animatedText: {
        mainTitle: '',
        detailsTitle: '',
        sourceCode: '',
        timeline: '',
      },
    };
  },
  methods: {
    async getRepoData() {
      this.$set(this.repo.details, 'loading', true);
      const repo_data_resp = await repoData(this.user, this.repo.name);
      if (repo_data_resp.success && repo_data_resp.error == null) {
        let repoData = repo_data_resp.data;
        if (this.repo.name == 'matte-portfolio') {
          repoData['img'] = 'https://i.ibb.co/Y7BFDqN/shan-tk-1.png';
        } else {
          repoData['img'] = 'https://i.ibb.co/w7jfhfy/image.webp';
        }
        this.$set(this.repo.details, 'data', repoData);
        this.$set(this.repo.details, 'loading', false);
      }
    },
    async getRepoTopics() {
      this.$set(this.repo.topics, 'loading', true);
      const repo_topics_resp = await repoTopics(this.user, this.repo.name);
      if (repo_topics_resp.success && repo_topics_resp.error == null) {
        this.$set(this.repo.topics, 'data', repo_topics_resp.topics.names);
        this.$set(this.repo.topics, 'loading', false);
      }
    },
    async getRepoCommits(reset) {
      this.$set(this.repo.commits, 'loading', true);
      const repo_commits_resp = await repoCommits(
        this.user,
        this.repo.name,
        this.current_branch.name,
        this.repo.commits.nos,
        this.repo.commits.page,
      );
      let new_commit_array = [];
      if (repo_commits_resp.success && repo_commits_resp.commits != null) {
        new_commit_array = reset
          ? [].concat(repo_commits_resp.commits)
          : this.repo.commits.data.concat(repo_commits_resp.commits);
        this.$set(this.repo.commits, 'slicer_length', new_commit_array.length);
        this.$set(this.repo.commits, 'data', new_commit_array);
        !reset && this.load_more_commits(false);
        this.$set(this.repo.commits, 'loading', false);
      }
    },
    async getRepoBranches() {
      this.$set(this.repo.branches, 'loading', true);
      const repo_branches_resp = await repoBranches(this.user, this.repo.name);
      if (repo_branches_resp.success && repo_branches_resp.error == null) {
        let branches = repo_branches_resp.branches;
        this.current_branch = branches.filter((branch) => {
          return branch.name == 'master';
        })[0];
        this.branch_toggle = branches.findIndex(
          (branch) => branch.name == 'master',
        );
        this.$set(this.repo.branches, 'data', repo_branches_resp.branches);
        this.$set(this.repo.branches, 'loading', false);
      }
    },
    async getRepoContent(backtrigger, path, branch) {
      this.$set(this.repo.contents, 'loading', true);
      const repo_contents_resp = await repoContents(
        this.user,
        this.repo.name,
        path,
        branch,
      );
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
        this.render_markdown(branch);
        this.$set(this.repo.contents, 'loading', false);
      }
    },
    async render_markdown(branch) {
      for (let file of this.repo.contents.data) {
        if (file.name.toLowerCase() == 'readme.md') {
          this.$set(this.repo.readme, 'loading', true);
          let path = this.startPath + file.path;
          const file_contents = await repoContents(
            this.user,
            this.repo.name,
            path,
            branch,
          );
          if (file_contents.success && file_contents.error == null) {
            let decoded_text = atob(file_contents.contents.content);
            this.$set(this.repo.readme, 'data', decoded_text);
            this.$set(this.repo.readme, 'loading', false);
          }
        }
      }
    },
    async getFileContents(file, branch) {
      if (file.type == 'file') {
        this.$set(this.repo.contents, 'loading', true);
        this.$vuetify.goTo('#this-project-source-code-content');
        let path = this.startPath + file.path;
        const file_contents = await repoContents(
          this.user,
          this.repo.name,
          path,
          branch,
        );
        if (file_contents.success && file_contents.error == null) {
          this.current_file = file_contents.contents;
          let decoded_text = atob(this.current_file.content);
          let formatted_content = generate_code_editor(decoded_text);
          this.current_file['decoded_content_display'] =
            formatted_content.content;
          this.current_file['total_lines'] = formatted_content.total_lines;
          this.historyState.push(this.currentPath);
          this.currentPath = file.path;
          this.$set(this.repo.contents, 'loading', false);
          this.file_view = true;
        }
      }
    },
    async handleNavigation(backtrigger, file) {
      if (backtrigger) {
        if (this.currentPath != '/') {
          this.$vuetify.goTo('#this-project-source-code-content');
          this.$set(this.repo.contents, 'loading', true);
          let newPath = this.historyState.pop();
          this.getRepoContent(backtrigger, newPath, this.current_branch.name);
          this.file_view = false;
        }
      } else if (file) {
        if (file.type == 'dir') {
          this.$vuetify.goTo('#this-project-source-code-content');
          this.$set(this.repo.contents, 'loading', true);
          let newPath = this.startPath + file.path;
          this.getRepoContent(backtrigger, newPath, this.current_branch.name);
        } else if (file.type == 'file') {
          this.getFileContents(file, this.current_branch.name);
        }
      } else {
        if (this.currentPath == '/') {
          this.$set(this.repo.contents, 'loading', true);
          let newPath = this.currentPath;
          this.getRepoContent(backtrigger, newPath, this.current_branch.name);
        }
      }
    },
    copy_content_code(content) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          this.$notify({
            group: 'main',
            type: 'success',
            duration: 5000,
            title: 'Code Copied',
            text: this.current_file.path + ' Has been Copied to Clipboard.',
            data: {
              loading: false,
              dark: true,
              type: 'Normal Notification',
            },
          });
        })
        .catch((e) => {
          this.$notify({
            group: 'main',
            type: 'success',
            duration: 5000,
            title: 'Code Copied',
            text: 'Error Copying the code: ' + e,
            data: {
              loading: false,
              dark: false,
              type: 'Error Notification',
            },
          });
        });
    },
    load_more_commits(revert) {
      if (revert) {
        this.$vuetify.goTo('#this-project-timeline');
        this.$set(this.repo.commits, 'slicer', 5);
      } else {
        let length = this.repo.commits.slicer_length;
        let current_length = this.repo.commits.slicer;
        let existing_page = this.repo.commits.page;
        if (length - current_length < 5) {
          let extended_length = current_length + (length - current_length);
          this.$set(this.repo.commits, 'slicer', extended_length);
          this.$set(this.repo.commits, 'page', existing_page + 1);
        } else {
          this.$set(this.repo.commits, 'slicer', current_length + 5);
          let new_length = this.repo.commits.slicer_length;
          let new_slicer = this.repo.commits.slicer;
          if (new_length - new_slicer < 5) {
            this.$set(this.repo.commits, 'page', existing_page + 1);
            this.getRepoCommits(false);
          }
        }
      }
    },
    branch_change(branch) {
      this.$set(this.repo.contents, 'loading', true);
      this.current_branch = branch;
      this.currentPath = '/';
      this.current_file = {};
      this.file_view = false;
      this.handleNavigation(false);
      this.$set(this.repo.commits, 'slicer', 5);
      this.getRepoCommits(true);
      this.$vuetify.goTo('#this-project-source-code-content');
    },
    code_base_change(name) {
      this.repo.name = name;
      this.currentPath = '/';
      this.current_file = {};
      this.file_view = false;
      this.$set(this.repo.commits, 'slicer', 5);
      this.do_repo_stuffs();
    },
    open_raw_code(file_path) {
      let base_url =
        'https://raw.githubusercontent.com/tks18/' + this.repo.name + '/';
      let branch = this.current_branch.name;
      let open_url = base_url + branch + '/' + file_path;
      this.gotourl(open_url);
    },
    open_gh_path(file_path) {
      let base_url = 'https://github.com/tks18/' + this.repo.name + '/blob/';
      let branch = this.current_branch.name;
      let open_url = base_url + branch + '/' + file_path;
      this.gotourl(open_url);
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
    async do_repo_stuffs() {
      await this.getRepoBranches();
      this.getRepoData();
      this.getRepoCommits(true);
      this.getRepoTopics();
      this.handleNavigation(false);
    },
  },
  computed: {
    ismobile() {
      return ismobile();
    },
    repos() {
      return [
        {
          title: 'Frontend',
          repo: 'matte-portfolio',
        },
        {
          title: 'Backend',
          repo: 'portfolio-backend',
        },
        {
          title: 'Backend UI',
          repo: 'portfolio-backend-ui',
        },
      ];
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
    tweenToObserver({
      vm: this,
      elem: '#this-project-timeline',
      emoji: false,
      arrayName: 'animatedText',
      map: generateWordMaps('Commit Timeline'),
      arrayProperty: 'timeline',
    });
    this.do_repo_stuffs();
  },
};
</script>

<style></style>
