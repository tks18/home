<template>
  <div class="column is-full">
    <v-container>
      <v-tooltip top transition="slide-y-transition">
        <template #activator="{ on, attrs }">
          <v-card
            :loading="loading"
            img="https://i.ibb.co/0nf9FwS/bb-3.webp"
            class="mx-auto non-touch"
            light
            v-bind="attrs"
            max-width="600"
            v-on="on"
            @click="gotoUrl('https://www.imdb.com/title/tt0903747/')"
          >
            <v-card-text v-if="!loading" class="inherit-height-responsive">
              <v-row class="inherit-height" align="end" justify="end">
                <v-col
                  class="inherit-height"
                  align="center"
                  justify="end"
                  cols="12"
                >
                  <v-row>
                    <v-col cols="12" align="center" justify="center">
                      <div class="text white--text text-h6 font-weight-bold">
                        "{{ quote.quote }}"
                      </div>
                    </v-col>
                    <v-col cols="12" align="right" justify="center">
                      <div class="white--text text-overline">
                        by {{ quote.author }}
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </template>
        <span>This is Breaking Bad 🦹‍♂️</span>
      </v-tooltip>
    </v-container>
  </div>
</template>

<script>
import breakingBad from '@p/resources/quotes';

export default {
  name: 'HomeBreakingBadComponent',
  props: {
    ismobile: {
      type: Boolean,
      default: false,
    },
    gotoUrl: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    loading: true,
    quote: {},
  }),
  mounted() {
    this.fetchApis();
  },
  methods: {
    async getQuotes() {
      const quotes = await breakingBad();
      if (quotes.success && quotes.data != null) {
        [this.quote] = quotes.data;
        this.loading = false;
      } else {
        this.loading = true;
      }
    },
    fetchApis() {
      this.getQuotes();
    },
  },
};
</script>

<style></style>
