<template>
  <div>
    <div v-if="post.html" v-html="post.html"></div>
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
