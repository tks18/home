<template>
  <v-col cols="12">
    <v-card class="mx-auto" color="#26c6da" light max-width="500">
      <v-card-title>
        <v-icon large left> mdi-twitter </v-icon>
        <span class="title font-weight-bold">Twitter</span>
      </v-card-title>
      <v-card-text class="headline font-weight-bold">
        <v-row>
          <v-col cols="12" align="center">
            <v-img :src="tweetQr" height="180" width="180" />
          </v-col>
          <v-col cols="12">
            "Its Better when You Share to Other People. Scan the Qr to Share my
            Website"
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt="Author's Photo"
              :src="authorPhoto"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Shan.tk</v-list-item-title>
          </v-list-item-content>
          <v-row align="center" justify="end">
            <v-icon class="mr-1"> mdi-heart </v-icon>
            <span class="subheading mr-2">10</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-share-variant </v-icon>
            <span class="subheading">22</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'AboutShareCardComponent',
  props: {
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    tweetQr: 'https://i.ibb.co/4tZFDrh/qr-code-2.png',
    authorPhoto: 'https://i.ibb.co/b27v0Xf/profile-2.webp',
  }),
};
</script>

<style></style>
