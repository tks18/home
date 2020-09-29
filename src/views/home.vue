<template>
  <div class="content">
    <div
      :class="
        'hero is-medium' +
        ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
      "
    >
      <div class="hero-body ma-2 pa-8">
        <div class="container">
            <div
              class="columns is-multiline is-centered is-vcentered"
            >
              <div class="column is-half ma-0 pa-0">
                <transition name="bounceUp" mode="out-in">
                <figure v-bind:key="heroImgKey">
                  <img :src="currentHeroImg.image" alt="Main Image" />
                </figure>
                </transition>
              </div>
              <div class="column is-half">
                <transition name="bounceUp" mode="out-in">
                <v-card v-bind:key="heroDatakey">
                  <div class="content text pa-4">
                    <div class="text-h4">
                      {{ currentHeroData.title }}
                    </div>
                    <div class="text-subtitle-1 mt-3">
                      {{ currentHeroData.subtitle }}
                    </div>
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
            "This is Sudharshan TK. Known in the Internet as Shan.tk. I Create Elegant, Modern, Sleeky UI's. I enjoy Javascript, Flutter and Testing.",
        },
        {
          title: 'Summa',
          subtitle: 'summa',
        },
      ],
      heroImg: [
        {image:'https://media.giphy.com/media/3o6gEetbU85BF6h26c/giphy.gif'},
        {image: 'https://media.giphy.com/media/3o72FdmnHmeHUH0YeY/giphy.gif',}
      ],
      currentHeroImg: {},
      currentHeroData: {},
      heroDatakey: 0,
      heroImgKey: 0,
    };
  },
  mounted() {
    this.currentHeroData = this.heroData[0];
    this.currentHeroImg = this.heroImg[0];
    setInterval(() => {
      this.currentHeroData = this.heroData[this.heroDatakey];
      if (this.heroDatakey == this.heroData.length - 1) {
        this.heroDatakey = 0;
      } else {
        this.heroDatakey++;
      }
    }, 7500);
    setInterval(() => {
      this.currentHeroImg = this.heroImg[this.heroImgKey];
      if (this.heroImgKey == this.heroImg.length - 1) {
        this.heroImgKey = 0;
      } else {
        this.heroImgKey++;
      }
    }, 6800);
  },
};
</script>

<style></style>
