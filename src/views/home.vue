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
              <div class="column is-half ma-0 pa-0">
                <figure>
                  <img
                    :src="heroData.image"
                    :class="heroData.rounded ? 'border-max' : ' '"
                    alt="Main Image"
                  />
                </figure>
              </div>
              <div class="column is-half">
                <v-card>
                  <div class="content text pa-4">
                    <div class="text-h4">
                      {{ heroData.title }}
                    </div>
                    <div
                      class="text-subtitle-1 font-weight-thin"
                      v-html="heroData.subtitle"
                    ></div>
                    <v-btn
                      class="mt-2"
                      color="primary"
                      @click="$router.push(heroData.buttonUrl)"
                      >{{ heroData.buttontext }}</v-btn
                    >
                  </div>
                </v-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-full ml-2 mt-2">
      <div
        :class="
          'text-h5 non-touch point-cursor ml-6' +
          ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
        "
      >
        Latest Posts <v-icon>mdi-arrow-right-circle</v-icon>
      </div>
      <div
        :class="
          'columns scrollable-x is-mobile mt-2 mb-2 mr-0 pr-0' +
          (ismobile ? ' ml-1 ' : ' ml-2')
        "
      >
        <div
          v-for="n in 7"
          v-bind:key="n"
          :class="
            'scrollable-x-child column mx-0 px-1' +
            (ismobile ? ' is-11' : ' is-3')
          "
        >
          <v-card>
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      heroData: {
        title: 'Hello There !',
        image: 'https://i.ibb.co/GTcS2kb/profile.png',
        subtitle: `<div class="text-overline">This is <span class="primary--text font-weight-black">Sudharshan TK</span> A.K.A <span class="primary--text font-weight-black">(Shan.tk)</span>.</div><br> <span class="text-body-1">I Create Elegant, Modern, Sleeky UI's. I Love Javascript, Nodejs & Flutter. Also I am Doing Chartered Accountancy Course as my Profession. <br><br></span><span class="text-overline">Feel Free to Contact Me !!</span>`,
        rounded: true,
        buttonUrl: '/about',
        buttontext: 'Contact Me !',
      },
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
};
</script>

<style></style>
