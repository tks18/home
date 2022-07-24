<template>
  <div class="column is-full my-1 py-1">
    <v-container>
      <v-row class="my-0 py-0">
        <v-col cols="12">
          <h-title-component
            id="abouttitle"
            :title="title"
            arrow="right"
            link="/about/me"
            :large="false"
            :center="false"
            :darker="false"
          />
        </v-col>
        <v-col cols="12" class="my-0 py-0 non-touch">
          <div class="text font-weight-semibold mx-2 px-2">
            <span class="text-body-1">
              {{ aboutData.subtitle }}
            </span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import title_component from '@v/home/components/common/title-component';
import authorData from '@t/authorData';

export default {
  name: 'HomeAboutComponent',
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
    aboutData: {
      subtitle: authorData.intro,
      image: 'https://i.ibb.co/b16DNTQ/IMG-0483-Copy.png',
    },
  }),
};
</script>
