<template>
  <div class="columns is-multiline">
    <div class="column is-full">
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
              <div class="column has-text-centered is-half ma-2">
                <v-avatar :size="ismobile ? 250 : 380">
                  <v-img :src="heroData.image" alt="Main Image" />
                </v-avatar>
              </div>
            </div>
          </div>
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
                  <v-btn color="primary">
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
    <div class="column is-full my-2 py-0">
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            align="center"
            justify="center"
            class="mx-2 my-1 py-0 non-touch"
          >
            <v-row class="my-2" id="lifetime">
              <v-tooltip top transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-row v-ripple v-bind="attrs" v-on="on">
                    <v-col
                      :cols="ismobile ? 12 : 6"
                      :align="ismobile ? 'center' : 'end'"
                      :class="
                        (ismobile ? 'text-body-2' : 'text-h6') +
                        ' text my-1 py-0 font-weight-bold'
                      "
                    >
                      Time Travelling for 🤙 xD
                    </v-col>
                    <v-col
                      :cols="ismobile ? 12 : 6"
                      :align="ismobile ? 'center' : 'start'"
                      :class="
                        (ismobile ? 'text-body-2' : 'text-h6') +
                        ' text my-1 py-0 primary--text font-weight-bold'
                      "
                    >
                      {{
                        new Intl.NumberFormat().format(
                          lifeTimeCountDown.years.toFixed(0),
                        ) + 'Y :'
                      }}
                      {{
                        new Intl.NumberFormat().format(
                          lifeTimeCountDown.weeks.toFixed(0),
                        ) + 'W :'
                      }}
                      {{
                        new Intl.NumberFormat().format(
                          lifeTimeCountDown.days.toFixed(0),
                        ) + 'D :'
                      }}
                      {{
                        new Intl.NumberFormat().format(
                          lifeTimeCountDown.hours.toFixed(0),
                        ) + 'H :'
                      }}
                      {{
                        new Intl.NumberFormat().format(
                          lifeTimeCountDown.minutes.toFixed(0),
                        ) + 'M :'
                      }}
                      {{
                        new Intl.NumberFormat().format(
                          lifeTimeCountDown.seconds.toFixed(0),
                        ) + 'S'
                      }}
                    </v-col>
                  </v-row>
                </template>
                <span> Counting from my Birthday 16th May, 2000 </span>
              </v-tooltip>
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
                  <v-card>
                    <v-img
                      :max-height="ismobile ? null : 150"
                      :max-width="ismobile ? null : 250"
                      :src="githubPhoto"
                    ></v-img>
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
                            @click="windowClick(project.license.url)"
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
                            @click="windowClick(project.html_url)"
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
                                <v-btn block color="primary" rounded>
                                  <v-icon small>mdi-folder-star</v-icon> Project
                                  Breif
                                </v-btn>
                              </v-col>
                              <v-col cols="6">
                                <v-btn small block rounded color="primary">
                                  <v-icon small>mdi-web</v-icon> Website
                                </v-btn>
                              </v-col>
                              <v-col cols="6">
                                <v-btn small block rounded color="primary">
                                  <v-icon small>mdi-git</v-icon> Git
                                </v-btn>
                              </v-col>
                              <v-col cols="12">
                                <v-btn block rounded color="primary">
                                  <v-icon small>mdi-github</v-icon> on Github
                                </v-btn>
                              </v-col>
                              <v-col cols="6">
                                <v-btn color="primary" block small rounded>
                                  <v-icon small>mdi-webpack</v-icon> Api
                                </v-btn>
                              </v-col>
                              <v-col cols="6">
                                <v-btn color="primary" block small rounded>
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
      <div
        id="feedbacktitile"
        :class="
          'text-center text-capitalize '+ (ismobile ? 'text-h6' : 'text-h4') +' font-weight-bold my-2' 
        "
      >
        {{ animatedArray.feedBack }}
      </div>
      <v-parallax
        src="https://media.giphy.com/media/vy0dT6fL4LYhoY1856/giphy-downsized-large.gif"
      >
        <div class="hero is-large">
          <div :class="'hero-body '+ (ismobile ? 'ma-1 pa-1' : '')">
            <div class="content">
              <div :class="'columns is-multiline is-centered is-vcentered '+(ismobile ? 'ma-1 pa-1' : 'ma-4 pa-4')">
                <div :class="'column '+ (ismobile ? 'is-12' : 'is-9')">
                  <div
                    class="columns is-multiline is-centered is-vcentered back-blur-hard"
                  >
                    <div class="column is-full">
                      <v-text-field
                        prepend-icon="mdi-form-textbox"
                        dense
                        :persistent-hint="true"
                        hint="Your Name"
                        label="Enter Your Name"
                        hide-details="auto"
                        outlined
                      ></v-text-field>
                    </div>
                    <div class="column is-full">
                      <v-text-field
                        prepend-icon="mdi-email"
                        dense
                        :persistent-hint="true"
                        hint="Your Email"
                        label="Enter Your Email ID"
                        hide-details="auto"
                        outlined
                      ></v-text-field>
                    </div>
                    <div class="column is-full">
                      <v-textarea
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
                    </div>
                  </div>
                </div>
                <div class="column is-9 mt-0 pt-1 mb-3">
                  <v-row align="center">
                    <v-col cols="6" align="right">
                      <v-btn color="primary">
                        <v-icon>mdi-cards-heart</v-icon>
                        Submit
                      </v-btn>
                    </v-col>
                    <v-col cols="6" align="left">
                      <v-btn color="error">
                        <v-icon>mdi-heart-broken</v-icon>
                        Cancel
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-parallax>
    </div>
  </div>
