<template>
  <div>
    <pre>{{ JSON.stringify(posts, null, 2) }}</pre>
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

  created() {
    axios({ method: "get", url: "/posts.json" }).then(({ data: posts }) => {
      this.posts = new Map(JSON.parse(JSON.stringify(posts)));
    });
  }
};
</script>
