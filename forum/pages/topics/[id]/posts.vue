<template>
  <div class="posts-list">
    <h1>Posts</h1>
    <div v-for="post in posts" :key="post.id" class="post-card">
      <h2>{{ post.content }}</h2>
      <p class="date">Créé à {{ new Date(post.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} le {{ new Date(post.created_at).toLocaleDateString() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    const topicId = this.$route.params.id;
    const response = await fetch(`/api/topics/${topicId}/posts`);
    const data = await response.json();
    this.posts = data.posts;
  }
}
</script>

<style scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 50px;
}

.post-card {
  position: relative;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.post-card h2 {
  margin-bottom: 10px;
}

.post-card p {
  color: #666;
}

.date {
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>