</template>

<script>
import { lettersArray, safeEmojis } from '../templates/emoji-array';
import { scrollTo, countUpFromTime } from '../plugins/helpers';
export default {
  data: function () {
    return {
      heroData: {
        title: 'Hello There !',
        image: 'https://i.ibb.co/GTcS2kb/profile.png',
        subtitle: `<div class="text-overline">This is <span class="primary--text font-weight-black">Sudharshan TK</span> A.K.A <span class="primary--text font-weight-black">(Shan.tk)</span>.</div><span class="text-body-1">I Create Elegant, Modern, Sleeky UI's. I Love Javascript, Nodejs & Flutter. Its Been a Great Journey for the Past 3 Years of Self-learning Web development and Creating Amazing Websites. Currently Focussing More on Backend Development Like Nodejs and Django. I Also Know Android Debugging and Rom Development to Some Extent.I am Pursuing Chartered Accountancy Course as my Profession.`,
        rounded: true,
        buttonUrl: '/about',
        buttontext: 'Contact Me !',
      },
      letters: lettersArray,
      birthday: false,
      projects: {
        loading: false,
        projects: {},
      },
      toggleTooltip: true,
      githubPhoto:
        'https://portswigger.net/cms/images/54/14/6efb9bc5d143-article-190612-github-body-text.jpg',
      lifeTimeCountDown: {
        years: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      animatedArray: {
        blog: '',
        about: '',
        stat: '',
        projtitle: '',
        randEmoji: '',
        contactTitle: '',
        feedBack: '',
      },
      aboutData: {
        image: 'https://i.ibb.co/VVxzT9s/profile-2.jpg',
      },
    };
  },
  methods: {
    windowClick(url) {
      window.open(url);
      return;
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
      let handleIntersect = (entries, observer) => {
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
    lifeTimeCounter(elem) {
      let observer;
      let target = document.querySelector(elem);
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      };
      let handleIntersect = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let newVals = countUpFromTime('May 16, 2000 16:21:00');
            let tl = this.$gsap.timeline();
            for (const [key] of Object.entries(this.lifeTimeCountDown)) {
              tl.to(this.$data.lifeTimeCountDown, {
                [key]: newVals[key],
                duration: 0.8,
              });
            }
            setTimeout(() => {
              setInterval(() => {
                this.lifeTimeCountDown = countUpFromTime(
                  'May 16, 2000 16:21:00',
                );
              }, 1000);
            }, 3800);
          }
        });
      };
      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(target);
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
            this.$set(this.projects, 'loading', false);
            this.$set(this.projects, 'projects', {});
          }
        })
        .catch((e) => {
          this.$set(this.projects, 'loading', false);
          this.$set(this.projects, 'projects', {});
        });
    },
    render() {
      this.loopRandEmoji();
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
      this.lifeTimeCounter('#lifetime');
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
          initial: [42, 46, 40, 1, 32, 45, 14, 42, 46, 40, 1, 32, 45, 14, 42, 46, 40, 1, 32, 45],
        }
      };
    },
  },
  mounted() {
    this.render();
  },
};
</script>
