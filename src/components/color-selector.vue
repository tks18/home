<template>
  <v-bottom-sheet inset v-model="activated" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-list-item v-bind="attrs" v-on="on">
        <v-list-item-icon>
          <v-icon color="primary">mdi-cog-refresh</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> Settings </v-list-item-title>
          <v-list-item-subtitle> Change the Accent Color </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-sheet class="pa-6" height="200px">
      <v-row align="start" justify="end">
        <v-btn icon @click="activated = !activated"
          ><v-icon color="primary">mdi-close</v-icon></v-btn
        >
      </v-row>
      <v-row align="center" justify="center">
        <v-switch
          v-model="darkmode"
          dense
          inset
          color="primary"
          @click="changeTheme"
          :value="darkmode"
          label="Turn on / off Dark Mode"
        ></v-switch>
      </v-row>
      <v-row align="center" justify="center">
        <v-dialog v-model="colorDiag" max-width="350">
          <v-card>
            <v-card-title class="headline"> Choose Accent Color </v-card-title>
            <v-card-text>
              <v-color-picker
                show-swatches
                elevation="6"
                hide-inputs
                v-model="accent"
              ></v-color-picker>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-col>
                <v-btn
                  class="subtitle text-bold"
                  color="primary"
                  @click="changeAccent()"
                  text
                >
                  Accept
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  @click="colorDiag = !colorDiag"
                  text
                  class="subtitle text-bold"
                  color="primary"
                >
                  Close
                </v-btn>
              </v-col>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn text color="primary" @click="colorDiag = true"
          >Change Primary Theme</v-btn
        >
      </v-row>
    </v-sheet>
  </v-bottom-sheet>
</template>
<script>
export default {
  data: function () {
    return {
      activated: false,
      colorDiag: false,
      darkmode: false,
      accent: null,
    };
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(
        'themecache',
        JSON.stringify({ dark: this.$vuetify.theme.dark }),
      );
      this.darkmode = this.$vuetify.theme.dark;
    },
    changeAccent() {
      this.$vuetify.theme.themes.light.primary = this.accent.hex;
      this.$vuetify.theme.themes.dark.primary = this.accent.hex;
      console.log(this.$vuetify.theme);
      localStorage.setItem(
        'themecache',
        JSON.stringify({
          dark: this.$vuetify.theme.dark,
          theme: {
            accent: this.accent.hex,
          },
        }),
      );
    },
  },
  mounted() {
    var darkCache = JSON.parse(localStorage.getItem('themecache'));
    if (darkCache && darkCache != null) {
      this.darkmode = darkCache.dark;
      this.$vuetify.theme.dark = darkCache.dark;
    }
  },
  watch: {
    accent: function (newval) {
      console.log(newval);
    },
  },
};
</script>
