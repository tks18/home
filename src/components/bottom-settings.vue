<template>
  <v-bottom-sheet inset v-model="activated" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-list-item v-if="model == 'list'" v-bind="attrs" v-on="on">
        <v-list-item-icon>
          <v-icon>mdi-cog-refresh</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> Settings </v-list-item-title>
          <v-list-item-subtitle> Change the Accent Color </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card
        v-if="model == 'icon'"
        elevation="0"
        class="ma-1 pa-2 non-touch point-cursor"
        v-bind="attrs"
        v-on="on"
      >
        <v-row align="center" class="mb-2" justify="center">
          <v-btn fab small color="primary">
            <v-icon>mdi-cog-refresh</v-icon>
          </v-btn>
        </v-row>
        <v-row align="center" justify="center">
          <div class="text font-weight-semibold">Settings</div>
        </v-row>
      </v-card>
    </template>
    <v-sheet class="pa-8 mt-auto">
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
                  v-model="$state.store.botSettings.darkmode"
                  dense
                  inset
                  color="primary"
                  @click="changeTheme"
                  :value="$state.store.botSettings.darkmode"
                  :label="
                    'Turn' +
                    ($state.store.botSettings.darkmode ? ' Off' : ' On') +
                    ' Dark Mode'
                  "
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
      <v-row>
        <v-col align="start" justify="center">
          <p class="text">Enable Navigation Bar Image and Blur</p>
        </v-col>
        <v-col align="end" justify="center">
          <v-dialog v-model="blurDiag" max-width="400">
            <v-card>
              <v-card-title>
                Enable Navigation Bar Image and Blur
              </v-card-title>
              <v-card-text>
                <v-switch
                  v-model="$state.store.botSettings.navBlur"
                  dense
                  inset
                  color="primary"
                  @click="enableBlur"
                  :value="$state.store.botSettings.navBlur"
                  :label="
                    $state.store.botSettings.navBlur ? ' Disable' : ' Enable'
                  "
                ></v-switch>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-btn color="primary" @click="blurDiag = true"> Change </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-bottom-sheet>
</template>
<script>
export default {
  props: {
    model: {
      type: String,
    },
  },
  data: function () {
    return {
      activated: false,
      colorDiag: false,
      blurDiag: false,
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
          blur: this.$state.store.botSettings.navBlur,
          theme: {
            accent: this.$vuetify.theme.themes.light.primary,
          },
        }),
      );
      this.$state.store.botSettings.darkmode = this.$vuetify.theme.dark;
    },
    enableBlur() {
      localStorage.setItem(
        'themecache',
        JSON.stringify({
          dark: this.$vuetify.theme.dark,
          blur: this.$state.store.botSettings.navBlur,
          theme: {
            accent: this.$vuetify.theme.themes.light.primary,
          },
        }),
      );
    },
    emitNow(event, value) {
      this.$bus.$emit(event, value);
    },
    changeAccent() {
      this.$vuetify.theme.themes.light.primary = this.accent.hex;
      this.$vuetify.theme.themes.dark.primary = this.accent.hex;
      localStorage.setItem(
        'themecache',
        JSON.stringify({
          dark: this.$vuetify.theme.dark,
          blur: this.$state.store.botSettings.navBlur,
          theme: {
            accent: this.accent.hex,
          },
        }),
      );
    },
  },
  mounted() {
    var themecache = JSON.parse(localStorage.getItem('themecache'));
    if (themecache && themecache != null) {
      this.$state.store.botSettings.darkmode = themecache.dark;
      this.$state.store.botSettings.navBlur = themecache.blur;
    }
  },
};
</script>
