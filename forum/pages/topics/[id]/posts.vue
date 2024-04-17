<template>
  <div class="posts-list">
    <h1>Posts</h1>
    <div v-for="post in posts" :key="post.id" class="post-card">
      <h2>{{ post.content }}</h2>
      <p>Posté par {{ post.login }}</p>
      <p class="date">Créé à {{ new Date(post.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} le {{ new Date(post.created_at).toLocaleDateString() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      users: {}
    }
  },
  methods: {
    async fetchUserName(userId) {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      this.users[userId] = data.user[0].login;
      return data.user[0].login;
    }
  },
  async mounted() {
    const topicId = this.$route.params.id;
    const response = await fetch(`/api/topics/${topicId}/posts`);
    const data = await response.json();
    this.posts = data.posts;
    for (let post of this.posts) {
      post.login = await this.fetchUserName(post.user_id);
    }
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