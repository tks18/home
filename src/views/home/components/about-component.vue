<template>
  <div class="column is-full my-1 py-1">
    <v-container>
      <v-row class="my-0 py-0">
        <v-col cols="12" class="my-0 mx-2 px-2 py-0">
          <h-title-component
            id="abouttitle"
            :title="title"
            arrow="right"
            link="/about"
            :large="false"
            :center="false"
            :darker="false"
          />
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
import title_component from '@v/home/components/common/title-component';

export default {
  name: 'HomeAboutComponent',
  components: {
    'h-title-component': title_component,
  },
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
      subtitle: `<div class="text-overline">This is <span class="primary--text font-weight-black">Sudharshan TK</span> A.K.A <span class="primary--text font-weight-black">(Shan.tk)</span>.</div><span class="text-body-1">I Create Elegant, Modern, Sleeky UI's. I Love Javascript, Nodejs & Flutter. I Focus More on Backend Development Like Nodejs and Django. I Also Know Android Debugging and Rom Development to Some Extent. Professionally I am a Chartered Accountant.</span>`,
      image: 'https://i.ibb.co/CWY7dSm/IMG-20220206-130734-Close-up.webp',
    },
  }),
};
</script>
