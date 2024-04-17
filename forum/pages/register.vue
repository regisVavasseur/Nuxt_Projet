<template>
  <v-container>
  <v-form @submit.prevent="register">
    <v-col cols="6">
      <h1 class="text-center">S'inscrire</h1>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="userName"
            label="Nom d'utilisateur"
            type="text"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            label="Mot de passe"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="confirmPassword"
            label="Confirmer mot de passe"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            type="submit"
            block
            color="purple"
            :loading="isLoading"
            :disabled="isLoading"
          >
            S'inscrire
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-form>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false
    }
  },
  methods: {
    async register() {
      this.isLoading = true
      if (this.password !== this.confirmPassword) {
        return false;
      }

      try {
        const response = await axios.post('api/users', {
          username: this.userName,
          email: this.email,
          password: this.password
        })

        if (response.status === 201) {
          this.$store.commit('auth/setUser', { email: this.email })
          this.$router.push('/')
        } else {
          throw new Error('Inscription échouée')
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

<style scoped>
.v-container{
  max-width: 100% !important;
}

.v-form {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.v-col{
  justify-self: center !important;
  align-self: center !important;
}
</style>