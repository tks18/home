<template lang="html">
  <div>
    <p class="text">Welcome to Gallery Vue Page</p>
    <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
  </div>
</template>

<script>
export default {
  metaInfo: function () {
    return {
      title: 'Gallery',
    };
  },
  data: function () {
    return {};
  },
};
</script>

<style></style>
