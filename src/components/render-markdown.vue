/* eslint-disable implicit-arrow-linebreak */
<template>
  <v-sheet
    outlined
    class="px-5 py-5 text-capitalize non-touch"
    v-if="rendered_content.length > 2"
    v-html="rendered_content"
  />
</template>

<script>
import marked from 'marked';
import { ismobile, generate_code_editor } from '@p/helpers';

export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    rendered_content: '',
  }),
  methods: {
    md_renderer() {
      const renderer = new marked.Renderer();
      renderer.heading = (text, level) => {
        let correct_level = 0;
        if (level === 1 || level === 2) {
          correct_level = 'h4';
        } else if (level === 3) {
          correct_level = 'h5';
        } else if (level === 4) {
          correct_level = 'h6';
        } else if (level === 5 || level === 6) {
          correct_level = `subtitle${level - 4}`;
        }
        return `<div class="text-${correct_level}  my-2 font-weight-bold">${text}</div>`;
      };
      renderer.paragraph = (text) =>
        `<div class="text-body-1 my-2"> ${text} </div>`;
      renderer.strong = (text) =>
        `<span class="font-weight-bold"> ${text} </span>`;
      renderer.em = (text) => `<span class="font-italic"> ${text} </span>`;
      renderer.code = (code) => {
        const formatted_content = generate_code_editor(code);
        const theme = this.$vuetify.theme.dark ? 'theme--dark' : '';
        return `<div
            class="code-viewer touchable text-lowercase py-2 px-2 my-3 v-sheet ${theme} v-sheet--outlined elevation-13 rounded"
        > ${formatted_content.content} </div>`;
      };
      return renderer;
    },
    goTourl(url) {
      window.open(url);
    },
  },
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  mounted() {
    if (this.content) {
      const rendered_content = marked(this.content, {
        gfm: true,
        headerIds: false,
        headerPrefix: false,
        renderer: this.md_renderer(),
      });
      this.rendered_content = rendered_content;
    }
  },
};
</script>
