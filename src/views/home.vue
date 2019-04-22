<template>
  <div>
    <v-icon v-if="!posts">mdi-spin mdi-loading</v-icon>
    <pre v-else>{{ JSON.stringify(posts, null, 2) }}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "home",

  data: () => {
    return { posts: null };
  },

  mounted() {
    axios({ method: "get", url: "/posts.json" }).then(({ data: posts }) => {
      this.posts = new Map(JSON.parse(JSON.stringify(posts)));
    });
  }
};
</script>
