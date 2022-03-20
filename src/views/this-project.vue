<template>
  <!-- eslint-disable vue/no-v-html -->
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
    <v-row align="center">
      <v-col cols="12" align="center" justify="center">
        <div class="text-overline">Select Code Base</div>
        <v-btn v-if="repo.details.loading" color="primary" loading />
        <v-btn-toggle
          v-if="!repo.details.loading"
          v-model="code_base_toggle"
          mandatory
        >
          <v-btn
            v-for="(code_base, index) in repos"
            :key="index"
            color="primary"
            @click="code_base_change(code_base.repo)"
          >
            {{ code_base.title }}
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
                  <v-img :src="repo.details.data.img" />
                </v-col>
                <v-col align="center" cols="12">
                  <div class="heading my-2">
                    <v-btn
                      color="primary"
                      class="mx-1 my-1"
                      @click="gotourl(repo.details.data.homepage)"
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
                      <v-img :src="repo.details.data.owner.avatar_url" />
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
                    {{
                      $lodash.round(repo.details.data.size / 8192, 2) + ' mb'
                    }}
                  </v-chip>
                </div>
              </div>
            </v-col>
            <v-col
              v-if="repo.details.loading"
              cols="12"
              align="center"
              class="mx-4"
            >
              <v-skeleton-loader
                type="card"
                class="mx-auto"
                :width="ismobile ? 'auto' : 400"
              />
            </v-col>
            <v-col v-if="!repo.topics.loading" cols="12" class="mx-4">
              <div v-if="!repo.topics.loading" class="heading">
                Project Topics:
                <div class="tags">
                  <v-chip-group column>
                    <v-chip
                      v-for="(topic, index) in repo.topics.data"
                      :key="index"
                      color="primary"
                      outlined
                      small
                      @click="openGhTopic(topic)"
                    >
                      {{ topic }}
                    </v-chip>
                  </v-chip-group>
                </div>
              </div>
            </v-col>
            <v-col
              v-if="repo.topics.loading"
              cols="12"
              align="center"
              class="mx-4"
            >
              <v-skeleton-loader
                type="card"
                class="mx-auto"
                :width="ismobile ? 'auto' : 400"
              />
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
                  v-if="!repo.branches.loading"
                  :cols="ismobile ? 12 : 4"
                  :align="ismobile ? 'center' : 'right'"
                >
                  <div v-if="ismobile" class="text-caption">Branches</div>
                  <v-btn-toggle v-model="branch_toggle" mandatory>
                    <v-btn
                      v-for="(branch, index) in repo.branches.data"
                      :key="index"
                      color="primary"
                      small
                      @click="branch_change(branch)"
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
                    />
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
                              <template #activator="{ on, attrs }">
                                <v-btn
                                  icon
                                  v-bind="attrs"
                                  v-on="on"
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
                              <template #activator="{ on, attrs }">
                                <v-btn
                                  v-bind="attrs"
                                  icon
                                  @click="
                                    $vuetify.goTo('#this-project-timeline')
                                  "
                                  v-on="on"
                                >
                                  <v-icon>mdi-plus</v-icon>
                                </v-btn>
                              </template>
                              <span>More Commits</span>
                            </v-tooltip>
                            <v-tooltip top transition="slide-y-transition">
                              <template #activator="{ on, attrs }">
                                <v-btn
                                  v-bind="attrs"
                                  icon
                                  v-on="on"
                                  @click="
                                    gotourl(repo.commits.data[0].html_url)
                                  "
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
                              <v-btn icon @click="handleNavigation(true)">
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
                              :key="index"
                              @click="handleNavigation(false, file)"
                            >
                              <v-list-item-icon>
                                <v-icon>
                                  {{
                                    file.type == 'file'
                                      ? 'mdi-file-outline'
                                      : 'mdi-folder'
                                  }}
                                </v-icon>
                              </v-list-item-icon>
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
                              <v-btn icon @click="handleNavigation(true)">
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
                                    {{ repo.name + '/' + currentFile.path }}
                                  </div>
                                </v-col>
                                <v-col
                                  :cols="ismobile ? 12 : 4"
                                  :align="ismobile ? 'center' : 'right'"
                                >
                                  <v-btn
                                    small
                                    icon
                                    color="primary"
                                    class="mx-1"
                                    @click="open_raw_code(currentFile.path)"
                                  >
                                    <v-icon>mdi-download</v-icon>
                                  </v-btn>
                                  <v-btn
                                    small
                                    icon
                                    color="primary"
                                    class="mx-1"
                                    @click="
                                      copy_content_code(
                                        currentFile.decoded_content_original,
                                      )
                                    "
                                  >
                                    <v-icon>mdi-content-copy</v-icon>
                                  </v-btn>
                                  <v-btn
                                    icon
                                    color="primary"
                                    class="mx-1"
                                    small
                                    @click="open_gh_path(currentFile.path)"
                                  >
                                    <v-icon>mdi-xml</v-icon>
                                  </v-btn>
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
                                v-html="currentFile.decoded_content_display"
                              />
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
                          />
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
              />
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
                  :key="index"
                  fill-dot
                  :class="
                    ismobile
                      ? 'text-left'
                      : index % 2 == 0
                      ? 'text-left'
                      : 'text-right'
                  "
                >
                  <template #icon>
                    <v-avatar size="50">
                      <v-icon> mdi-calendar </v-icon>
                    </v-avatar>
                  </template>
                  <template v-if="!ismobile" #opposite>
                    <div class="text-overline">
                      <div>
                        {{ repo.name }}
                      </div>
                      <div v-if="index % 2 == 0">
                        by {{ commit.author.login }}
                        <v-avatar size="20">
                          <v-img :src="commit.author.avatar_url" />
                        </v-avatar>
                      </div>
                      <div v-else>
                        <v-avatar size="20">
                          <v-img :src="commit.author.avatar_url" />
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
                            v-html="preFormatText(commit.commit.message)"
                          />
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer
                        v-if="ismobile ? false : index % 2 == 0 ? false : true"
                      />
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
                  <template #icon>
                    <v-tooltip left transition="slide-x-transition">
                      <template #activator="{ on, attrs }">
                        <v-btn
                          fab
                          color="primary"
                          v-bind="attrs"
                          @click="loadMoreCommits(true)"
                          v-on="on"
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
                  <template #icon>
                    <v-tooltip right transition="slide-x-transition">
                      <template #activator="{ on, attrs }">
                        <v-btn
                          fab
                          color="primary"
                          v-bind="attrs"
                          @click="loadMoreCommits()"
                          v-on="on"
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
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-restricted-syntax */

