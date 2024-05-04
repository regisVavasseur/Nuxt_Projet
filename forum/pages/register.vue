<template>
  <v-container>
  <v-form @submit.prevent="register">
    <v-col cols="6">
      <h1 class="text-center">S'inscrire</h1>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="login"
            label="login"
            type="login"
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

export default {
  data() {
    return {
      login: '',
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
        const response = await fetch('api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            login: this.login,
            password: this.password
          })
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.error)
        }

        const data = await response.json()
        console.log('User registered:', data.users)
        this.isLoading = false

        if (response.status === 200) {
          this.$router.push('/')
        } else {
          throw new Error('Échec de l\'inscription')
        }
      } catch (error) {
        console.error('Error:', error)
        this.isLoading = false
        // Afficher une erreur à l'utilisateur
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