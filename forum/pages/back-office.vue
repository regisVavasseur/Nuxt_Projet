<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Créer un administrateur</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="createAdmin">
              <v-text-field v-model="name" label="Name" required></v-text-field>
              <v-text-field v-model="surname" label="Surname" required></v-text-field>
              <v-text-field v-model="username" label="Username" required></v-text-field>
              <v-text-field v-model="email" label="Email" required></v-text-field>
              <v-btn type="submit" color="primary" :disabled="isSubmitting">
                Créer
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- ... -->
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <h2>Créer un forum</h2>
          </v-card-title>
          <v-card-text>
            <v-form>     
                <v-container>
                    <v-text-field v-model="forumName" label="Forum" />
                    <v-text-field v-model="subjectName" label="Subject" />
                    <v-text-field v-model="message" label="Message" />
                    <v-text-field v-model="pseudo" label="Pseudo" />
                    <v-btn @click="createForum">Create Forum</v-btn>
                </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <h2>Editer les forums</h2>
          </v-card-title>
          <v-card-text>
            <v-list>
                <v-form>
                    <v-container>
                        <v-text-field v-model="forumName" label="Forum" />
                        <v-text-field v-model="subjectName" label="Subject" />
                        <v-text-field v-model="message" label="Message" />
                        <v-text-field v-model="pseudo" label="Pseudo" />
                        <v-btn @click="editForum">Editer le forum</v-btn>
                    </v-container>
                </v-form>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      username: '',
      email: '',
      isSubmitting: false,
      forumName: '',
      subjectName: '',
      message: '',
      pseudo: ''
    }
  },
  methods: {
    async createAdmin() {
      this.isSubmitting = true
      // Make an API call to create the admin account
      try {
        // Handle successful creation of admin account
      } catch (error) {
        // Handle error during creation of admin account
      } finally {
        this.isSubmitting = false
      }
    },
    createForum () {
      // Add code to create a new forum
    },
    editForum () {
      // Add code to edit a forum
    }
  },
}
</script>

<style>

.back-office {
  @apply bg-gray-200;
}

</style>