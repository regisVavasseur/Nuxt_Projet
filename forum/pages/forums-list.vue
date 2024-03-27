<template>
  <div class="forums-list">
    <h1>Forums</h1>
    <div v-for="forum in forums" :key="forum.id" class="forum-card">
      <h2>{{ forum.name }}</h2>
      <p>{{ forum.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forums: []
    }
  },
  async mounted() {
    const response = await fetch('/api/forums');
    const data = await response.json();
    this.forums = data.forums;
  }
}
</script>

<style scoped>
.forums-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 50px;
}

.forum-card {
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.forum-card h2 {
  margin-bottom: 10px;
}

.forum-card p {
  color: #666;
}
</style>