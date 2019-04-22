<template>
  <div>
    <div v-if="posts">
      <post v-for="post in posts" :key="post.id" :post="post"></post>
    </div>
    <v-icon v-else>mdi-spin mdi-loading</v-icon>
  </div>
</template>

<script>
import Post from "@/components/post.vue";
import axios from "axios";
import marked from "marked";

export default {
  name: "home",
  components: { Post },

  data: () => {
    return { posts: null };
  },

  mounted() {
    axios({ method: "get", url: "/posts.json" })
      .then(({ data: posts }) => {
        this.posts = posts;
      })
      .then(() => {
        for (const [index, post] of this.posts.entries()) {
          this._loadPost(post, index);
        }
      });
  },

  methods: {
    _loadPost(post, index) {
      axios({ method: "get", url: `/posts/${post.id}.md` }).then(({ data: markdown }) => {
        this.$set(this.posts, index, { ...post, markdown, html: marked(markdown) });
      });
    }
  }
};
</script>
