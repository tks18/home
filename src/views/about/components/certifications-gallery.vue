<template>
  <v-card>
    <v-card-title
      id="about-certifications-gallery-title"
      class="text-capitalize text font-weight-bold no-break-words"
    >
      {{ animatedArray.title }}
    </v-card-title>
    <v-card-subtitle> {{ subtitleQuote }} </v-card-subtitle>
    <v-card-text>
      <v-row v-if="!loading">
        <v-tabs-items v-model="currentCertificate">
          <v-tab-item
            v-for="(certificate, index) in certifications"
            :key="index"
          >
            <v-col cols="12">
              <v-row>
                <v-col :cols="ismobile ? 12 : 5">
                  <v-img
                    v-ripple
                    dark
                    :src="certificate.image"
                    :aspect-ratio="4 / 3"
                    contain
                    class="point-cursor"
                    @click="gotoUrl(certificate.verifylink)"
                  />
                </v-col>
                <v-col :cols="ismobile ? 12 : 7">
                  <v-row align="center">
                    <v-col cols="12">
                      <div class="text-h6 font-weight-black">
                        {{ certificate.details.title }}
                      </div>
                      <div class="text-body-1">
                        {{ certificate.details.description }}
                      </div>
                      <v-hover v-slot="{ hover }">
                        <div
                          class="text-overline point-cursor fit-text"
                          @click="gotoUrl(certificate.organisation.link)"
                        >
                          issued by
                          <span
                            :class="
                              'font-weight-black ' +
                              (hover ? 'primary--text' : '')
                            "
                          >
                            {{ certificate.organisation.name }}
                          </span>
                          on
                          <span class="font-weight-black primary--text">
                            {{ certificate.details.issued_on }}
                          </span>
                        </div>
                      </v-hover>
                      <v-btn
                        rounded
                        outlined
                        color="primary"
                        @click="gotoUrl(certificate.verifylink)"
                      >
                        Verify this Certificate
                      </v-btn>
                    </v-col>
                    <v-spacer />
                    <v-col cols="12">
                      <div class="text-body-1 font-weight-black my-2">
                        About {{ certificate.organisation.name }}
                        <div class="text-body-2">
                          {{ certificate.organisation.about }}
                        </div>
                      </div>
                      <div class="text-body-1 font-weight-black my-2">
                        Skills Developed with this Certification
                        <div class="text-body-2">
                          <v-chip-group column>
                            <v-chip
                              v-for="(skill, subIndex) in certificate.details
                                .skills"
                              :key="subIndex"
                              outlined
                              color="primary"
                              @click="gotoUrl(skill.link)"
                            >
                              {{ skill.name }}
                            </v-chip>
                          </v-chip-group>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-tab-item>
        </v-tabs-items>
        <v-col cols="12">
          <div class="font-weight-bold text-h6">More Certifications</div>
          <v-tabs
            v-model="currentCertificate"
            centered
            center-active
            icons-and-text
            :show-arrows="false"
            grow
            height="130"
          >
            <v-tab v-for="(certificate, index) in certifications" :key="index">
              <v-card :img="certificate.image" height="130" width="260" />
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-row v-if="loading">
        <v-skeleton-loader
          type="card"
          class="mx-auto"
          :width="ismobile ? 'auto' : 400"
        />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import gsap from '@p/gsap';
import authorData from '@t/authorData';
import { ismobile } from '@p/helpers';
import { generateWordMaps } from '@p/wordmap';

export default {
  name: 'AboutCertificationsGallery',
  props: {
    gotoUrl: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    animatedArray: {
      title: ' ',
    },
    certifications: null,
    currentCertificate: null,
    loading: true,
    subtitleQuote:
      '“The beautiful thing about learning is that no one can take it away from you.” — B.B. King',
  }),
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  mounted() {
    this.render();
    this.loadInitialCert();
  },
  methods: {
    render() {
      gsap.tweenToObserver({
        vm: this,
        elem: '#about-certifications-gallery-title',
        emoji: false,
        arrayName: 'animatedArray',
        map: generateWordMaps('Certifications'),
        arrayProperty: 'title',
      });
    },
    loadInitialCert() {
      this.certifications = this.$lodash.shuffle(authorData.certifications);
      [this.currentCertificate] = this.certifications;
      this.loading = false;
    },
    toggleCert(certificate) {
      this.loading = true;
      this.currentCertificate = certificate;
      this.loading = false;
    },
  },
};
</script>
