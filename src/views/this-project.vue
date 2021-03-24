<template>
  <div class="my-2 mx-2">
    <div
      id="this-project-main-title"
      :class="
        (ismobile ? ' text-h5 ' : ' text-h4 ') +
        'text-center non-touch font-weight-bold text-capitalize'
      "
    >
      {{ animatedText.mainTitle }}
    </div>
    <div class="non-touch text-subtitle-2 darken-3 text-center">
      "Carve your name on hearts, not tombstones." Let you Know my Legacy. Lol
      xD 😜
    </div>
    <div class="mx-2 my-2">
      <v-row>
        <v-col cols="12">
          <v-row class="non-touch">
            <div
              id="this-project-details-title"
              :class="
                (ismobile ? ' text-h6 ' : ' text-h5 ') +
                'font-weight-bold mx-3 text-capitalize' +
                ($vuetify.theme.dark
                  ? ' underhover-light '
                  : ' underhover-dark ')
              "
            >
              {{ animatedText.detailsTitle }}
              <v-icon>mdi-arrow-right-circle</v-icon>
            </div>
          </v-row>
        </v-col>
        <v-col cols="12" v-if="repoDetailsAvbl" class="mx-2">
          <v-row align="center" justify="center">
            <v-col
              :cols="ismobile ? 12 : 5"
              :align="ismobile ? 'center' : 'right'"
            >
              <v-img :src="repoDetails.img"></v-img>
            </v-col>
            <v-col :cols="ismobile ? 12 : 6" align="left">
              <div class="details non-touch">
                <div class="heading">
                  Name:
                  <span class="font-weight-bold primary--text">{{
                    repoDetails.name
                  }}</span>
                </div>
                <div class="heading">
                  Fullname:
                  <span class="font-weight-bold primary--text">{{
                    repoDetails.full_name
                  }}</span>
                </div>
                <div class="heading">
                  <div>Description</div>
                  <div class="font-weight-bold primary--text">
                    {{ repoDetails.description }}
                  </div>
                </div>
                <div class="heading">
                  Project Source Code:
                  <span class="font-weight-bold primary--text">
                    {{ repoDetails.private ? 'Private' : 'Public' }}
                    <v-icon color="primary">mdi-web</v-icon>
                  </span>
                </div>
                <div class="heading">
                  Maintainer:
                  <span class="font-weight-bold primary--text">
                    <v-avatar size="20">
                      <v-img :src="repoDetails.owner.avatar_url"></v-img>
                    </v-avatar>
                    {{ repoDetails.owner.login }}
                  </span>
                </div>
                <div class="heading">
                  Created at:
                  <span class="font-weight-bold primary--text">
                    {{
                      repoDetails.created_at
                        | moment('D,dddd of MMM, YYYY @ hh:mm a')
                    }}
                  </span>
                </div>
                <div class="heading">
                  Production Updated at:
                  <span class="font-weight-bold primary--text">
                    {{
                      repoDetails.updated_at
                        | moment('D,dddd of MMM, YYYY @ hh:mm a')
                    }}
                  </span>
                </div>
                <div class="heading">
                  Last Pushed at:
                  <span class="font-weight-bold primary--text">
                    {{
                      repoDetails.pushed_at
                        | moment('D,dddd of MMM, YYYY @ hh:mm a')
                    }}
                  </span>
                </div>
                <div class="heading">
                  Repo Size:
                  <v-chip outlined color="primary">
                    <v-icon left small> mdi-arrow-split-vertical </v-icon>
                    {{ Math.floor(repoDetails.size / 8192) + ' mb' }}
                  </v-chip>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { generateWordMaps } from '@p/wordmap';
import { tweenToObserver } from '@p/gsap';
import { ismobile } from '@p/helpers';
import { repoData } from '@p/resources/github';
export default {
  metaInfo: function () {
    return {
      title: 'About This Project',
    };
  },
  data: function () {
    return {
      repoDetails: {},
      repoDetailsAvbl: false,
      animatedText: {
        mainTitle: '',
        detailsTitle: '',
      },
    };
  },
  methods: {
    async repoData() {
      const repo_data_resp = await repoData('matte-portfolio');
      if (repo_data_resp.success && repo_data_resp.error == null) {
        this.repoDetails = repo_data_resp.data;
        this.repoDetails['img'] = 'https://i.ibb.co/Y7BFDqN/shan-tk-1.png';
        this.repoDetailsAvbl = true;
      }
    },
  },
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  mounted() {
    tweenToObserver({
      vm: this,
      elem: '#this-project-main-title',
      emoji: false,
      arrayName: 'animatedText',
      map: generateWordMaps('About This Project'),
      arrayProperty: 'mainTitle',
    });
    tweenToObserver({
      vm: this,
      elem: '#this-project-details-title',
      emoji: false,
      arrayName: 'animatedText',
      map: generateWordMaps('Project Details'),
      arrayProperty: 'detailsTitle',
    });
    this.repoData();
  },
};
</script>

<style></style>
