<template>
  <v-container fill-height fluid class="d-flex align-center justify-center" >
  <v-form @submit.prevent="login" class="text-center">
    <v-row justify="center">
      <v-col cols="6" >
        <h1 class="mb-6">Login</h1>
        <v-text-field v-model="email" label="Email" type="email" required class="mb-4"></v-text-field>
        <v-text-field v-model="password" label="Mot de passe" type="password" required class="mb-6"></v-text-field>
        <v-btn type="submit" block color="purple" :loading="isLoading" :disabled="isLoading">
          Se connecter
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</v-container>
  
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    async login() {
      this.isLoading = true
      try {
        const response = await axios.get('api/users', {
          auth: {
            username: this.email,
            password: this.password
          }
        })

        if (response.status === 200) {
          this.$store.commit('auth/setUser', { email: this.email })
          this.$router.push('/')
        } else {
          throw new Error('Échec de la connexion')
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style>
.form-field .v-label {
  font-size: 1.2rem !important;
}

.v-form{
  width: 100% !important;
}
</style>