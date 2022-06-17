<template>
  <div class="column is-full ma-2">
    <v-row>
      <v-col align="start" justify="start">
        <h-title-component
          id="blogtitle"
          :title="title"
          arrow="right"
          link="https://blog.sudharshan.dev"
          :outside="true"
          :large="false"
          :center="false"
          :darker="false"
        />
      </v-col>
    </v-row>
    <v-row v-if="loading">
      <v-col align="center">
        <v-skeleton-loader
          type="card"
          max-width="340"
          height="240"
          class="mx-auto"
        />
        <div class="text-body-1">Loading Blog Posts</div>
      </v-col>
    </v-row>
    <v-row v-if="!loading" align="start" justify="start" class="mx-2">
      <v-col
        v-for="(post, index) in posts"
        id="posts"
        :key="index"
        class="non-touch"
        cols="3"
        align="center"
      >
        <v-card
          max-width="340"
          @click="gotoUrl(`https://${domain}/${post.slug}`)"
        >
          <v-img :src="post.coverImage" aspect-ratio="16/9" height="200" />
          <v-row align="end" justify="end">
            <v-col align="left">
              <v-card-title class="no-break-words">
                {{ post.title }}
              </v-card-title>
              <v-card-subtitle>
                Posted on {{ post.dateAdded | moment('DD MMMM, YYYY') }}
              </v-card-subtitle>
              <v-card-text v-if="index === 0">
                <v-chip color="primary">
                  <v-icon left>mdi-history</v-icon>
                  New
                </v-chip>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import title_component from '@v/home/components/common/title-component';
import { blog } from '@p/backend';

export default {
  name: 'HomeBlogComponent',
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
    gotoUrl: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    loading: true,
    posts: [],
    domain: '',
  }),
  mounted() {
    this.getBlogPosts();
  },
  methods: {
    async getBlogPosts() {
      const blogData = await blog.get(this.$state.store);
      const sortedPosts = this.$lodash.orderBy(
        blogData.data.user.publication.posts,
        [(post) => new Date(post.dateAdded)],
        ['desc'],
      );
      this.posts = sortedPosts;
      this.domain = blogData.data.user.publicationDomain;
      this.loading = false;
    },
  },
};
</script>
