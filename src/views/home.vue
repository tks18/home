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
    <div class="column is-full ma-2">
      <div
        @click="$router.push('/blog')"
        :class="
          'text-h5 non-touch point-cursor ml-6' +
          ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
        "
      >
        Latest Posts <v-icon>mdi-arrow-right-circle</v-icon>
      </div>
      <v-slide-group
        :show-arrows="!ismobile"
        class="mt-2 mb-2 scrollable-x"
        active-class="success"
        prev-icon="mdi-arrow-left-circle-outline"
        next-icon="mdi-arrow-right-circle-outline"
      >
        <v-slide-item
          v-for="n in 10"
          class="scrollable-x-child non-touch point-cursor"
          v-bind:key="n"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                @click="ismobile"
                class="mx-2"
                :width="ismobile ? 300 : 325"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
                ></v-img>
                <v-card-text>
                  <h2 class="title primary--text">Sample Post</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptates neque saepe tempora animi vitae aliquam magnam, eum
                  at, numquam ex fugiat veniam! Iure facilis dolorum, assumenda
                  ex dignissimos alias.
                </v-card-text>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn>Read More</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
    </div>
    <div class="column is-full">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div
              @click="$router.push('/about')"
              :class="
                'text-h5 non-touch point-cursor ml-6' +
                ($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
              "
            >
              About Me <v-icon>mdi-arrow-right-circle</v-icon>
            </div>
          </v-col>
          <v-col cols="12">
            <v-row align="center" justify="center">
              <v-col :cols="ismobile ? 12 : 9" align="start" justify="center">
                <div
                  :class="
                    'text font-weight-semibold' +
                    (ismobile ? ' mx-2 px-2' : ' ')
                  "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, eius amet odio nihil cumque, iusto voluptatibus debitis
                  quasi cum id nostrum ullam ut, eaque suscipit quod deleniti
                  fugit reprehenderit similique.lore Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Ratione sequi repellat, adipisci
                  voluptates possimus laborum rerum iste exercitationem veniam
                  quos inventore esse cupiditate quam amet perferendis quas ea
                  aliquam assumenda. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Totam, consequatur ipsum explicabo veniam
                  quam obcaecati accusamus? Accusantium, eligendi odio? Eum
                  fugit ipsum officiis non.
                </div>
              </v-col>
              <v-col v-if="!ismobile" cols="3" align="center" justify="center">
                <v-avatar
                  size="180"
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
        <v-timeline>
          <v-timeline-item v-for="year in 5" :key="year" color="red">
            <template v-slot:opposite>
              <span
                class="headline font-weight-bold cyan--text"
                v-text="2020"
              ></span>
            </template>
            <div class="py-4">
              <h2 class="headline font-weight-bold cyan--text">Lorem ipsum</h2>
              <div>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-container>
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
      aboutData: {
        image: 'https://i.ibb.co/2cN5DdQ/IMG-20200308-172339.jpg',
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
