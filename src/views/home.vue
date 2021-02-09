<template>
  <div class="columns is-multiline">
    <div id="mainhero" class="column is-full non-touch">
      <div
        :class="
          'hero is-fullheight' +
          ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
        "
      >
        <div
          :class="'hero-body' + (ismobile ? ' ma-1 px-0 py-3' : ' ma-2 pa-8')"
        >
          <div class="container">
            <div class="columns is-multiline is-centered is-vcentered">
              <div class="column is-full">
                <div
                  :class="
                    'text text-center font-weight-bold' +
                    (ismobile ? ' text-h4' : ' text-h2')
                  "
                >
                  Designer, Front-end & Backend Developer
                </div>
                <div
                  :class="
                    'text font-weight-bold my-2 py-2 mx-2 px-2 text-center' +
                    (ismobile ? ' text-h4' : ' text-h3')
                  "
                >
                  <v-tooltip
                    v-model="toggleTooltip"
                    top
                    transition="slide-y-transition"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <span
                        v-bind="attrs"
                        v-on="on"
                        @click="loopRandEmoji()"
                        class="fit-text non-touch point-cursor"
                      >
                        {{ animatedArray.randEmoji }}
                      </span>
                    </template>
                    <span>Click here to Shuffle Emoji's</span>
                  </v-tooltip>
                </div>
                <div
                  :class="
                    'text text-center font-weight-bold' +
                    (ismobile ? ' text-body-2' : ' text-body-1')
                  "
                >
                  I design and code beautifully simple things, and I love what I
                  do.
                </div>
              </div>
              <div
                :class="
                  'column is-half' +
                  (ismobile ? ' has-text-centered ma-2 ' : ' has-text-right')
                "
              >
                <v-avatar :size="ismobile ? 250 : 380">
                  <v-img :src="heroData.image" alt="Main Image" />
                </v-avatar>
              </div>
              <div
                :class="
                  'column is-centered' +
                  (ismobile ? ' is-full ' : ' is-half ') +
                  ' text text-center text-overline font-weight-bold'
                "
              >
                <v-row v-if="!ismobile" align="center">
                  <v-col
                    v-for="(button, index) in heroButtons"
                    v-bind:key="index"
                    :cols="
                      index == heroButtons.length - 1
                        ? index % 2 == 0
                          ? 12
                          : 6
                        : 6
                    "
                    :align="
                      index == heroButtons.length - 1
                        ? index % 2 == 0
                          ? 'center'
                          : 'right'
                        : index % 2 == 0
                        ? 'right'
                        : 'left'
                    "
                  >
                    <v-btn
                      large
                      elevation="24"
                      text
                      @click="$vuetify.goTo('#' + button.id)"
                      raised
                      outlined
                    >
                      <v-icon> {{ button.icon }} </v-icon>
                      {{ button.name }}
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row v-if="ismobile" align="center">
                  <v-col cols="6" align="right">
                    <v-btn
                      elevation="24"
                      text
                      @click="$vuetify.goTo('#feedbacktitile')"
                      raised
                      outlined
                    >
                      <v-icon> mdi-alarm-bell </v-icon>
                      Contact Me
                    </v-btn>
                  </v-col>
                  <v-col cols="6" align="left">
                    <v-btn
                      elevation="24"
                      text
                      @click="$vuetify.goTo('#emailme')"
                      raised
                      outlined
                    >
                      <v-icon> mdi-at </v-icon>
                      Email Me
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-full ma-0 pa-0">
      <v-container class="non-touch">
        <v-row align="center" justify="center" class="ma-0 pa-0">
          <v-col cols="12" align="center">
            <div
              id="whatiDo"
              @click="
                $router.push({
                  name: 'About',
                  params: { scroll: true, scrollid: '#languagesknown' },
                })
              "
              :class="
                'text point-cursor text-center text-capitalize ma-0 pa-0 text-h4 font-weight-black ' +
                ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
              "
            >
              {{ animatedArray.whatiDo }}
              <v-icon large>mdi-arrow-down-circle</v-icon>
            </div>
          </v-col>
          <v-col align="center" justify="center" class="text-center" cols="12">
            <v-row align="center" justify="center">
              <v-tooltip
                v-for="(activity, index) in activities"
                v-bind:key="index"
                top
                transition="slide-y-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-col
                    v-on="on"
                    v-bind="attrs"
                    v-ripple
                    :cols="ismobile ? 5 : 2"
                    align="center"
                    :class="
                      (ismobile ? 'mx-1 my-1' : 'mx-3 my-2') + ' point-cursor'
                    "
                    justify="center"
                  >
                    <v-row align="center">
                      <v-col align="center" justify="center">
                        <v-img
                          :max-width="ismobile ? 80 : 110"
                          :src="'/assets/icons/creator/' + activity.asset"
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-row align="center" class="text-center">
                      <v-col
                        cols="12"
                        align="center"
                        class="text-overline ma-0 pa-0 text-center font-weight-bold"
                      >
                        {{ activity.activity }}
                      </v-col>
                      <v-col
                        cols="12"
                        align="center"
                        class="text-caption ma-0 pa-0 font-weight-light"
                      >
                        {{ activity.description }}
                      </v-col>
                    </v-row>
                  </v-col>
                </template>
                <span>{{ activity.tooltip }}</span>
              </v-tooltip>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="column is-full ma-2">
      <v-row>
        <v-col align="start" justify="start">
          <div
            id="storytitle"
            :class="
              'clip-text-back text-h5 non-touch ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
          >
            {{ animatedArray.stories }} <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col align="end" justify="start" class="mr-4">
          <v-btn icon color="primary"><v-icon>mdi-arrow-left</v-icon></v-btn>
          <v-btn icon color="primary"><v-icon>mdi-arrow-right</v-icon></v-btn>
        </v-col>
      </v-row>
      <div
        v-if="stories.loading"
        class="scrollable-x columns ma-2 pa-1 is-vcentered is-mobile"
      >
        <div
          v-for="n in ismobile ? 2 : 5"
          v-bind:key="n"
          class="scrollable-x-child column ma-0 pa-0 non-touch"
        >
          <v-skeleton-loader
            class="mx-auto"
            :width="ismobile ? 225 : 250"
            :height="ismobile ? 300 : 325"
            type="card"
          >
          </v-skeleton-loader>
        </div>
      </div>
      <div
        v-if="!stories.loading"
        class="scrollable-x columns ma-2 pa-1 is-vcentered is-mobile"
      >
        <div
          v-for="(story, index) in stories.data"
          v-bind:key="index"
          class="scrollable-x-child column ma-0 pa-0 non-touch"
        >
          <v-card
            elevation="6"
            v-ripple
            @click="gotoUrl(stories.site + story.link)"
            class="mx-2"
            :style="{
              background: 'center',
              backgroundImage: 'url(' + stories.site + story.asset + ')',
              backgroundSize: 'cover',
            }"
            :width="ismobile ? 225 : 250"
            :height="ismobile ? 300 : 325"
          >
            <v-card-text class="inherit-height-responsive">
              <v-row align="start" justify="start" class="back-blur-no-inherit">
                <v-col cols="2" class="mx-1 pa-0">
                  <v-avatar size="30">
                    <v-img
                      src="https://i.ibb.co/X4BknVG/DJI-0793-1.webp"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="8" class="text-subtitle-1 white--text mx-1 pa-0">
                  Shan.tk
                </v-col>
              </v-row>
              <v-row
                align="end"
                justify="end"
                class="inherit-height text-right white--text text-overline mx-1 font-weight-bold"
              >
                <div class="back-blur-no-inherit">{{ story.title }}</div>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
    <div class="column is-full ma-2">
      <v-row>
        <v-col align="start" justify="start">
          <div
            @click="$router.push('/blog')"
            id="blogtitle"
            :class="
              'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
          >
            {{ animatedArray.blog }} <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col align="end" justify="start" class="mr-4">
          <v-btn icon color="primary" @click="swipeLeft('posts')"
            ><v-icon>mdi-arrow-left</v-icon></v-btn
          >
          <v-btn icon color="primary" @click="swipeRight('posts')"
            ><v-icon>mdi-arrow-right</v-icon></v-btn
          >
        </v-col>
      </v-row>
      <div
        class="scrollable-x columns ma-2 pa-1 is-vcentered is-mobile"
        ref="posts"
      >
        <div
          v-for="n in 10"
          class="scrollable-x-child column ma-0 pa-0 non-touch point-cursor"
          v-bind:key="n"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                elevation="3"
                v-ripple
                class="mx-2"
                :width="ismobile ? 225 : 250"
                :height="ismobile ? 300 : 325"
              >
                <v-card>
                  <v-img
                    src="https://i.ibb.co/BftbgSg/download-force-true-w-1920.jpg"
                  ></v-img>
                </v-card>
                <v-card-text>
                  <h2 class="text-subtitle-1 font-weight-bold primary--text">
                    This is a Lorem Ipsum Post
                  </h2>
                </v-card-text>
                <transition name="fade" mode="out-in">
                  <v-overlay
                    v-if="hover"
                    absolute
                    z-index="2"
                    opacity="0.4"
                    color="primary"
                    class="back-blur"
                  >
                    <v-row class="mx-3">
                      <v-col>
                        <v-row align="start">
                          <div
                            class="text text-body-1 font-weight-bold black--text"
                          >
                            Overview
                          </div>
                        </v-row>
                        <v-row align="start" justify="start">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. A necessitatibus, molestiae magni deleniti hic
                          natus facilis.
                        </v-row>
                        <v-spacer></v-spacer>
                        <v-row class="mt-1">
                          <v-btn color="primary" small>Read More</v-btn>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-overlay>
                </transition>
              </v-card>
            </template>
          </v-hover>
        </div>
      </div>
    </div>
    <div class="column is-full my-1 py-1">
      <v-container>
        <v-row class="my-0 py-0">
          <v-col cols="12" class="my-0 mx-2 px-2 py-0">
            <div
              @click="$router.push('/about')"
              id="abouttitle"
              :class="
                'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
                ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
              "
            >
              {{ animatedArray.about }} <v-icon>mdi-arrow-right-circle</v-icon>
            </div>
          </v-col>
          <v-col cols="12" class="my-0 py-0">
            <v-row align="center" justify="center">
              <v-col :cols="ismobile ? 12 : 9" align="start" justify="center">
                <v-row align="start" justify="start" class="my-0 py-0">
                  <div
                    class="text font-weight-semibold mx-2 px-2"
                    v-html="heroData.subtitle"
                  ></div>
                </v-row>
                <v-row align="end" justify="end" class="my-1 mx-2 px-2 py-1">
                  <v-btn @click="$router.push('about')" color="primary">
                    <v-icon>mdi-text-box-multiple</v-icon>{{ ' Read More' }}
                  </v-btn>
                </v-row>
              </v-col>
              <v-col
                class="my-0 py-0"
                v-if="!ismobile"
                cols="3"
                align="center"
                justify="center"
              >
                <v-avatar
                  size="220"
                  :class="
                    $vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light'
                  "
                >
                  <v-img :src="aboutData.image"></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="column is-full">
      <v-row :class="ismobile ? 'ma-0' : 'ma-2'">
        <v-col cols="12" align="start" justify="start">
          <div
            @click="$router.push('/projects')"
            id="projtitle"
            :class="
              'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
          >
            {{ animatedArray.projtitle }}
            <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col cols="12" v-if="projects.loading">
          <v-row>
            <v-col v-for="n in ismobile ? 1 : 5" v-bind:key="n">
              <v-card>
                <v-skeleton-loader class="mx-auto" type="card">
                </v-skeleton-loader>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row v-if="!projects.loading" class="mx-2 non-touch">
            <v-col
              v-for="(project, index) in projects.projects"
              class="mx-0 px-1"
              :cols="ismobile && 12"
              v-bind:key="index"
            >
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    :max-width="
                      ismobile
                        ? null
                        : (contextInfo.viewport.width -
                            contextInfo.viewport.width * 0.1) /
                          5
                    "
                  >
                    <v-img contain :src="githubPhoto"></v-img>
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
                            @click="gotoUrl(project.license.url)"
                            class="primary--text point-cursor"
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
                            @click="gotoUrl(project.html_url)"
                            outlined
                            small
                            pill
                          >
                            <v-avatar size="10" left>
                              <v-img :src="project.owner.avatar_url"></v-img>
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
                              <template v-slot:activator="{ on }">
                                <v-chip
                                  v-on="on"
                                  @click="gotoUrl(project.stargazers_url)"
                                  class="text-right ma-1"
                                  color="primary"
                                  pill
                                >
                                  <v-icon left small>mdi-eye</v-icon>
                                  {{ project.watchers }}
                                </v-chip>
                              </template>
                              <span>Watchers</span>
                            </v-tooltip>
                            <v-tooltip top transition="slide-y-transition">
                              <template v-slot:activator="{ on }">
                                <v-chip
                                  v-on="on"
                                  @click="gotoUrl(project.forks_url)"
                                  class="text-right ma-1"
                                  color="primary"
                                  pill
                                >
                                  <v-icon left small>mdi-source-fork</v-icon>
                                  {{ project.forks }}
                                </v-chip>
                              </template>
                              <span>Forks</span>
                            </v-tooltip>
                            <v-tooltip top transition="slide-y-transition">
                              <template v-slot:activator="{ on }">
                                <v-chip
                                  v-on="on"
                                  @click="gotoUrl(project.stargazers_url)"
                                  class="text-right ma-1"
                                  color="primary"
                                  pill
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
                                  @click="$router.push('/projects')"
                                  block
                                  color="primary"
                                  rounded
                                >
                                  <v-icon small>mdi-folder-star</v-icon> Project
                                  Breif
                                </v-btn>
                              </v-col>
                              <v-col cols="6">
                                <v-btn
                                  @click="gotoUrl(project.homepage)"
                                  small
                                  block
                                  rounded
                                  color="primary"
                                >
                                  <v-icon small>mdi-web</v-icon> Website
                                </v-btn>
                              </v-col>
                              <v-col cols="6">
                                <v-btn
                                  @click="gotoUrl(project.git_url)"
                                  small
                                  block
                                  rounded
                                  color="primary"
                                >
                                  <v-icon small>mdi-git</v-icon> Git
                                </v-btn>
                              </v-col>
                              <v-col cols="12">
                                <v-btn
                                  @click="gotoUrl(project.html_url)"
                                  block
                                  rounded
                                  color="primary"
                                >
                                  <v-icon small>mdi-github</v-icon> on Github
                                </v-btn>
                              </v-col>
                              <v-col cols="6">
                                <v-btn
                                  @click="gotoUrl(project.url)"
                                  color="primary"
                                  block
                                  small
                                  rounded
                                >
                                  <v-icon small>mdi-webpack</v-icon> Api
                                </v-btn>
                              </v-col>
                              <v-col cols="6">
                                <v-btn
                                  @click="gotoUrl(project.clone_url)"
                                  color="primary"
                                  block
                                  small
                                  rounded
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
    <div class="column is-full">
      <v-container id="emailme">
        <v-alert
          dense
          text
          v-ripple
          outlined
          class="non-touch point-cursor"
          @click="handleEmailClick('me@shaaan.tk')"
          :type="emailType"
        >
          <div class="text">
            <span class="text-overline font-weight-black">Tip:</span>
            <span class="text-subtitle-2">
              Click Here to Contact / You can Contact me through
            </span>
            <span class="font-weight-black"> me@shaaan.tk</span>
          </div>
        </v-alert>
      </v-container>
    </div>
    <div class="column is-full">
      <div
        id="feedbacktitile"
        :class="
          'non-touch text-center font-weight-black my-2 text-capitalize' +
          (ismobile ? ' text-h6 ' : ' text-h4 ')
        "
      >
        {{ animatedArray.feedBack }}
        <v-icon large>mdi-arrow-down-circle</v-icon>
      </div>
      <div class="hero is-medium">
        <div :class="'hero-body contact-bg ' + (ismobile ? 'ma-0 pa-0' : '')">
          <div class="container">
            <v-row align="center" justify="center">
              <v-col align="center" :cols="ismobile ? 12 : 7" class="back-blur">
                <v-row>
                  <v-col cols="12" class="my-0 py-0" align="left">
                    <v-text-field
                      dark
                      prepend-icon="mdi-form-textbox"
                      dense
                      :persistent-hint="true"
                      hint="Your Name"
                      label="Enter Your Name"
                      hide-details="auto"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="my-0 py-0" align="left">
                    <v-text-field
                      dark
                      prepend-icon="mdi-email"
                      dense
                      :persistent-hint="true"
                      hint="Your Email"
                      label="Enter Your Email ID"
                      hide-details="auto"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="my-0 py-0" align="left">
                    <v-textarea
                      dark
                      class="is-maximum"
                      prepend-icon="mdi-comment-quote"
                      no-resize
                      width="100%"
                      height="100%"
                      :full-width="true"
                      :persistent-hint="true"
                      label="Your Feedback bruh ?"
                      :filled="true"
                      :outlined="true"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col cols="6" class="my-0 py-0" align="right">
                    <v-btn dark color="primary">
                      <v-icon>mdi-cards-heart</v-icon>
                      Submit
                    </v-btn>
                  </v-col>
                  <v-col cols="6" align="left">
                    <v-btn dark color="error">
                      <v-icon>mdi-heart-broken</v-icon>
                      Cancel
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { stories } from '@p/backend';
import { lettersArray, safeEmojis } from '@t/emoji-array';
import { scrollTo, getOs, getViewport } from '@p/helpers';
export default {
  metaInfo: function () {
    return {
      title: 'Home',
    };
  },
  data: function () {
    return {
      heroData: {
        title: 'Hello There !',
        image: 'https://i.ibb.co/CQqRR3b/profile.png',
        subtitle: `<div class="text-overline">This is <span class="primary--text font-weight-black">Sudharshan TK</span> A.K.A <span class="primary--text font-weight-black">(Shan.tk)</span>.</div><span class="text-body-1">I Create Elegant, Modern, Sleeky UI's. I Love Javascript, Nodejs & Flutter. Its Been a Great Journey for the Past 3 Years of Self-learning Web development and Creating Amazing Websites. Currently Focussing More on Backend Development Like Nodejs and Django. I Also Know Android Debugging and Rom Development to Some Extent.I am Pursuing Chartered Accountancy Course as my Profession.`,
        rounded: true,
        buttonUrl: '/about',
        buttontext: 'Contact Me !',
      },
      stories: {
        loading: true,
        site: '',
        data: [],
      },
      heroButtons: [
        {
          name: 'About Me',
          icon: 'mdi-information-variant',
          id: 'abouttitle',
        },
        {
          name: 'What i Do',
          icon: 'mdi-console-network',
          id: 'whatiDo',
        },
        {
          name: 'My Blog',
          icon: 'mdi-post-outline',
          id: 'blogtitle',
        },
        {
          name: 'Projects',
          icon: 'mdi-projector-screen',
          id: 'projtitle',
        },
        {
          name: 'Contact Me',
          icon: 'mdi-contactless-payment',
          id: 'feedbacktitile',
        },
      ],
      letters: lettersArray,
      projects: {
        loading: false,
        projects: {},
      },
      contextInfo: {
        os: getOs(),
        viewport: getViewport(),
      },
      toggleTooltip: false,
      mailtoLink:
        'mailto:me@shaaan.tk?subject=Contacting%20You%20from%20Website&body=Hey%20there%20!%0D%0A%0D%0A',
      githubPhoto:
        'https://i.ibb.co/C6Y6Rwt/6efb9bc5d143-article-190612-github-body-text.webp',
      emailType: 'info',
      animatedArray: {
        blog: '',
        stories: '',
        about: '',
        whatiDo: '',
        stat: '',
        projtitle: '',
        randEmoji: '',
        contactTitle: '',
        feedBack: '',
      },
      aboutData: {
        image: 'https://i.ibb.co/b27v0Xf/profile-2.webp',
      },
    };
  },
  methods: {
    gotoUrl(url, self) {
      if (self) {
        window.open(url, '_self');
        return;
      } else {
        window.open(url);
        return;
      }
    },
    swipeLeft(func) {
      const content = 'this.$refs.' + func;
      scrollTo(eval(content), -400, 300);
    },
    swipeRight(func) {
      const content = 'this.$refs.' + func;
      scrollTo(eval(content), 400, 300);
    },
    createObserver(elem, callback, wordMap, word, stringText) {
      let observer;
      let target = document.querySelector(elem);
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      };
      let handleIntersect = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this[callback](wordMap, word, stringText);
          }
        });
      };
      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(target);
    },
    update(word, stringText) {
      var html = '';
      word.forEach((map) => {
        html += this.letters[Math.round(map) % lettersArray.length];
      });
      this.$set(this.animatedArray, stringText, html);
    },
    transitRandEmoji(wordMap, word, stringText) {
      var tl = this.$gsap.timeline({
        onUpdate: () => {
          var html = '';
          word.forEach((map) => {
            html += safeEmojis[Math.round(map) % safeEmojis.length];
          });
          this.$set(this.animatedArray, stringText, html);
        },
      });
      wordMap.forEach((range, index) => {
        tl.to(
          word,
          {
            [index]: safeEmojis.length * 2 + range,
            ease: 'ease-out',
            duration: index + 2.5,
          },
          0,
        );
      });
    },
    loopRandEmoji() {
      let randEmoji = {
        map: [
          safeEmojis.indexOf(
            this.$_.shuffle(safeEmojis)[
              Math.floor(Math.random() * safeEmojis.length)
            ],
          ),
          safeEmojis.indexOf(
            this.$_.shuffle(safeEmojis)[
              Math.floor(Math.random() * safeEmojis.length)
            ],
          ),
          safeEmojis.indexOf(
            this.$_.shuffle(safeEmojis)[
              Math.floor(Math.random() * safeEmojis.length)
            ],
          ),
        ],
        initial: [
          safeEmojis.indexOf(
            this.$_.shuffle(safeEmojis)[
              Math.floor(Math.random() * safeEmojis.length)
            ],
          ),
          safeEmojis.indexOf(
            this.$_.shuffle(safeEmojis)[
              Math.floor(Math.random() * safeEmojis.length)
            ],
          ),
          safeEmojis.indexOf(
            this.$_.shuffle(safeEmojis)[
              Math.floor(Math.random() * safeEmojis.length)
            ],
          ),
        ],
      };
      this.transitRandEmoji(randEmoji.map, randEmoji.initial, 'randEmoji');
      setTimeout(() => {
        this.toggleTooltip = false;
      }, 5000);
    },
    transitWord(wordMap, word, stringText) {
      var tl = this.$gsap.timeline({
        onUpdate: () => {
          this.update(word, stringText);
        },
      });
      wordMap.forEach((range, index) => {
        tl.to(
          word,
          {
            [index]: lettersArray.length * 2 + range,
            ease: 'power4',
            duration: index / 4 + 1,
          },
          0,
        );
      });
    },
    async getStories() {
      let storydata = await stories.get();
      if (storydata && storydata.data && storydata.data.success) {
        this.stories.site = storydata.data.website;
        this.stories.data = storydata.data.stories;
        this.$set(this.stories, 'loading', false);
      } else {
        this.$set(this.stories, 'loading', false);
        this.$notify({
          group: 'main',
          type: 'error',
          duration: 5000,
          title: 'Stories Error',
          text:
            'Error While Getting Stories from the Server. Please Reload the Website to Get the Data',
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
      }
    },
    getProjects() {
      this.$set(this.projects, 'loading', true);
      let url =
        'https://api.github.com/users/tks18/repos?sort=updated&per_page=20';
      this.$axios
        .get(url)
        .then((resp) => {
          if (resp.data.length > 0) {
            this.$set(this.projects, 'loading', false);
            let repos = resp.data;
            let slicedRepos = this.ismobile
              ? repos.slice(0, 2)
              : repos.slice(0, 5);
            this.$set(this.projects, 'projects', slicedRepos);
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
            this.$set(this.projects, 'loading', false);
            this.$set(this.projects, 'projects', {});
          }
        })
        .catch((e) => {
          console.error(e);
          this.$set(this.projects, 'loading', false);
          this.$set(this.projects, 'projects', {});
        });
    },
    handleEmailClick(email) {
      navigator.clipboard.writeText(email).then(
        () => {
          this.$notify({
            group: 'main',
            type: 'yellow',
            duration: 5000,
            title: 'Email Address Copied !',
            text:
              'My Email Address has been Copied to Clipboard. You can Click the below button to Directly open your Mail Client to Send my Mail. Thank You',
            data: {
              loading: false,
              dark: false,
              type: 'Normal Notification',
              buttons: [
                {
                  text: 'Open Email',
                  onClick: () => {
                    this.gotoUrl(this.mailtoLink);
                  },
                },
              ],
            },
          });
          setTimeout(() => {
            this.emailType = 'info';
          }, 3003);
        },
        () => {
          this.$notify({
            group: 'main',
            type: 'error',
            duration: 5000,
            title: 'Error in the Process',
            text:
              'Error While Copying the Email Address. No Worries you can Directly Send me a Mail with the Below Button.',
            data: {
              loading: false,
              dark: true,
              type: 'Error Notification',
              buttons: [
                {
                  text: 'Open Email',
                  onClick: () => {
                    this.gotoUrl(this.mailtoLink);
                  },
                },
              ],
            },
          });
          setTimeout(() => {
            this.emailType = 'info';
          }, 3003);
        },
      );
    },
    render() {
      this.loopRandEmoji();
      this.createObserver(
        '#whatiDo',
        'transitWord',
        this.wordMaps.whatiDo.map,
        this.wordMaps.whatiDo.initial,
        'whatiDo',
      );
      this.createObserver(
        '#storytitle',
        'transitWord',
        this.wordMaps.stories.map,
        this.wordMaps.stories.initial,
        'stories',
      );
      this.createObserver(
        '#abouttitle',
        'transitWord',
        this.wordMaps.about.map,
        this.wordMaps.about.initial,
        'about',
      );
      this.createObserver(
        '#projtitle',
        'transitWord',
        this.wordMaps.projtitle.map,
        this.wordMaps.projtitle.initial,
        'projtitle',
      );
      this.createObserver(
        '#blogtitle',
        'transitWord',
        this.wordMaps.blog.map,
        this.wordMaps.blog.initial,
        'blog',
      );
      this.createObserver(
        '#feedbacktitile',
        'transitWord',
        this.wordMaps.feedBackTitle.map,
        this.wordMaps.feedBackTitle.initial,
        'feedBack',
      );
      this.getProjects();
      this.getStories();
      setTimeout(() => {
        this.toggleTooltip = true;
      }, 2000);
    },
  },
  computed: {
    ismobile() {
      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      if (width > 966) {
        return false;
      } else {
        return true;
      }
    },
    activities() {
      return [
        {
          asset: 'web coding.svg',
          activity: 'Developing Frontends',
          description: 'Developing Classy, Sassy, Professional Grade Frontends',
          tooltip: 'Get to Know What Frameworks I Code for Development',
        },
        {
          asset: 'picture.svg',
          activity: 'Image Manipulation',
          description: 'Well Versed in Post Processing of Photographs',
          tooltip: 'Get to Know What Softwares I Use for Post Processing',
        },
        {
          asset: 'device.svg',
          activity: 'App Development',
          description: 'Mobile App Development Based on Flutter SDK',
          tooltip: 'Get to Know What i learnt in Flutter',
        },
        {
          asset: 'idea.svg',
          activity: 'Hosting Solutions Guidance',
          description:
            'Advising on Suitable and Best Hosting Solutions for a Website / Server',
          tooltip: 'Get to Know What type of Consulting i will give',
        },
        {
          asset: 'programming.svg',
          activity: 'Presentations',
          description: 'Desgining Wonderful and Eye Catching Presentations',
          tooltip:
            'Get to Know What Softwares i use for Designing Presentations',
        },
        {
          asset: 'layer.svg',
          activity: 'Architecting Backends',
          description:
            'Constructing Secure and Powerful Backends for Frontends',
          tooltip: 'Get to Know What Languages I Use for Backends',
        },
        {
          asset: 'speed test.svg',
          activity: 'Video Editing',
          description: 'Editing and Color Grading Videos  for a Cinematic Look',
          tooltip: 'Get to Know What Softwares I Use for Video Editing',
        },
        {
          asset: 'binary code.svg',
          activity: 'Data Analytics',
          description:
            'Crunching, Cleaning and Manipluating Data and Getting Insights',
          tooltip:
            'Get to Know What Languages and Softwares with Which i Analyze Data',
        },
      ];
    },
    wordMaps() {
      return {
        blog: {
          map: [
            lettersArray.indexOf('m'),
            lettersArray.indexOf('y'),
            lettersArray.indexOf(' '),
            lettersArray.indexOf('b'),
            lettersArray.indexOf('l'),
            lettersArray.indexOf('o'),
            lettersArray.indexOf('g'),
          ],
          initial: [46, 1, 3, 2, 40, 43, 10],
        },
        stories: {
          map: [
            lettersArray.indexOf('s'),
            lettersArray.indexOf('t'),
            lettersArray.indexOf('o'),
            lettersArray.indexOf('r'),
            lettersArray.indexOf('i'),
            lettersArray.indexOf('e'),
            lettersArray.indexOf('s'),
          ],
          initial: [40, 44, 42, 39, 41, 44, 2],
        },
        about: {
          map: [
            lettersArray.indexOf('a'),
            lettersArray.indexOf('b'),
            lettersArray.indexOf('o'),
            lettersArray.indexOf('u'),
            lettersArray.indexOf('t'),
            lettersArray.indexOf(' '),
            lettersArray.indexOf('m'),
            lettersArray.indexOf('e'),
          ],
          initial: [39, 41, 45, 43, 42, 44, 46, 38],
        },
        projtitle: {
          map: [
            lettersArray.indexOf('p'),
            lettersArray.indexOf('r'),
            lettersArray.indexOf('o'),
            lettersArray.indexOf('j'),
            lettersArray.indexOf('e'),
            lettersArray.indexOf('c'),
            lettersArray.indexOf('t'),
            lettersArray.indexOf('s'),
          ],
          initial: [39, 41, 45, 43, 42, 44, 46, 38],
        },
        contactTitle: {
          map: [
            lettersArray.indexOf('g'),
            lettersArray.indexOf('a'),
            lettersArray.indexOf('l'),
            lettersArray.indexOf('l'),
            lettersArray.indexOf('e'),
            lettersArray.indexOf('r'),
            lettersArray.indexOf('y'),
          ],
          initial: [42, 46, 40, 1, 32, 45, 14],
        },
        feedBackTitle: {
          map: [
            lettersArray.indexOf('s'),
            lettersArray.indexOf('u'),
            lettersArray.indexOf('b'),
            lettersArray.indexOf('m'),
            lettersArray.indexOf('i'),
            lettersArray.indexOf('t'),
            lettersArray.indexOf(' '),
            lettersArray.indexOf('y'),
            lettersArray.indexOf('o'),
            lettersArray.indexOf('u'),
            lettersArray.indexOf('r'),
            lettersArray.indexOf(' '),
            lettersArray.indexOf('f'),
            lettersArray.indexOf('e'),
            lettersArray.indexOf('e'),
            lettersArray.indexOf('d'),
            lettersArray.indexOf('b'),
            lettersArray.indexOf('a'),
            lettersArray.indexOf('c'),
            lettersArray.indexOf('k'),
          ],
          initial: [
            42,
            46,
            40,
            1,
            32,
            45,
            14,
            42,
            46,
            40,
            1,
            32,
            45,
            14,
            42,
            46,
            40,
            1,
            32,
            45,
          ],
        },
        whatiDo: {
          map: [
            lettersArray.indexOf('w'),
            lettersArray.indexOf('h'),
            lettersArray.indexOf('a'),
            lettersArray.indexOf('t'),
            lettersArray.indexOf(' '),
            lettersArray.indexOf('i'),
            lettersArray.indexOf(' '),
            lettersArray.indexOf('d'),
            lettersArray.indexOf('o'),
          ],
          initial: [2, 20, 46, 40, 39, 27, 6, 42, 9],
        },
      };
    },
  },
  mounted() {
    this.render();
  },
};
</script>
