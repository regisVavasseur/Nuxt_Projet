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
              <!-- add form fields for creating a new forum -->
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
              <!-- add list of forums that can be edited or deleted -->
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
  },
}
</script>

<style>

.back-office {
  @apply bg-gray-200;
}

</style>