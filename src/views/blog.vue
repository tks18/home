<template lang="html">
  <div>
    <p class="text">Welcome to Blog Vue Page</p>
    <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
  </div>
</template>

<script>
export default {
  metaInfo: function () {
    return {
      title: 'Blog',
    };
  },
  data: function () {
    return {};
  },
};
</script>

<style></style>
