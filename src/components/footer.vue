<template>
  <v-footer elevation="15" inset rounded shaped>
    <v-row align="center" justify="center">
      <v-col :cols="ismobile ? 6 : 4">
        <v-row>
          <v-col align="start" justify="center">
            <v-tooltip
              top
              transition="slide-y-transition"
              v-for="(social, index) in socials"
              v-bind:key="index"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click="windowLink(social.link)"
                  color="primary"
                >
                  <v-icon>{{ social.icon }}</v-icon>
                </v-btn>
              </template>
              <span>{{ social.title }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
      <v-col :cols="ismobile ? 6 : 4">
        <v-row>
          <v-col :align="ismobile ? 'end' : 'center'" justify="center">
            <v-tooltip top transition="slide-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <div
                  v-bind="attrs"
                  v-on="on"
                  class="font-weight-bold primary--text"
                >
                  {{ now.replace(/( PM| AM)/, '') }}
                </div>
              </template>
              <span class="width-min">
                <div>
                  <p class="text">
                    {{ randomQuote.quote }}
                  </p>
                  <p class="text-right font-weight-bold">
                    - {{ randomQuote.author }}
                  </p>
                </div>
              </span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
      <v-col :cols="ismobile ? 12 : 4">
        <v-row>
          <v-col :align="ismobile ? 'center' : 'end'" justify="center">
            <div
              :class="'font-weight-black' + (ismobile ? ' text-center' : '')"
            >
              Sudharshan TK | <v-icon color="primary">mdi-copyright</v-icon>
              {{ new Date().getFullYear() }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: function () {
    return {
      now: new Date().toLocaleTimeString(),
      clockDiag: false,
      socials: [
        {
          icon: 'mdi-twitter',
          title: 'Twitter',
          link: 'https://twitter.com/shantk18',
        },
        {
          icon: 'mdi-instagram',
          title: 'Instagram',
          link: 'https://instagram.com/shantk18',
        },
        {
          icon: 'mdi-github',
          title: 'Github',
          link: 'https://github.com/tks18',
        },
        {
          icon: 'mdi-quality-medium',
          title: 'Medium',
          link: 'https://medium.com/@tksudharshan',
        },
        {
          icon: 'mdi-email-edit',
          title: 'Email Me',
          link: 'mailto:tksudharshan@infozy.tk',
        },
        {
          icon: 'mdi-google-photos',
          title: 'Photography',
          link: 'https://unsplash.com/@shantk18',
        },
      ],
      quotes: [
        {
          quote:
            "All the world's a stage, and all the men and women merely players: they have their exits and their entrances; and one man in his time plays many parts, his acts being seven ages.",
          author: 'William Shakespeare',
        },
        {
          quote:
            "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
          author: 'Steve Jobs',
        },
        {
          quote: 'Time is Money',
          author: 'Benjamin Franklin',
        },
        {
          quote: "Don't wait. The time will never be just right",
          author: 'Napoleon Hill',
        },
        {
          quote:
            "If you spend too much time thinking about a thing, you'll never get it done.",
          author: 'Bruce Lee',
        },
      ],
    };
  },
  methods: {
    windowLink(url) {
      window.open(url);
      return;
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
    randomQuote() {
      return this.$_.shuffle(this.quotes)[0];
    },
  },
  mounted() {
    setInterval(() => {
      this.now = new Date().toLocaleTimeString('en-GB');
    }, 1000);
  },
};
</script>
