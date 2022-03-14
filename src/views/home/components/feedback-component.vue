<template>
  <v-container>
    <v-card outlined rounded class="column is-full">
      <v-card-text>
        <v-row align="center" justify="center" class="ma-0 pa-0">
          <v-col cols="12" align="center">
            <h-title-component
              id="feedbacktitle"
              :title="title"
              arrow="down"
              :center="true"
              :large="false"
              :darker="true"
            />
          </v-col>
          <v-col align="center" :cols="ismobile ? 12 : 7">
            <v-form method="POST">
              <v-row class="mx-2 my-2">
                <v-col cols="12" class="my-0 py-0" align="left">
                  <v-text-field
                    v-model="name"
                    prepend-icon="mdi-form-textbox"
                    dense
                    :persistent-hint="true"
                    hint="Your Name"
                    label="Sudharshan"
                    hide-details="auto"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row class="mx-2 my-2">
                <v-col cols="12" class="my-0 py-0" align="left">
                  <v-text-field
                    v-model="email"
                    prepend-icon="mdi-email"
                    dense
                    :persistent-hint="true"
                    hint="Your Email"
                    label="cool@coolness.com"
                    hide-details="auto"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row class="mx-2 my-2">
                <v-col cols="12" class="my-0 py-0" align="left">
                  <v-textarea
                    v-model="message"
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
              <v-row align="center" class="mx-2 my-2">
                <v-col cols="6" class="my-0 py-0" align="right">
                  <v-btn type="submit" color="primary">
                    <v-icon left>mdi-cards-heart</v-icon>
                    Submit
                  </v-btn>
                </v-col>
                <v-col cols="6" align="left">
                  <v-btn type="reset" color="error" @click="clearForm">
                    <v-icon left>mdi-close</v-icon>
                    Reset
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
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
  data: () => ({
    name: '',
    email: '',
    message: '',
  }),
  methods: {
    submitForm() {
      this.$notify({
        group: 'main',
        type: 'yellow',
        duration: 5000,
        title: 'WIP',
        text: 'This Feature is under Development. Wait for Some days to Submit Feedback.',
        data: {
          loading: true,
          dark: false,
          type: 'Feature Development',
        },
      });
    },
    clearForm() {
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>