import { generateWordMaps } from '@p/wordmap';
import { tweenToObserver } from '@p/gsap';
import { ismobile, generateCodeEditor, preFormatText } from '@p/helpers';
import {
  repoData,
  repoTopics,
  repoCommits,
  repoContents,
  repoBranches,
} from '@p/resources/github';
import renderMd from '@c/render-markdown';

export default {
  metaInfo: () => ({
    title: 'About This Project',
  }),
  components: {
    'render-markdown': renderMd,
  },
  data: () => ({
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
    preFormatText,
    file_view: false,
    currentFile: {
      decoded_content_display: '',
      total_lines: 0,
    },
    startPath: '/',
    currentPath: '/',
    historyState: [],
    animatedText: {
      mainTitle: '',
      detailsTitle: '',
      sourceCode: '',
      timeline: '',
    },
  }),
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
  methods: {
    async getRepoData() {
      this.$set(this.repo.details, 'loading', true);
      const repoDataResp = await repoData(
        this.user,
        this.repo.name,
        this.$state.store,
      );
      if (repoDataResp.success && repoDataResp.error == null) {
        const repo_details = repoDataResp.data;
        if (this.repo.name === 'matte-portfolio') {
          repo_details.img = 'https://i.ibb.co/Y7BFDqN/shan-tk-1.png';
        } else {
          repo_details.img = 'https://i.ibb.co/w7jfhfy/image.webp';
        }
        this.$set(this.repo.details, 'data', repo_details);
        this.$set(this.repo.details, 'loading', false);
      }
    },
    async getRepoTopics() {
      this.$set(this.repo.topics, 'loading', true);
      const repoTopicsResp = await repoTopics(
        this.user,
        this.repo.name,
        this.$state.store,
      );
      if (repoTopicsResp.success && repoTopicsResp.error == null) {
        this.$set(this.repo.topics, 'data', repoTopicsResp.topics.names);
        this.$set(this.repo.topics, 'loading', false);
      }
    },
    async getRepoCommits(reset) {
      this.$set(this.repo.commits, 'loading', true);
      const repoCommitsResp = await repoCommits(
        this.user,
        this.repo.name,
        this.current_branch.name,
        this.repo.commits.nos,
        this.repo.commits.page,
        this.$state.store,
      );
      let newCommitArray = [];
      if (repoCommitsResp.success && repoCommitsResp.commits != null) {
        newCommitArray = reset
          ? [].concat(repoCommitsResp.commits)
          : this.repo.commits.data.concat(repoCommitsResp.commits);
        this.$set(this.repo.commits, 'slicer_length', newCommitArray.length);
        this.$set(this.repo.commits, 'data', newCommitArray);
        !reset && this.loadMoreCommits(false);
        this.$set(this.repo.commits, 'loading', false);
      }
    },
    async getRepoBranches() {
      this.$set(this.repo.branches, 'loading', true);
      const repoBranchesResp = await repoBranches(
        this.user,
        this.repo.name,
        this.$state.store,
      );
      if (repoBranchesResp.success && repoBranchesResp.error === null) {
        const { branches } = repoBranchesResp;
        [this.current_branch] = branches.filter(
          (branch) => branch.name === 'master',
        );
        this.branch_toggle = branches.findIndex(
          (branch) => branch.name === 'master',
        );
        this.$set(this.repo.branches, 'data', repoBranchesResp.branches);
        this.$set(this.repo.branches, 'loading', false);
      }
    },
    async getRepoContent(backtrigger, path, branch) {
      this.$set(this.repo.contents, 'loading', true);
      const repoContentsResp = await repoContents(
        this.user,
        this.repo.name,
        path,
        branch,
        this.$state.store,
      );
      if (repoContentsResp.success && repoContentsResp.error == null) {
        if (!backtrigger) {
          this.historyState.push(this.currentPath);
        }
        this.currentPath = path;
        const sortedContents = this.$lodash.orderBy(
          repoContentsResp.contents,
          ['type', 'name'],
          ['asc'],
        );
        this.$set(this.repo.contents, 'data', sortedContents);
        this.renderMarkdown(branch);
        this.$set(this.repo.contents, 'loading', false);
        this.$loader.done();
      }
    },
    async renderMarkdown(branch) {
      for (const file of this.repo.contents.data) {
        if (file.name.toLowerCase() === 'readme.md') {
          this.$set(this.repo.readme, 'loading', true);
          const path = this.startPath + file.path;
          const fileContents = await repoContents(
            this.user,
            this.repo.name,
            path,
            branch,
            this.$state.store,
          );
          if (fileContents.success && fileContents.error == null) {
            const decoded_text = atob(fileContents.contents.content);
            this.$set(this.repo.readme, 'data', decoded_text);
            this.$set(this.repo.readme, 'loading', false);
          }
        }
      }
    },
    async getFileContents(file, branch) {
      if (file.type === 'file') {
        this.$set(this.repo.contents, 'loading', true);
        this.$vuetify.goTo('#this-project-source-code-content');
        const path = this.startPath + file.path;
        const fileContents = await repoContents(
          this.user,
          this.repo.name,
          path,
          branch,
          this.$state.store,
        );
        if (fileContents.success && fileContents.error == null) {
          this.currentFile = fileContents.contents;
          const decodedText = atob(this.currentFile.content);
          const formattedContent = generateCodeEditor(decodedText);
          this.currentFile.decoded_content_display = formattedContent.content;
          this.currentFile.total_lines = formattedContent.total_lines;
          this.historyState.push(this.currentPath);
          this.currentPath = file.path;
          this.$set(this.repo.contents, 'loading', false);
          this.file_view = true;
          this.$loader.done();
        }
      }
    },
    async handleNavigation(backtrigger, file) {
      this.$loader.start();
      if (backtrigger) {
        if (this.currentPath !== '/') {
          this.$vuetify.goTo('#this-project-source-code-content');
          this.$set(this.repo.contents, 'loading', true);
          const newPath = this.historyState.pop();
          this.getRepoContent(backtrigger, newPath, this.current_branch.name);
          this.file_view = false;
        }
      } else if (file) {
        if (file.type === 'dir') {
          this.$vuetify.goTo('#this-project-source-code-content');
          this.$set(this.repo.contents, 'loading', true);
          const newPath = this.startPath + file.path;
          this.getRepoContent(backtrigger, newPath, this.current_branch.name);
        } else if (file.type === 'file') {
          this.getFileContents(file, this.current_branch.name);
        }
      } else if (this.currentPath === '/') {
        this.$set(this.repo.contents, 'loading', true);
        const newPath = this.currentPath;
        this.getRepoContent(backtrigger, newPath, this.current_branch.name);
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
            text: `${this.currentFile.path} has been Copied to Clipboard.`,
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
            text: `Error Copying the code: ${e}`,
            data: {
              loading: false,
              dark: false,
              type: 'Error Notification',
            },
          });
        });
    },
    loadMoreCommits(revert) {
      if (revert) {
        this.$vuetify.goTo('#this-project-timeline');
        this.$set(this.repo.commits, 'slicer', 5);
      } else {
        const length = this.repo.commits.slicer_length;
        const current_length = this.repo.commits.slicer;
        const existing_page = this.repo.commits.page;
        if (length - current_length < 5) {
          const extended_length = current_length + (length - current_length);
          this.$set(this.repo.commits, 'slicer', extended_length);
          this.$set(this.repo.commits, 'page', existing_page + 1);
        } else {
          this.$set(this.repo.commits, 'slicer', current_length + 5);
          const new_length = this.repo.commits.slicer_length;
          const new_slicer = this.repo.commits.slicer;
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
      this.currentFile = {};
      this.file_view = false;
      this.handleNavigation(false);
      this.$set(this.repo.commits, 'slicer', 5);
      this.getRepoCommits(true);
      this.$vuetify.goTo('#this-project-source-code-content');
    },
    code_base_change(name) {
      this.repo.name = name;
      this.currentPath = '/';
      this.currentFile = {};
      this.file_view = false;
      this.$set(this.repo.commits, 'slicer', 5);
      this.do_repo_stuffs();
    },
    open_raw_code(file_path) {
      const base_url = `https://raw.githubusercontent.com/tks18/${this.repo.name}/`;
      const branch = this.current_branch.name;
      const open_url = `${base_url + branch}/${file_path}`;
      this.gotourl(open_url);
    },
    open_gh_path(file_path) {
      const base_url = `https://github.com/tks18/${this.repo.name}/blob/`;
      const branch = this.current_branch.name;
      const open_url = `${base_url + branch}/${file_path}`;
      this.gotourl(open_url);
    },
    gotourl(url) {
      window.open(url);
    },
    openGhTopic(topic) {
      const url = `https://github.com/search?q=${topic}`;
      window.open(url);
    },
    async do_repo_stuffs() {
      await this.getRepoBranches();
      this.getRepoData();
      this.getRepoCommits(true);
      this.getRepoTopics();
      this.handleNavigation(false);
    },
  },
};
</script>
