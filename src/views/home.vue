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
                    <template #activator="{ on, attrs }">
                      <span
                        v-bind="attrs"
                        class="fit-text non-touch point-cursor"
                        v-on="on"
                        @click="loopRandEmoji()"
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
                    :key="index"
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
                      raised
                      outlined
                      @click="$vuetify.goTo('#' + button.id)"
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
                      raised
                      outlined
                      @click="$vuetify.goTo('#home-feedbacktitle')"
                    >
                      <v-icon> mdi-alarm-bell </v-icon>
                      Contact Me
                    </v-btn>
                  </v-col>
                  <v-col cols="6" align="left">
                    <v-btn
                      elevation="24"
                      text
                      raised
                      outlined
                      @click="$vuetify.goTo('#home-emailme')"
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
              :class="
                'text point-cursor text-center text-capitalize ma-0 pa-0 text-h4 font-weight-black ' +
                ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
              "
              @click="
                $router.push({
                  name: 'About',
                  params: { scroll: true, scrollid: '#about-languagesknown' },
                })
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
                :key="index"
                top
                transition="slide-y-transition"
              >
                <template #activator="{ on, attrs }">
                  <v-col
                    v-ripple
                    v-bind="attrs"
                    :cols="ismobile ? 5 : 2"
                    align="center"
                    :class="
                      (ismobile ? 'mx-1 my-1' : 'mx-3 my-2') + ' point-cursor'
                    "
                    justify="center"
                    v-on="on"
                  >
                    <v-row align="center">
                      <v-col align="center" justify="center">
                        <v-img
                          :max-width="ismobile ? 80 : 110"
                          :src="'/assets/icons/creator/' + activity.asset"
                        />
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
            :class="
              'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
            @click="gotoUrl('https://webstories.shaaan.tk')"
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
          :key="n"
          class="scrollable-x-child column ma-0 pa-0 non-touch"
        >
          <v-skeleton-loader
            class="mx-auto"
            :width="ismobile ? 225 : 250"
            :height="ismobile ? 300 : 325"
            type="card"
          />
        </div>
      </div>
      <div
        v-if="!stories.loading"
        class="scrollable-x columns ma-2 pa-1 is-vcentered is-mobile"
      >
        <div
          v-for="(story, index) in stories.data"
          :key="index"
          class="scrollable-x-child column ma-0 pa-0 non-touch"
        >
          <v-card
            v-ripple
            elevation="6"
            class="mx-2"
            :style="{
              background: 'center',
              backgroundImage: 'url(' + stories.site + story.asset + ')',
              backgroundSize: 'cover',
            }"
            :width="ismobile ? 225 : 250"
            :height="ismobile ? 300 : 325"
            @click="gotoUrl(stories.site + story.link)"
          >
            <v-card-text class="inherit-height-responsive">
              <v-row align="start" justify="start" class="back-blur-no-inherit">
                <v-col cols="2" class="mx-1 pa-0">
                  <v-avatar size="30">
                    <v-img src="https://i.ibb.co/X4BknVG/DJI-0793-1.webp" />
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
            id="home-blogtitle"
            :class="
              'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
            @click="$router.push('/blog')"
          >
            {{ animatedArray.blog }} <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col align="end" justify="start" class="mr-4">
          <v-btn icon color="primary" @click="swipeLeft('posts')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn icon color="primary" @click="swipeRight('posts')">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <div
        ref="posts"
        class="scrollable-x columns ma-2 pa-1 is-vcentered is-mobile"
      >
        <div
          v-for="n in 10"
          :key="n"
          class="scrollable-x-child column ma-0 pa-0 non-touch point-cursor"
        >
          <v-hover>
            <template #default="{ hover }">
              <v-card
                v-ripple
                elevation="3"
                class="mx-2"
                :width="ismobile ? 225 : 250"
                :height="ismobile ? 300 : 325"
              >
                <v-card>
                  <v-img
                    src="https://i.ibb.co/BftbgSg/download-force-true-w-1920.jpg"
                  />
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
                        <v-spacer />
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
              id="home-abouttitle"
              :class="
                'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
                ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
              "
              @click="$router.push('/about')"
            >
              {{ animatedArray.about }} <v-icon>mdi-arrow-right-circle</v-icon>
            </div>
          </v-col>
          <v-col cols="12" class="my-0 py-0">
            <v-row align="center" justify="center">
              <v-col :cols="ismobile ? 12 : 9" align="start" justify="center">
                <v-row align="start" justify="start" class="my-0 py-0">
                  <!-- eslint-disable vue/no-v-html -->
                  <div
                    class="text font-weight-semibold mx-2 px-2"
                    v-html="heroData.subtitle"
                  />
                </v-row>
                <v-row align="end" justify="end" class="my-1 mx-2 px-2 py-1">
                  <v-btn
                    color="primary"
                    @click="
                      $router.push({
                        name: 'About',
                        params: {
                          scroll: true,
                          scrollid: '#about-aboutmecard',
                        },
                      })
                    "
                  >
                    <v-icon left>mdi-text-box-multiple</v-icon>Read More
                  </v-btn>
                </v-row>
              </v-col>
              <v-col
                v-if="!ismobile"
                class="my-0 py-0"
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
                  <v-img :src="aboutData.image" />
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
          <template #activator="{ on, attrs }">
            <v-card
              :loading="quotesLoading"
              img="https://i.ibb.co/0nf9FwS/bb-3.webp"
              class="mx-auto non-touch"
              light
              v-bind="attrs"
              max-width="600"
              v-on="on"
              @click="gotoUrl('https://www.imdb.com/title/tt0903747/')"
            >
              <v-card-text
                v-if="!quotesLoading"
                class="inherit-height-responsive"
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
            id="home-projtitle"
            :class="
              'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
            @click="$router.push('/projects')"
          >
            {{ animatedArray.projtitle }}
            <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col v-if="projects.loading" cols="12">
          <v-row>
            <v-col v-for="n in ismobile ? 1 : 5" :key="n">
              <v-card>
                <v-skeleton-loader class="mx-auto" type="card" />
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row v-if="!projects.loading" class="mx-2 non-touch">
            <v-col
              v-for="(project, index) in projects.projects"
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
                    <v-img :src="!apodLoading ? apodData.hdurl : null" />
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
            id="home-spacextitle"
            :class="
              'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
            @click="$router.push('/spacex')"
          >
            {{ animatedArray.spacextitle }}
            <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="text-body-1 ml-4">
            SpaceX is the innovative and ambitious private aerospace
            manufacturer founded in 2002 by Elon Musk. SpaceX truly earned its
            place among the aeronautical elite—and changed the economics of
            space flight­—by making its reusable rocket system seemingly as
            reliable as the sunrise. We will Soon have a Dedicated Page for
            Spacex and Elon Musk (Really Sooon).
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
                          <template #activator="{ on, attrs }">
                            <v-icon
                              v-bind="attrs"
                              :color="launchData.success ? 'success' : 'error'"
                              v-on="on"
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
                          outlined
                          ripple
                          class="mx-1"
                          small
                          color="orange"
                          @click="gotoUrl(launchData.links.reddit.campaign)"
                        >
                          <v-icon small left>mdi-reddit</v-icon>
                          Campaign
                        </v-chip>
                        <v-chip
                          outlined
                          ripple
                          class="mx-1"
                          small
                          color="orange"
                          @click="gotoUrl(launchData.links.reddit.launch)"
                        >
                          <v-icon small left> mdi-reddit </v-icon>
                          Launch
                        </v-chip>
                        <v-chip
                          outlined
                          ripple
                          class="mx-1"
                          small
                          color="orange"
                          @click="gotoUrl(launchData.links.reddit.media)"
                        >
                          <v-icon small left> mdi-reddit </v-icon>
                          Media
                        </v-chip>
                        <v-chip
                          outlined
                          ripple
                          class="mx-1"
                          small
                          color="orange"
                          @click="gotoUrl(launchData.links.reddit.recovery)"
                        >
                          <v-icon small left> mdi-reddit </v-icon>
                          Recovery
                        </v-chip>
                      </div>
                      <div>
                        <v-chip
                          ripple
                          small
                          color="red"
                          outlined
                          class="mx-1"
                          @click="gotoUrl(launchData.links.webcast)"
                        >
                          <v-icon small left> mdi-youtube </v-icon>
                          Watch Webcast
                        </v-chip>
                        <v-chip
                          rounded
                          small
                          outlined
                          class="mx-1"
                          color="primary"
                          @click="gotoUrl(launchData.links.article)"
                        >
                          <v-icon small left> mdi-text-box-search</v-icon>
                          Article
                        </v-chip>
                        <v-chip
                          rounded
                          small
                          outlined
                          class="mx-1"
                          color="primary"
                          @click="gotoUrl(launchData.links.wikipedia)"
                        >
                          <v-icon small left> mdi-wikipedia</v-icon> wiki
                        </v-chip>
                        <v-chip
                          rounded
                          small
                          outlined
                          class="mx-1"
                          color="primary"
                          @click="$router.push('/spacex/' + launchData.id)"
                        >
                          <v-icon small left>
                            mdi-file-document-outline
                          </v-icon>
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
                    <v-img :src="launchData.links.flickr.original[0]" />
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions v-if="!launchloading" class="mx-2">
                <v-spacer />
                <v-tooltip top transition="slide-x-transition">
                  <template #activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      color="primary"
                      icon
                      @click="gotoUrl(launchData.links.flickr.original[0])"
                      v-on="on"
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
            id="home-channel-title"
            :class="
              'clip-text-back text-h5 point-cursor ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
            @click="$router.push('/gallery')"
          >
            {{ animatedArray.channel_title }}
            <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col v-if="!channel.loading" cols="12">
          <v-row align="center" :justify="ismobile ? 'center' : null">
            <v-col :cols="ismobile ? 8 : 2" align="center">
              <v-card
                :elevation="channel_elevation"
                :height="ismobile ? '' : contextInfo.viewport.height * 0.47"
                outlined
                ripple
                class="point-cursor"
                align="center"
                justify="center"
                @mouseover="channel_elevation = 18"
                @mouseout="channel_elevation = 3"
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
                        />
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
                        color="#C4302B"
                        dark
                        @click="
                          gotoUrl(
                            'https://youtube.com/channel/' + channel.data.id,
                          )
                        "
                      >
                        Subscribe <v-icon right>mdi-youtube</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col v-if="channel.videos.length > 0" :cols="ismobile ? 12 : 10">
              <v-row align="center">
                <v-slide-group :show-arrows="!ismobile">
                  <v-slide-item
                    v-for="(video, index) in channel.videos"
                    :key="index"
                    class="mx-2"
                  >
                    <v-hover>
                      <template #default="{ hover }">
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
                                <v-spacer />
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
                            v-model="video.model"
                            fullscreen
                            hide-overlay
                            transition="dialog-bottom-transition"
                          >
                            <v-card>
                              <v-card-title>
                                <v-row align="center">
                                  <v-col :cols="ismobile ? 10 : 8" align="left">
                                    <v-icon color="#C4302B" class="mx-1">
                                      mdi-youtube
                                    </v-icon>
                                    Youtube Player
                                  </v-col>
                                  <v-col :cols="ismobile ? 2 : 4" align="right">
                                    <v-btn icon @click="yt_video_model(video)">
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
                                    />
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
                                        fab
                                        large
                                        @click="yt_video_model(video)"
                                      >
                                        <v-icon large> mdi-youtube </v-icon>
                                      </v-btn>
                                    </v-col>
                                    <v-col cols="12" align="center">
                                      <v-btn color="primary">
                                        Visit my Channel
                                        <v-icon right>
                                          mdi-television-classic
                                        </v-icon>
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
        <v-col v-if="channel.loading" cols="12" align="center">
          <v-skeleton-loader
            type="card"
            class="mx-auto"
            :width="ismobile ? 'auto' : 400"
          />
        </v-col>
      </v-row>
    </div>
    <div class="column is-full">
      <v-row :class="ismobile ? 'mx-1' : 'mx-2'">
        <v-col cols="12">
          <div
            id="home-gallerytitle"
            :class="
              'clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize' +
              ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
            "
            @click="$router.push('/gallery')"
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
                      <v-img :src="galleryData[0].by.profilePic" />
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
        <v-col v-for="m in ismobile ? 1 : 2" :key="m" :cols="ismobile ? 12 : 3">
          <v-hover v-for="n in 2" :key="n" v-slot="{ hover }">
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
                      />
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
          v-ripple
          dense
          text
          outlined
          class="non-touch point-cursor"
          :type="emailType"
          @click="handleEmailClick('me@shaaan.tk')"
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
        id="home-feedbacktitle"
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
                    />
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
                    />
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
                    />
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
  metaInfo: () => {
    return {
      title: 'Home',
    };
  },
  data: () => {
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
  computed: {
    ismobile() {
      return ismobile();
    },
    heroButtons() {
      return [
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
          id: 'home-feedbacktitle',
        },
      ];
    },
    observersMap() {
      return [
        {
          elem: '#home-whatiDo',
          map_word: 'what i do',
          prop: 'whatiDo',
        },
        {
          elem: '#home-storytitle',
          map_word: 'Stories',
          prop: 'stories',
        },
        {
          elem: '#home-abouttitle',
          map_word: 'About me',
          prop: 'about',
        },
        {
          elem: '#home-projtitle',
          map_word: 'Projects',
          prop: 'projtitle',
        },
        {
          elem: '#home-astroPicTitle',
          map_word: 'Astro Pic of the day',
          prop: 'astroPicTitle',
        },
        {
          elem: '#home-spacextitle',
          map_word: 'Spacex News',
          prop: 'spacextitle',
        },
        {
          elem: '#home-channel-title',
          map_word: 'Youtube',
          prop: 'channel_title',
        },
        {
          elem: '#home-gallerytitle',
          map_word: 'Galleria',
          prop: 'gallerytitle',
        },
        {
          elem: '#home-blogtitle',
          map_word: 'My Blog',
          prop: 'blog',
        },
        {
          elem: '#home-feedbacktitle',
          map_word: 'Submit your feedback',
          prop: 'feedBack',
        },
      ];
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
      const storydata = await stories.get();
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
      const channel_data_response = await channel_data(
        'UCD0rffboMQCgIggZJWDivjg',
      );
      if (channel_data_response.success && !channel_data_response.error) {
        const data = channel_data_response.data.items[0];
        this.$set(this.channel, 'data', data);
        this.$set(this.channel, 'loading', false);
      }
    },
    async getChannelVideos() {
      this.$set(this.channel, 'loading', true);
      const video_response = await videos();
      if (video_response.success && !video_response.error) {
        const videos = video_response.data.items;
        const new_video_array = [];
        videos.forEach((video, index) => {
          const new_video = video;
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
      const projectsData = await projects(this.ismobile, this.user);
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
        const shuffledPics = galleryData.data.slice(0, 5);
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
      if (this.observersMap) {
        this.observersMap.forEach((observer) => {
          gsap.tweenToObserver({
            vm: this,
            elem: observer.elem,
            emoji: false,
            arrayName: 'animatedArray',
            map: generateWordMaps(observer.map_word),
            arrayProperty: observer.prop,
          });
        });
      }
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
      setTimeout(() => {
        this.toggleTooltip = true;
      }, 2000);
    },
  },
};
</script>
