<template>
  <div class="columns is-multiline">
    <h-hero-component :ismobile="ismobile" />
    <h-about-component :ismobile="ismobile" :title="animatedArray.about" />
    <h-what-i-do-component
      :ismobile="ismobile"
      :title="animatedArray.whatiDo"
    />
    <h-stories-component
      :ismobile="ismobile"
      :context-info="contextInfo"
      :title="animatedArray.stories"
      :goto-url="gotoUrl"
    />
    <!-- <h-blog-component
      :ismobile="ismobile"
      :goto-url="gotoUrl"
      :title="animatedArray.blog"
    /> -->
    <h-projects-component
      :ismobile="ismobile"
      :title="animatedArray.projtitle"
      :context-info="contextInfo"
      :goto-url="gotoUrl"
    />
    <h-youtube-component
      :ismobile="ismobile"
      :title="animatedArray.channel_title"
      :context-info="contextInfo"
      :goto-url="gotoUrl"
    />
    <h-gallery-component
      :ismobile="ismobile"
      :title="animatedArray.gallerytitle"
      :context-info="contextInfo"
      :goto-url="gotoUrl"
    />
    <h-feedback-component
      :title="animatedArray.feedBack"
      :ismobile="ismobile"
    />
  </div>
</template>

<script>
/* eslint-disable no-eval */

import gsap from '@p/gsap';
import { generateWordMaps } from '@p/wordmap';
import { getOs, getViewport, ismobile } from '@p/helpers';
import hero_component from '@v/home/components/hero-component';
import what_i_do_component from '@v/home/components/what-i-do-component';
import stories_component from '@v/home/components/stories-component';
// import blog_component from '@v/home/components/blog-component';
import about_component from '@v/home/components/about-component';
import projects_component from '@v/home/components/projects-component';
import youtube_component from '@v/home/components/youtube-component';
import gallery_component from '@v/home/components/gallery-component';
import feedback_component from '@v/home/components/feedback-component';

export default {
  name: 'Home',
  metaInfo: () => ({
    title: 'Sudharshan TK',
  }),
  components: {
    'h-hero-component': hero_component,
    'h-what-i-do-component': what_i_do_component,
    'h-stories-component': stories_component,
    // 'h-blog-component': blog_component,
    'h-about-component': about_component,
    'h-projects-component': projects_component,
    'h-youtube-component': youtube_component,
    'h-gallery-component': gallery_component,
    'h-feedback-component': feedback_component,
  },
  data: () => ({
    contextInfo: {
      os: getOs(),
      viewport: getViewport(),
    },
    animatedArray: {
      blog: ' ',
      stories: ' ',
      about: ' ',
      projtitle: ' ',
      channel_title: ' ',
      gallerytitle: ' ',
      contactTitle: ' ',
      feedBack: ' ',
      spacextitle: ' ',
      astroPicTitle: ' ',
    },
  }),
  computed: {
    ismobile() {
      return ismobile();
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
          elem: '#home-channel-title',
          map_word: 'Youtube',
          prop: 'channel_title',
        },
        {
          elem: '#home-gallerytitle',
          map_word: 'Photography',
          prop: 'gallerytitle',
        },
        {
          elem: '#home-feedbacktitle',
          map_word: 'Contact Me !',
          prop: 'feedBack',
        },
      ];
    },
  },
  mounted() {
    this.initiateObservers();
  },
  methods: {
    gotoUrl(url, self) {
      if (self) {
        window.open(url, '_self');
      } else {
        window.open(url);
      }
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
  },
};
</script>
