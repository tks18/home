<template>
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
            {{ title }} <v-icon>mdi-arrow-right-circle</v-icon>
          </div>
        </v-col>
        <v-col cols="12" class="my-0 py-0">
          <v-row align="center" justify="center">
            <v-col :cols="ismobile ? 12 : 9" align="start" justify="center">
              <v-row align="start" justify="start" class="my-0 py-0">
                <!-- eslint-disable vue/no-v-html -->
                <div
                  class="text font-weight-semibold mx-2 px-2"
                  v-html="aboutData.subtitle"
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
</template>

<script>
export default {
  name: 'HomeAboutComponent',
  props: {
    title: {
      type: String,
      default: ' ',
    },
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    aboutData: {
      subtitle: `<div class="text-overline">This is <span class="primary--text font-weight-black">Sudharshan TK</span> A.K.A <span class="primary--text font-weight-black">(Shan.tk)</span>.</div><span class="text-body-1">I Create Elegant, Modern, Sleeky UI's. I Love Javascript, Nodejs & Flutter. Its Been a Great Journey for the Past 3 Years of Self-learning Web development and Creating Amazing Websites. Currently Focussing More on Backend Development Like Nodejs and Django. I Also Know Android Debugging and Rom Development to Some Extent.I am Pursuing Chartered Accountancy Course as my Profession.`,
      image: 'https://i.ibb.co/b27v0Xf/profile-2.webp',
    },
  }),
};
</script>

<style></style>
