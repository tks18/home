<template>
  <div class="columns is-multiline non-touch">
    <div
      id="about-aboutMeTitle"
      :class="
        'column is-full text-center text-capitalize text font-weight-bold mt-3 mb-0 pb-0 ' +
        (ismobile ? 'text-h5' : 'text-h4')
      "
    >
      {{ animatedArray.title }}
    </div>
    <a-some-word-component
      :ismobile="ismobile"
      :author-data="authorData"
      :title="animatedArray.someWords"
    />
    <div class="column is-full py-1">
      <v-container class="my-2 mb-4">
        <v-row>
          <v-col cols="12" class="my-0 py-0">
            <a-profile-card-component
              :ismobile="ismobile"
              :author-data="authorData"
              :bgs="bgs"
              :goto-url="gotoUrl"
              :work-profile="workProfile"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col id="about-languagesknown" cols="12">
          <a-known-languages-component :ismobile="ismobile" />
        </v-col>
        <v-col id="about-moreStats" cols="12">
          <a-more-info-card-component :ismobile="ismobile" :swot="swot" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { generateWordMaps } from '@p/wordmap';
import authorData from '@t/authorData';
import { countUpFromTime, ismobile } from '@p/helpers';
import { tweenToObserver } from '@p/gsap';
import some_words_component from '@v/about/components/some-words-component';
import profile_card_component from '@v/about/components/profile-card-component';
import languages_known_component from '@v/about/components/language-known-component';
import more_info_card_component from '@v/about/components/more-info-card-component';

export default {
  name: 'About',
  metaInfo: () => ({
    title: 'About',
  }),
  components: {
    'a-some-word-component': some_words_component,
    'a-profile-card-component': profile_card_component,
    'a-known-languages-component': languages_known_component,
    'a-more-info-card-component': more_info_card_component,
  },
  data: () => ({
    swot: authorData.swot,
    authorData: {
      ...authorData.main,
      age: countUpFromTime('May 16, 2000 16:21:00').years,
    },
    bgs: authorData.bgs,
    workProfile: authorData.workProfile,
    animatedArray: {
      hashTag: ' ',
      title: ' ',
      someWords: ' ',
    },
  }),
  computed: {
    ismobile() {
      return ismobile();
    },
    observersMap() {
      return [
        {
          elem: '#about-aboutMeTitle',
          map_word: 'About me',
          prop: 'title',
        },
        {
          elem: '#about-someWordsTitle',
          map_word: 'Some Words',
          prop: 'someWords',
        },
      ];
    },
  },
  mounted() {
    this.check_scroll_callback();
    this.render();
  },
  methods: {
    gotoUrl(url) {
      window.open(url);
    },
    check_scroll_callback() {
      const router = this.$route;
      const { params } = router;
      if (params.scroll) {
        this.$vuetify.goTo(params.scrollid);
      }
    },
    initiateObservers() {
      if (this.observersMap) {
        this.observersMap.forEach((observer) => {
          tweenToObserver({
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
    render() {
      this.initiateObservers();
    },
  },
};
</script>

<style></style>
