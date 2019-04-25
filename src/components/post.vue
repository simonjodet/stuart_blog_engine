<template>
  <div>
    <template v-if="post.html">
      <h1>{{ post.title }}</h1>
      <div v-html="post.html"></div>
    </template>
    <v-icon v-else>mdi-spin mdi-loading</v-icon>
  </div>
</template>

<script>
export default {
  name: "post",

  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
