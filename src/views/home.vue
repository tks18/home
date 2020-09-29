<template>
  <div class="content">
    <div
      :class="
        'hero is-fullheight' +
        ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
      "
    >
      <div :class="'hero-body'+ (ismobile ? ' ma-1 px-0 py-3' : ' ma-2 pa-8')">
        <div class="container">
            <div
              class="columns is-multiline is-centered is-vcentered"
            >
              <div class="column is-half ma-0 pa-0">
                <transition :name="ismobile ? 'flip' : 'fadeLeft'" mode="out-in">
                <figure v-bind:key="heroImgKey">
                  <img :src="currentHeroImg.image" :class="currentHeroData.rounded ? 'border-max' : ' '" alt="Main Image" />
                </figure>
                </transition>
              </div>
              <div class="column is-half">
                <transition :name="ismobile ? 'flip' : 'fadeRight'" mode="out-in">
                <v-card v-bind:key="heroDatakey">
                  <div class="content text pa-4">
                    <div class="text-h4">
                      {{ currentHeroData.title }}
                    </div>
                    <div class="text-subtitle-1 font-weight-thin" v-html="currentHeroData.subtitle">
                    </div>
                    <v-btn class="mt-2" color="primary" @click="$router.push(currentHeroData.buttonUrl)">{{ currentHeroData.buttontext }}</v-btn>
                  </div>
                </v-card>
                </transition>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      heroData: [
        {
          title: 'Hello There !',
          subtitle:
            `<div class="text-overline">This is <span class="primary--text font-weight-black">Sudharshan TK</span> A.K.A <span class="primary--text font-weight-black">(Shan.tk)</span>.</div><br> <span class="text-body-1">I Create Elegant, Modern, Sleeky UI's. I Love Javascript, Nodejs & Flutter. Also I am Doing Chartered Accountancy Course as my Profession. <br><br></span><span class="text-overline">Feel Free to Contact Me !!</span>`,
          rounded: true,
          buttonUrl: '/about',
          buttontext: 'Contact Me !',
        },
        {
          title: 'Quick Note 😁',
          subtitle: `<div class="text-overline">Just Kiddin'... But Wait its True.</div><br><div class="text-body-2">I Love Taking Pics and Timelapses.</div><div class="text-subtitle-2">Visit My Gallery for Shots.</div>`,
          rounded: false,
          buttonUrl: '/gallery',
          buttontext: 'My Gallery',
        },
      ],
      heroImg: [
        {image:'https://i.ibb.co/GTcS2kb/profile.png'},
        {image: 'https://i.ibb.co/99mQNQj/profile-2-nobg.png',}
      ],
      currentHeroImg: {},
      currentHeroData: {},
      heroDatakey: 0,
      heroImgKey: 0,
    };
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
  },
  mounted() {
    this.currentHeroData = this.heroData[0];
    this.currentHeroImg = this.heroImg[0];
    setInterval(() => {
      this.currentHeroImg = this.heroImg[this.heroImgKey];
      this.currentHeroData = this.heroData[this.heroDatakey];
      if (this.heroDatakey == this.heroData.length - 1) {
        this.heroDatakey = 0;
      } else {
        this.heroDatakey++;
      }
      if (this.heroImgKey == this.heroImg.length - 1) {
        this.heroImgKey = 0;
      } else {
        this.heroImgKey++;
      }
    }, 7000);
  },
};
</script>

<style></style>
