<template>
  <div class="topics-list">
    <h1>Sujets du forum : {{ forum.name }} </h1>
    <v-btn @click="dialog = true">Créer un sujet</v-btn>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Créer un sujet de discussion</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Titre" v-model="newTopic.title" required></v-text-field>
                <v-text-field label="Contenu" v-model="newTopic.content" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="createTopic">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      topics: [],
      forum: {},
      dialog: false,
      newTopic: {
        title:'',
        content: '',
        user_id: '',
        forum_id: ''
      }
    }
  },
  methods: {
    async createTopic() {
      this.newTopic.user_id = 1;
      this.newTopic.forum_id = this.$route.params.id;
      const response = await fetch('/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.newTopic)
      });
      if (response.ok) {
        this.dialog = false;
        this.newTopic = {
          title:'',
          content: '',
          user_id: '',
          forum_id: ''
        };
        // Re-fetch topics
        const response = await fetch(`/api/forums/${this.$route.params.id}/topics`);
        const data = await response.json();
        this.topics = data.topics;
      } else {
        // Handle error
        console.error('Failed to create topic');
      }
    }
  },
  async mounted() {
    const forumId = this.$route.params.id;
    const response = await fetch(`/api/forums/${forumId}/topics`);
    const data = await response.json();
    this.topics = data.topics;
    this.forum = data.forum[0];
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