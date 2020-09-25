<template>
  <v-bottom-sheet inset v-model="activated" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-list-item v-bind="attrs" v-on="on">
        <v-list-item-icon>
          <v-icon>mdi-cog-refresh</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> Settings </v-list-item-title>
          <v-list-item-subtitle> Change the Accent Color </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-sheet class="pa-8" height="260px">
      <v-row align="start" justify="end">
        <v-col>
          <h2 class="title primary--text">Settings</h2>
        </v-col>
        <v-col align="end" justify="start">
          <v-btn color="primary" icon @click="activated = !activated"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col align="start" justify="center">
          <p class="text">Change Primary Theme</p>
        </v-col>
        <v-col align="end" justify="center">
          <v-dialog v-model="darkdiag" max-width="300">
            <v-card>
              <v-card-title> Change Primary Theme </v-card-title>
              <v-card-text>
                <v-switch
                  v-model="darkmode"
                  dense
                  inset
                  color="primary"
                  @click="changeTheme"
                  :value="darkmode"
                  :label="'Turn' + (darkmode ? ' Off' : ' On') + ' Dark Mode'"
                ></v-switch>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-btn color="primary" @click="darkdiag = true"> Change </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="start" justify="center">
          <p class="text">Change Accent Color</p>
        </v-col>
        <v-col align="end" justify="center">
          <v-dialog v-model="colorDiag" max-width="350">
            <v-card>
              <v-card-title class="headline">
                Choose Accent Color
              </v-card-title>
              <v-card-text>
                <v-color-picker
                  show-swatches
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
                    outlined
                  >
                    Accept
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    @click="colorDiag = !colorDiag"
                    class="subtitle text-bold"
                    color="primary"
                  >
                    Close
                  </v-btn>
                </v-col>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn color="primary" filled @click="colorDiag = true">Change</v-btn>
        </v-col>
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
      darkdiag: false,
    };
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(
        'themecache',
        JSON.stringify({
          dark: this.$vuetify.theme.dark,
          theme: {
            accent: this.$vuetify.theme.themes.light.primary,
          },
        }),
      );
      this.darkmode = this.$vuetify.theme.dark;
    },
    changeAccent() {
      this.$vuetify.theme.themes.light.primary = this.accent.hex;
      this.$vuetify.theme.themes.dark.primary = this.accent.hex;
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
      this.$vuetify.theme.themes.light.primary = darkCache.theme.accent;
      this.$vuetify.theme.themes.dark.primary = darkCache.theme.accent;
    }
  },
};
</script>
