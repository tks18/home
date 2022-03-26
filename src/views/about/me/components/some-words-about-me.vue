<template>
  <div class="text-body-2">
    {{ authorData.intro }}
  </div>
</template>

<script>
export default {
  name: 'AboutSomeWordsAboutme',
  props: {
    authorData: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({}),
};
</script>

<style></style>
