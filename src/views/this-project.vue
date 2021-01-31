<template>
  <div>
    <p class="text">Welcome to About This Website Page</p>
    <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
  </div>
</template>

<script>
export default {
  metaInfo: function () {
    return {
      title: 'About This Project',
    };
  },
  data: function () {
    return {};
  },
};
</script>

<style></style>
