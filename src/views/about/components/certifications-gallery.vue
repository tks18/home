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
        <v-col cols="12">
          <v-row>
            <v-col :cols="ismobile ? 12 : 7">
              <v-img :src="currentCertificate.image" />
            </v-col>
            <v-col :cols="ismobile ? 12 : 5">
              <v-row align="center">
                <v-col cols="12">
                  <div class="text-h6 font-weight-black">
                    {{ currentCertificate.details.title }}
                  </div>
                  <div class="text-body-1">
                    {{ currentCertificate.details.description }}
                  </div>
                  <v-hover v-slot="{ hover }">
                    <div
                      class="text-overline point-cursor fit-text"
                      @click="gotoUrl(currentCertificate.organisation.link)"
                    >
                      issued by
                      <span
                        :class="
                          'font-weight-black ' + (hover ? 'primary--text' : '')
                        "
                      >
                        {{ currentCertificate.organisation.name }}
                      </span>
                      on
                      <span class="font-weight-black primary--text">
                        {{ currentCertificate.details.issued_on }}
                      </span>
                    </div>
                  </v-hover>
                  <v-btn
                    rounded
                    outlined
                    color="primary"
                    @click="gotoUrl(currentCertificate.verifylink)"
                  >
                    Verify this Certificate
                  </v-btn>
                </v-col>
                <v-spacer />
                <v-col cols="12">
                  <div class="text-body-1 font-weight-black my-2">
                    About {{ currentCertificate.organisation.name }}
                    <div class="text-body-2">
                      {{ currentCertificate.organisation.about }}
                    </div>
                  </div>
                  <div class="text-body-1 font-weight-black my-2">
                    Skills Developed with this Certification
                    <div class="text-body-2">
                      <v-chip-group column>
                        <v-chip
                          v-for="(skill, index) in currentCertificate.details
                            .skills"
                          :key="index"
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
        <v-col cols="12">
          <div class="font-weight-bold text-h6">More Certifications</div>
          <v-slide-group
            v-model="currentCertificate"
            active-class="success"
            :show-arrows="!ismobile"
          >
            <v-slide-item
              v-for="(certs, index) in certifications"
              :key="index"
              class="my-2 mx-2"
            >
              <v-card
                :img="certs.image"
                height="130"
                width="260"
                @click="toggleCert(certs)"
              />
            </v-slide-item>
          </v-slide-group>
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
