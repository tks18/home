<template>
  <div class="columns is-multiline">
    <div id="home-mainhero" class="column is-full non-touch">
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
                          : 'left'
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
                      @click="$vuetify.goTo('#home-feedbacktitile')"
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
                      @click="$vuetify.goTo('#home-emailme')"
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
              id="home-whatiDo"
              @click="
                $router.push({
                  name: 'About',
                  params: { scroll: true, scrollid: '#about-languagesknown' },
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
            id="home-storytitle"
            @click="gotoUrl('https://webstories.shaaan.tk')"
            :class="
              'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
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
            id="home-blogtitle"
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
              id="home-abouttitle"
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
                  <v-btn
                    @click="
                      $router.push({
                        name: 'About',
                        params: {
                          scroll: true,
                          scrollid: '#about-aboutmecard',
                        },
                      })
                    "
                    color="primary"
                  >
                    <v-icon left>mdi-text-box-multiple</v-icon>Read More
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
      <v-container>
        <v-tooltip top transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-card
              :loading="quotesLoading"
              img="https://i.ibb.co/0nf9FwS/bb-3.webp"
              class="mx-auto non-touch"
              light
              v-on="on"
              v-bind="attrs"
              @click="gotoUrl('https://www.imdb.com/title/tt0903747/')"
              max-width="600"
            >
              <v-card-text
                class="inherit-height-responsive"
                v-if="!quotesLoading"
              >
                <v-row class="inherit-height" align="end" justify="end">
                  <v-col
                    class="inherit-height"
                    align="center"
                    justify="end"
                    cols="12"
                  >
                    <v-row>
                      <v-col cols="12" align="center" justify="center">
                        <div class="text white--text text-h6 font-weight-bold">
                          "{{ quotesData.quote }}"
                        </div>
                      </v-col>
                      <v-col cols="12" align="right" justify="center">
                        <div class="white--text text-overline">
                          by {{ quotesData.author }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </template>
          <span>This is Breaking Bad 🦹‍♂️</span>
        </v-tooltip>
      </v-container>
    </div>
    <div class="column is-full">
      <v-row :class="ismobile ? 'ma-0' : 'ma-2'">
        <v-col cols="12" align="start" justify="start">
          <div
            @click="$router.push('/projects')"
            id="home-projtitle"
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
                            <v-avatar size="6" left>
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
      <v-container>
        <v-row :class="ismobile ? 'mx-1' : 'mx-2'">
          <v-col cols="12">
            <div
              id="home-astroPicTitle"
              :class="
                'clip-text-back text-h5 non-touch ml-2 text-capitalize' +
                ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
              "
            >
              {{ animatedArray.astroPicTitle }}
              <v-icon>mdi-arrow-right-circle</v-icon>
            </div>
          </v-col>
          <v-col :cols="12">
            <v-card :loading="apodLoading" elevation="15" class="mx-auto">
              <v-card-text v-if="!apodLoading">
                <v-row align="center">
                  <v-col
                    :cols="ismobile ? 12 : 7"
                    :class="ismobile ? 'ma-0 mb-1' : 'ml-0 my-0'"
                  >
                    <v-img :src="!apodLoading ? apodData.hdurl : null"></v-img>
                  </v-col>
                  <v-col :cols="ismobile ? 12 : 5">
                    <v-card-title v-if="!apodLoading">
                      {{ apodData.title }}
                    </v-card-title>
                    <v-card-subtitle v-if="!apodLoading">
                      Dated: {{ apodData.date }}
                    </v-card-subtitle>
                    <v-card-text>
                      {{ apodData.explanation }}
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="column is-full">
      <v-row :class="ismobile ? 'mx-1' : 'mx-2'">
        <v-col cols="12">
          <div
            @click="$router.push('/spacex')"
            id="home-spacextitle"
            :class="
              'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
          >
            {{ animatedArray.spacextitle }}
            <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="text-body-1 ml-4">
            You Know Something ! I am Really Obsessed with Spacex and
            Particularly
            <span class="primary--text font-weight-bold">Elon Musk</span>.Do you
            know Why ?<br />SpaceX is the innovative and ambitious private
            aerospace manufacturer founded in 2002 by Elon Musk. SpaceX truly
            earned its place among the aeronautical elite—and changed the
            economics of space flight­—by making its reusable rocket system
            seemingly as reliable as the sunrise. We will Soon have a Dedicated
            Page for Spacex and Elon Musk (Really Sooon).
            <span class="primary--text font-weight-bold">
              So here is the Latest Launch News below:
            </span>
          </div>
        </v-col>
        <v-col cols="12">
          <v-container>
            <v-card elevation="15" :loading="launchloading">
              <v-card-title v-if="!launchloading">
                {{ launchData.name }}
              </v-card-title>
              <v-card-subtitle v-if="!launchloading">
                {{ launchData.date_utc | moment('DD-MM-YYYY [at] hh:mm a') }}
                (UTC)
              </v-card-subtitle>
              <v-card-text v-if="!launchloading">
                <v-row>
                  <v-col :cols="ismobile ? 12 : 6" justify="center">
                    <div class="text text-body-1">
                      {{ launchData.details }}
                    </div>
                    <div class="text-overline my-1 mx-1">
                      <div>
                        <span class="font-weight-bold">Flight Number</span> -
                        {{ launchData.flight_number }}
                      </div>
                      <div>
                        <span class="font-weight-bold">Crew Members</span> -
                        {{ launchData.crew.length }}
                      </div>
                      <div>
                        <span class="font-weight-bold">Static Fire Date</span> -
                        {{
                          launchData.static_fire_date_utc
                            | moment('DD-MM-YYYY [at] hh:mm a')
                        }}
                        (UTC)
                      </div>
                      <div>
                        <span class="font-weight-bold">Launch Date</span> -
                        {{
                          launchData.date_utc
                            | moment('DD-MM-YYYY [at] hh:mm a')
                        }}
                        (UTC)
                      </div>
                      <div>
                        <span class="font-weight-bold"> Launch Status </span> -
                        <v-tooltip top transition="slide-y-transition">
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              v-on="on"
                              v-bind="attrs"
                              :color="launchData.success ? 'success' : 'error'"
                            >
                              {{
                                launchData.success
                                  ? 'mdi-rocket-launch'
                                  : 'mdi-rocket'
                              }}
                            </v-icon>
                          </template>
                          <span>{{
                            launchData.success ? 'Success' : 'Failed'
                          }}</span>
                        </v-tooltip>
                      </div>
                      <div>
                        <span class="font-weight-bold">Ship Recovered</span> -
                        {{
                          launchData.fairings.recovered
                            ? 'Recovered'
                            : 'Lost it !'
                        }}
                      </div>
                      <div class="my-1">
                        <v-chip
                          @click="gotoUrl(launchData.links.reddit.campaign)"
                          outlined
                          ripple
                          class="mx-1"
                          small
                          color="orange"
                        >
                          <v-icon small left>mdi-reddit</v-icon>
                          Campaign
                        </v-chip>
                        <v-chip
                          @click="gotoUrl(launchData.links.reddit.launch)"
                          outlined
                          ripple
                          class="mx-1"
                          small
                          color="orange"
                        >
                          <v-icon small left> mdi-reddit </v-icon>
                          Launch
                        </v-chip>
                        <v-chip
                          @click="gotoUrl(launchData.links.reddit.media)"
                          outlined
                          ripple
                          class="mx-1"
                          small
                          color="orange"
                        >
                          <v-icon small left> mdi-reddit </v-icon>
                          Media
                        </v-chip>
                        <v-chip
                          @click="gotoUrl(launchData.links.reddit.recovery)"
                          outlined
                          ripple
                          class="mx-1"
                          small
                          color="orange"
                        >
                          <v-icon small left> mdi-reddit </v-icon>
                          Recovery
                        </v-chip>
                      </div>
                      <div>
                        <v-chip
                          @click="gotoUrl(launchData.links.webcast)"
                          ripple
                          small
                          color="red"
                          outlined
                          class="mx-1"
                        >
                          <v-icon small left> mdi-youtube </v-icon>
                          Watch Webcast
                        </v-chip>
                        <v-chip
                          @click="gotoUrl(launchData.links.article)"
                          rounded
                          small
                          outlined
                          class="mx-1"
                          color="primary"
                          ><v-icon small left> mdi-text-box-search</v-icon>
                          Article
                        </v-chip>
                        <v-chip
                          @click="gotoUrl(launchData.links.wikipedia)"
                          rounded
                          small
                          outlined
                          class="mx-1"
                          color="primary"
                          ><v-icon small left> mdi-wikipedia</v-icon> wiki
                        </v-chip>
                        <v-chip
                          @click="$router.push('/spacex/' + launchData.id)"
                          rounded
                          small
                          outlined
                          class="mx-1"
                          color="primary"
                          ><v-icon small left>
                            mdi-file-document-outline</v-icon
                          >
                          More Info
                        </v-chip>
                      </div>
                    </div>
                  </v-col>
                  <v-col
                    :cols="ismobile ? 12 : 6"
                    align="center"
                    justify="center"
                  >
                    <v-img :src="launchData.links.flickr.original[0]"></v-img>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions class="mx-2" v-if="!launchloading">
                <v-spacer></v-spacer>
                <v-tooltip top transition="slide-x-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="gotoUrl(launchData.links.flickr.original[0])"
                      v-on="on"
                      v-bind="attrs"
                      color="primary"
                      icon
                    >
                      <v-icon>mdi-download</v-icon>
                    </v-btn>
                  </template>
                  <span>Download this Image</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </div>
    <div class="column is-full non-touch">
      <v-row :class="ismobile ? 'mx-1' : 'mx-2'">
        <v-col cols="12">
          <div
            @click="$router.push('/gallery')"
            id="home-channel-title"
            :class="
              'clip-text-back text-h5 point-cursor ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
          >
            {{ animatedArray.channel_title }}
            <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col cols="12" v-if="!channel.loading">
          <v-row align="center" :justify="ismobile ? 'center' : null">
            <v-col :cols="ismobile ? 8 : 2" align="center">
              <v-card
                :elevation="channel_elevation"
                @mouseover="channel_elevation = 18"
                @mouseout="channel_elevation = 3"
                :height="ismobile ? '' : contextInfo.viewport.height * 0.47"
                outlined
                ripple
                class="point-cursor"
                align="center"
                justify="center"
              >
                <v-card-text>
                  <v-row align="center">
                    <v-col cols="12" align="center">
                      <v-avatar
                        v-if="
                          channel.data.snippet.thumbnails.high.url &&
                          contextInfo.viewport.height * 0.47 > 220
                        "
                        :size="
                          ismobile ? 150 : contextInfo.viewport.width * 0.095
                        "
                        color="primary"
                      >
                        <v-img
                          :src="channel.data.snippet.thumbnails.high.url"
                        ></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col cols="12" align="center">
                      <div class="text-h5 font-weight-black">
                        {{ channel.data.snippet.title }}
                      </div>
                      <div class="text-caption">Subscribe to my Channel</div>
                    </v-col>
                    <v-col cols="12" align="center">
                      <v-btn
                        text
                        small
                        @click="
                          gotoUrl(
                            'https://youtube.com/channel/' + channel.data.id,
                          )
                        "
                        color="#C4302B"
                        dark
                      >
                        Subscribe <v-icon right>mdi-youtube</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col :cols="ismobile ? 12 : 10" v-if="channel.videos.length > 0">
              <v-row align="center">
                <v-slide-group :show-arrows="!ismobile">
                  <v-slide-item
                    v-for="(video, index) in channel.videos"
                    v-bind:key="index"
                    class="mx-2"
                  >
                    <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-card
                          raised
                          :height="
                            ismobile
                              ? contextInfo.viewport.height * 0.5
                              : contextInfo.viewport.height * 0.47
                          "
                          :width="
                            ismobile
                              ? contextInfo.viewport.width * 0.75
                              : contextInfo.viewport.width * 0.3
                          "
                          :img="video.snippet.thumbnails.standard.url"
                        >
                          <v-slide-y-transition mode="out-in">
                            <v-card-text v-if="!hover" class="inherit-height">
                              <v-row class="inherit-height" align="end">
                                <v-spacer></v-spacer>
                                <v-col cols="12">
                                  <v-sheet
                                    class="pa-3"
                                    rounded
                                    elevation="8"
                                    outlined
                                  >
                                    <div class="text-subtitle-1">
                                      {{ video.snippet.title }}
                                    </div>
                                    <div class="text-subtitle-2">
                                      Posted on
                                      {{
                                        video.snippet.publishTime
                                          | moment('D of MMM, YYYY @ HH:MM')
                                      }}
                                    </div>
                                  </v-sheet>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-slide-y-transition>
                          <v-dialog
                            fullscreen
                            v-model="video.model"
                            hide-overlay
                            transition="dialog-bottom-transition"
                          >
                            <v-card>
                              <v-card-title>
                                <v-row align="center">
                                  <v-col :cols="ismobile ? 10 : 8" align="left">
                                    <v-icon color="#C4302B" class="mx-1"
                                      >mdi-youtube</v-icon
                                    >
                                    Youtube Player
                                  </v-col>
                                  <v-col :cols="ismobile ? 2 : 4" align="right">
                                    <v-btn @click="yt_video_model(video)" icon>
                                      <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-card-title>
                              <v-card-text
                                :class="ismobile ? 'mx-0 px-0' : ' '"
                              >
                                <v-row :class="ismobile ? 'mx-0 px-0' : ' '">
                                  <v-col
                                    :cols="ismobile ? 12 : 7"
                                    align="center"
                                    :class="ismobile ? 'mx-0 px-0' : ' '"
                                  >
                                    <iframe
                                      :width="
                                        ismobile
                                          ? contextInfo.viewport.width * 0.8
                                          : contextInfo.viewport.width * 0.55
                                      "
                                      :height="
                                        ismobile
                                          ? contextInfo.viewport.height * 0.5
                                          : contextInfo.viewport.height * 0.6
                                      "
                                      :src="
                                        'https://www.youtube.com/embed/' +
                                        video.id.videoId
                                      "
                                      :title="video.snippet.title"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowfullscreen
                                    ></iframe>
                                  </v-col>
                                  <v-col
                                    :cols="ismobile ? 12 : 5"
                                    :class="ismobile ? 'mx-0 px-0' : ' '"
                                  >
                                    <v-row>
                                      <v-col cols="12">
                                        <v-card-title>
                                          {{ video.snippet.title }}
                                        </v-card-title>
                                        <v-card-subtitle>
                                          Posted on
                                          {{
                                            video.snippet.publishTime
                                              | moment('DD-MM-YYYY @ HH:MM')
                                          }}
                                        </v-card-subtitle>
                                        <v-card-text>
                                          {{ video.snippet.description }}
                                        </v-card-text>
                                      </v-col>
                                    </v-row>
                                  </v-col>
                                </v-row>
                              </v-card-text>
                            </v-card>
                          </v-dialog>
                          <transition name="fade" mode="out-in">
                            <v-overlay
                              v-if="hover"
                              absolute
                              z-index="2"
                              opacity="0.4"
                              color="primary"
                              class="back-blur"
                            >
                              <v-row class="inherit-height" align="center">
                                <v-col
                                  cols="12"
                                  align="center"
                                  justify="space-around"
                                >
                                  <v-row align="center">
                                    <v-col cols="12" align="center">
                                      <v-btn
                                        color="primary"
                                        @click="yt_video_model(video)"
                                        fab
                                        large
                                      >
                                        <v-icon large> mdi-youtube </v-icon>
                                      </v-btn>
                                    </v-col>
                                    <v-col cols="12" align="center">
                                      <v-btn color="primary">
                                        Visit my Channel
                                        <v-icon right
                                          >mdi-television-classic</v-icon
                                        >
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
                  </v-slide-item>
                </v-slide-group>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" align="center" v-if="channel.loading">
          <v-skeleton-loader
            type="card"
            class="mx-auto"
            :width="ismobile ? 'auto' : 400"
          >
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
    <div class="column is-full">
      <v-row :class="ismobile ? 'mx-1' : 'mx-2'">
        <v-col cols="12">
          <div
            @click="$router.push('/gallery')"
            id="home-gallerytitle"
            :class="
              'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
          >
            {{ animatedArray.gallerytitle }}
            <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col :cols="ismobile ? 12 : 6">
          <v-hover v-slot="{ hover }">
            <v-card
              class="mx-1 px-0 my-1 py-0"
              :img="galleryLoading ? null : galleryData[0].links.regular"
              outlined
              :loading="galleryLoading"
              :max-width="
                ismobile
                  ? contextInfo.viewport.width -
                    contextInfo.viewport.width * 0.1
                  : (contextInfo.viewport.width -
                      contextInfo.viewport.width * 0.1) /
                    2
              "
              :height="
                ismobile
                  ? contextInfo.viewport.height -
                    contextInfo.viewport.height * 0.5
                  : (contextInfo.viewport.height -
                      contextInfo.viewport.height * 0.1) /
                    1.3
              "
            >
              <v-expand-transition>
                <v-card
                  v-if="hover"
                  outlined
                  :loading="galleryLoading"
                  :max-width="
                    ismobile
                      ? contextInfo.viewport.width -
                        contextInfo.viewport.width * 0.1
                      : (contextInfo.viewport.width -
                          contextInfo.viewport.width * 0.1) /
                        2
                  "
                  :max-height="
                    ismobile
                      ? contextInfo.viewport.height -
                        contextInfo.viewport.height * 0.5
                      : (contextInfo.viewport.height -
                          contextInfo.viewport.height * 0.1) /
                        1.3
                  "
                  class="transition-fast-in-fast-out v-card--reveal"
                >
                  <v-card-subtitle class="my-1 py-0 text-h6 font-weight-bold">
                    {{ galleryLoading ? ' ' : galleryData[0].description }}
                  </v-card-subtitle>
                  <v-card-subtitle class="my-1 py-0">
                    {{ galleryLoading ? ' ' : 'by ' + galleryData[0].by.user }}
                    <v-avatar v-if="!galleryLoading" size="25">
                      <v-img :src="galleryData[0].by.profilePic"> </v-img>
                    </v-avatar>
                  </v-card-subtitle>
                  <v-card-text v-if="!galleryLoading">
                    <div class="text text-overline font-weight-bold">
                      Posted on:
                      {{ galleryData[0].createdAt | moment('DD of MMM, YY') }}
                    </div>
                    <v-btn
                      text
                      color="primary"
                      @click="gotoUrl(galleryData[0].originalUrl)"
                    >
                      See Post
                    </v-btn>
                    <v-btn icon @click="gotoUrl(galleryData[0].downloadLink)">
                      <v-icon>mdi-download</v-icon>
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
        <v-col
          v-for="m in ismobile ? 1 : 2"
          v-bind:key="m"
          :cols="ismobile ? 12 : 3"
        >
          <v-hover v-for="n in 2" v-bind:key="n" v-slot="{ hover }">
            <v-card
              :img="
                galleryLoading
                  ? null
                  : galleryData[m == 2 ? m + n : m + n - 1].links.regular
              "
              class="mx-1 px-0 my-1 py-0"
              outlined
              :loading="galleryLoading"
              :max-width="
                ismobile
                  ? contextInfo.viewport.width -
                    contextInfo.viewport.width * 0.1
                  : (contextInfo.viewport.width -
                      contextInfo.viewport.width * 0.1) /
                    4
              "
              :height="
                ismobile
                  ? contextInfo.viewport.height -
                    contextInfo.viewport.height * 0.5
                  : (contextInfo.viewport.height -
                      contextInfo.viewport.height * 0.1) /
                    (m == 1 ? (n == 1 ? 2.1 : 3.6) : n == 1 ? 3.6 : 2.1)
              "
            >
              <v-expand-transition>
                <v-card
                  v-if="hover"
                  outlined
                  :loading="galleryLoading"
                  :max-width="
                    ismobile
                      ? contextInfo.viewport.width -
                        contextInfo.viewport.width * 0.1
                      : (contextInfo.viewport.width -
                          contextInfo.viewport.width * 0.1) /
                        4
                  "
                  :max-height="
                    ismobile
                      ? contextInfo.viewport.height -
                        contextInfo.viewport.height * 0.5
                      : (contextInfo.viewport.height -
                          contextInfo.viewport.height * 0.1) /
                        (m == 1 ? (n == 1 ? 2.1 : 3.6) : n == 1 ? 3.6 : 2.1)
                  "
                  class="transition-fast-in-fast-out v-card--reveal"
                >
                  <v-card-subtitle class="my-1 py-0 text-h6 font-weight-bold">
                    {{
                      galleryLoading
                        ? ' '
                        : galleryData[m == 2 ? m + n : m + n - 1].description
                    }}
                  </v-card-subtitle>
                  <v-card-subtitle class="my-1 py-0">
                    {{
                      galleryLoading
                        ? ' '
                        : 'by ' +
                          galleryData[m == 2 ? m + n : m + n - 1].by.user
                    }}
                    <v-avatar v-if="!galleryLoading" size="25">
                      <v-img
                        :src="
                          galleryData[m == 2 ? m + n : m + n - 1].by.profilePic
                        "
                      >
                      </v-img>
                    </v-avatar>
                  </v-card-subtitle>
                  <v-card-text v-if="!galleryLoading">
                    <div class="text text-overline font-weight-bold">
                      Posted on:
                      {{
                        galleryData[m == 2 ? m + n : m + n - 1].createdAt
                          | moment('DD of MMM, YY')
                      }}
                    </div>
                    <v-btn
                      text
                      color="primary"
                      @click="
                        gotoUrl(
                          galleryData[m == 2 ? m + n : m + n - 1].originalUrl,
                        )
                      "
                    >
                      See Post
                    </v-btn>
                    <v-btn
                      icon
                      color="primary"
                      @click="
                        gotoUrl(
                          galleryData[m == 2 ? m + n : m + n - 1].downloadLink,
                        )
                      "
                    >
                      <v-icon>mdi-download</v-icon>
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
    <div class="column is-full">
      <v-container id="home-emailme">
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
        id="home-feedbacktitile"
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
import { stories, gallery } from '@p/backend';
import { projects } from '@p/resources/github';
import { channel_data, videos } from '@p/resources/youtube';
import { breakingBad } from '@p/resources/quotes';
import { latestLaunches } from '@p/resources/spacex';
import { apod } from '@p/resources/nasa';
import gsap from '@p/gsap';
import { generateRandomEmojis, generateWordMaps } from '@p/wordmap';
import { scrollTo, getOs, getViewport, ismobile } from '@p/helpers';
export default {
  metaInfo: function () {
    return {
      title: 'Home',
    };
  },
  data: function () {
    return {
      user: 'tks18',
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
      quotesLoading: false,
      quotesData: {},
      heroButtons: [
        {
          name: 'About Me',
          icon: 'mdi-information-variant',
          id: 'home-abouttitle',
        },
        {
          name: 'What i Do',
          icon: 'mdi-console-network',
          id: 'home-whatiDo',
        },
        {
          name: 'My Blog',
          icon: 'mdi-post-outline',
          id: 'home-blogtitle',
        },
        {
          name: 'Some Extras',
          icon: 'mdi-one-up',
          id: 'home-astroPicTitle',
        },
        {
          name: 'Projects',
          icon: 'mdi-projector-screen',
          id: 'home-projtitle',
        },
        {
          name: 'Contact Me',
          icon: 'mdi-contactless-payment',
          id: 'home-feedbacktitile',
        },
      ],
      projects: {
        loading: false,
        projects: {},
      },
      channel: {
        loading: true,
        data: {},
        videos: [],
      },
      ytdialog: false,
      channel_elevation: 2,
      contextInfo: {
        os: getOs(),
        viewport: getViewport(),
      },
      toggleTooltip: false,
      galleryMaxWidth: 0,
      galleryLoading: true,
      apodData: {},
      apodLoading: true,
      launchloading: true,
      launchData: {},
      galleryData: [],
      showw: false,
      mailtoLink:
        'mailto:me@shaaan.tk?subject=Contacting%20You%20from%20Website&body=Hey%20there%20!%0D%0A%0D%0A',
      githubPhoto:
        'https://i.ibb.co/C6Y6Rwt/6efb9bc5d143-article-190612-github-body-text.webp',
      emailType: 'info',
      animatedArray: {
        blog: ' ',
        stories: ' ',
        about: ' ',
        whatiDo: ' ',
        stat: ' ',
        projtitle: ' ',
        channel_title: ' ',
        gallerytitle: ' ',
        randEmoji: ' ',
        contactTitle: ' ',
        feedBack: ' ',
        spacextitle: ' ',
        astroPicTitle: ' ',
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
    loopRandEmoji() {
      gsap.tweenTo({
        vm: this,
        emoji: true,
        arrayName: 'animatedArray',
        map: generateRandomEmojis(3),
        arrayProperty: 'randEmoji',
      });
      setTimeout(() => {
        this.toggleTooltip = false;
      }, 5000);
    },
    async getStories() {
      let storydata = await stories.get();
      if (storydata.success && storydata.stories) {
        this.stories.site = storydata.website;
        this.stories.data = storydata.stories;
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
    async getChannelData() {
      this.$set(this.channel, 'loading', true);
      let channel_data_response = await channel_data(
        'UCD0rffboMQCgIggZJWDivjg',
      );
      if (channel_data_response.success && !channel_data_response.error) {
        let data = channel_data_response.data.items[0];
        this.$set(this.channel, 'data', data);
        this.$set(this.channel, 'loading', false);
      }
    },
    async getChannelVideos() {
      this.$set(this.channel, 'loading', true);
      let video_response = await videos();
      if (video_response.success && !video_response.error) {
        let videos = video_response.data.items;
        let new_video_array = [];
        videos.forEach((video, index) => {
          let new_video = video;
          new_video['model'] = false;
          new_video['index'] = index;
          new_video_array.push(new_video);
        });
        console.log(new_video_array);
        this.$set(this.channel, 'videos', new_video_array);
        this.$set(this.channel, 'loading', false);
      }
    },
    async getQuotes() {
      const quotes = await breakingBad();
      if (quotes.success && quotes.data != null) {
        this.quotesData = quotes.data[0];
        this.quotesLoading = false;
      } else {
        this.quotesLoading = true;
      }
    },
    async getNasaApod() {
      const apodData = await apod();
      if (apodData.success) {
        this.apodData = apodData.data.data;
        this.apodLoading = false;
      } else {
        this.apodLoading = true;
        this.apodData = {};
      }
    },
    async getLaunchNews() {
      const launchdata = await latestLaunches();
      if (launchdata.success && launchdata.data != null) {
        this.launchData = launchdata.data;
        this.launchloading = false;
      } else {
        this.launchdata = {};
        this.launchloading = true;
      }
    },
    async getProjects() {
      let projectsData = await projects(this.ismobile, this.user);
      if (projectsData.success && projectsData.data != null) {
        this.$set(this.projects, 'loading', false);
        this.$set(
          this.projects,
          'projects',
          this.ismobile ? projectsData.data.slice(0, 2) : projectsData.data,
        );
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
    },
    async getGalleryPics() {
      const galleryData = await gallery.get();
      if (galleryData.success) {
        let shuffledPics = galleryData.data.slice(0, 5);
        shuffledPics.forEach((pic) => {
          this.galleryData.push({
            description: pic.description,
            createdAt: pic.created_at,
            color: pic.color,
            links: {
              thumb: pic.urls.thumb,
              regular: pic.urls.regular,
              full: pic.urls.full,
            },
            originalUrl: pic.links.html,
            downloadLink: pic.links.download,
            by: {
              user: pic.user.username,
              name: pic.user.first_name,
              profilePic: pic.user.profile_image.medium,
            },
          });
          this.galleryLoading = false;
        });
      } else {
        this.galleryLoading = true;
        this.$notify({
          group: 'main',
          type: 'error',
          duration: 5000,
          title: 'Gallery Error',
          text:
            'Error While Getting Gallery Photos from the Server. Please Reload the Website to Get the Data',
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
    yt_video_model(video) {
      if (this.channel.videos[video.index].model) {
        this.$set(this.channel.videos[video.index], 'model', false);
      } else {
        this.$set(this.channel.videos[video.index], 'model', true);
      }
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
    initiateObservers() {
      gsap.tweenToObserver({
        vm: this,
        elem: '#home-whatiDo',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('what i do'),
        arrayProperty: 'whatiDo',
      });
      gsap.tweenToObserver({
        vm: this,
        elem: '#home-storytitle',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('Stories'),
        arrayProperty: 'stories',
      });
      gsap.tweenToObserver({
        vm: this,
        elem: '#home-abouttitle',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('About me'),
        arrayProperty: 'about',
      });
      gsap.tweenToObserver({
        vm: this,
        elem: '#home-projtitle',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('Projects'),
        arrayProperty: 'projtitle',
      });
      gsap.tweenToObserver({
        vm: this,
        elem: '#home-astroPicTitle',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('Astro Pic of the Day'),
        arrayProperty: 'astroPicTitle',
      });
      gsap.tweenToObserver({
        vm: this,
        elem: '#home-spacextitle',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('Spacex News'),
        arrayProperty: 'spacextitle',
      });
      gsap.tweenToObserver({
        vm: this,
        elem: '#home-channel-title',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('Youtube'),
        arrayProperty: 'channel_title',
      });
      gsap.tweenToObserver({
        vm: this,
        elem: '#home-gallerytitle',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('Galleria'),
        arrayProperty: 'gallerytitle',
      });
      gsap.tweenToObserver({
        vm: this,
        elem: '#home-blogtitle',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('My Blog'),
        arrayProperty: 'blog',
      });
      gsap.tweenToObserver({
        vm: this,
        elem: '#home-feedbacktitile',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('Submit Your Feedback'),
        arrayProperty: 'feedBack',
      });
    },
    fetchApiS() {
      this.getQuotes();
      this.getNasaApod();
      this.getLaunchNews();
      this.getProjects();
      this.getChannelData();
      this.getChannelVideos();
      this.getStories();
      this.getGalleryPics();
    },
    render() {
      this.loopRandEmoji();
      this.initiateObservers();
      this.fetchApiS();
      console.log(
        this.contextInfo.viewport.width,
        this.contextInfo.viewport.height,
      );
      setTimeout(() => {
        this.toggleTooltip = true;
      }, 2000);
    },
  },
  computed: {
    ismobile() {
      return ismobile();
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
  },
  mounted() {
    this.render();
  },
};
</script>
