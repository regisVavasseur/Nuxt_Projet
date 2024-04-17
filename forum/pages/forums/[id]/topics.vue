<template>
  <div class="topics-list">
    <h1>Sujets du forum</h1>
    <div v-for="topic in topics" :key="topic.id" class="topic-card">
      <h2>
        <router-link :to="`/topics/${topic.id}/posts`">{{ topic.title }}</router-link>
      </h2>
      <p>{{ topic.content }}</p>
      <p class="date">Créé à {{ new Date(topic.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} le {{ new Date(topic.created_at).toLocaleDateString() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: []
    }
  },
  async mounted() {
    const forumId = this.$route.params.id;
    const response = await fetch(`/api/forums/${forumId}/topics`);
    const data = await response.json();
    this.topics = data.topics;
    this.forum = data.forum;
  }
}
</script>
  
  <style scoped>
  .topics-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 50px;
  }
  
  .topic-card {
    position: relative;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .topic-card h2 {
    margin-bottom: 10px;
  }
  
  .topic-card p {
    color: #666;
  }

  .date {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  </style>