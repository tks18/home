<template>
  <div>
    <p class="text">Welcome to Blog Vue Page</p>
    <v-skeleton-loader class="mx-auto" type="card" />
  </div>
</template>

<script>
export default {
  metaInfo: () => {
    return {
      title: 'Blog',
    };
  },
  data: () => {
    return {};
  },
};
</script>

<style></style>
