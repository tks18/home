<template>
  <div class="column is-full">
    <v-row align="center" justify="center" class="ma-0 pa-0">
      <v-col cols="12" align="center">
        <h-title-component
          id="feedbacktitle"
          :title="title"
          arrow="down"
          :center="true"
          :large="true"
          :darker="true"
        />
      </v-col>
    </v-row>
    <div class="hero is-medium">
      <div :class="'hero-body contact-bg ' + (ismobile ? 'ma-0 pa-0' : '')">
        <div class="container pa-2">
          <v-row align="center" justify="center">
            <v-col align="center" :cols="ismobile ? 12 : 7" class="back-blur">
              <v-row>
                <v-col cols="12" class="my-0 py-0" align="left">
                  <v-text-field
                    dark
                    prepend-icon="mdi-form-textbox"
                    dense
                    :persistent-hint="true"
                    hint="Your Name"
                    label="Enter Your Name"
                    hide-details="auto"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="my-0 py-0" align="left">
                  <v-text-field
                    dark
                    prepend-icon="mdi-email"
                    dense
                    :persistent-hint="true"
                    hint="Your Email"
                    label="Enter Your Email ID"
                    hide-details="auto"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="my-0 py-0" align="left">
                  <v-textarea
                    dark
                    class="is-maximum"
                    prepend-icon="mdi-comment-quote"
                    no-resize
                    width="100%"
                    height="100%"
                    :full-width="true"
                    :persistent-hint="true"
                    label="Your Feedback bruh ?"
                    :filled="true"
                    :outlined="true"
                  />
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="6" class="my-0 py-0" align="right">
                  <v-btn dark color="primary">
                    <v-icon>mdi-cards-heart</v-icon>
                    Submit
                  </v-btn>
                </v-col>
                <v-col cols="6" align="left">
                  <v-btn dark color="error">
                    <v-icon>mdi-heart-broken</v-icon>
                    Cancel
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import title_component from '@v/home/components/common/title-component';

export default {
  name: 'HomeFeedbackComponent',
  components: {
    'h-title-component': title_component,
  },
  props: {
    title: {
      type: String,
      default: ' ',
    },
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
