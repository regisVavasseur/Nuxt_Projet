<template>
    <div class="topics-list">
      <h1>Sujets</h1>
      <div v-for="topic in topics" :key="topic.id" class="topic-card">
        <h2>{{ topic.title }}</h2>
        <p>{{ topic.content }}</p>
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
      const response = await fetch('/api/topics');
      const data = await response.json();
      this.topics = data.topics;
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
  </style>