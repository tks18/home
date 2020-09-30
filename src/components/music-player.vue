<template>
  <v-bottom-sheet v-model="activated" inset>
    <template v-slot:activator="{ on, attrs }">
      <v-card v-bind="attrs" class="ma-1 pa-2 non-touch point-cursor" v-on="on">
        <v-row align="center" class="mb-2" justify="center">
          <v-btn fab small color="primary" v-bind="attrs" v-on="on">
            <v-icon>mdi-music</v-icon>
          </v-btn>
        </v-row>
        <v-row align="center" justify="center">
          <div class="text font-weight-semibold">Music Player</div>
        </v-row>
      </v-card>
    </template>
    <v-card tile>
      <v-progress-linear
        :value="50"
        class="my-0"
        height="3"
      ></v-progress-linear>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>The Walker</v-list-item-title>
            <v-list-item-subtitle>Fitz & The Trantrums</v-list-item-subtitle>
          </v-list-item-content>

          <v-spacer></v-spacer>

          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-rewind</v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
            <v-btn icon>
              <v-icon>mdi-pause</v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon
            class="ml-0"
            :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
          >
            <v-btn icon>
              <v-icon>mdi-fast-forward</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  props: {
    model: {
      type: Boolean,
    },
  },
  data: function () {
    return {
      activated: false,
    };
  },
};
</script>

<style></style>
