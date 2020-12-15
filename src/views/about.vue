<template>
  <div class="columns is-multiline mb-2">
    <div class="column is-full">
      <v-card class="cyberpunk-bg" elevation="13" outlined shaped>
        <div class="hero is-medium">
          <div class="hero-body">
            <v-row>
              <v-col cols="5" align="left" justify="center">
                <div class="back-blur white--text pa-2 fit-text">
                  <div class="text-h2 font-weight-black">
                    Come face to face Huh?
                  </div>
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="5" align="right" justify="center">
                <div class="back-blur white--text pa-2 fit-text">
                  <div class="text-overline font-weight-bold">
                    "Before picking fights, learn to assess your opponents."
                  </div>
                  <div class="text-body-2 text-right font-weight-light">
                    - Tamuna Tsertsvadze, Galaxy Pirates
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="hero-footer">
            <div class="container text-center non-touch">
              <div class="text-overline font-weight-bold">
                It Looks Like You want to Know About Me !
              </div>
              <v-btn text @click="" class="text-overline font-weight-bold">
                <v-icon>mdi-arrow-down</v-icon><v-icon>mdi-arrow-down</v-icon> Swipe Down <v-icon>mdi-arrow-down</v-icon><v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="column is-full">
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
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
  }
};
</script>

<style></style>
