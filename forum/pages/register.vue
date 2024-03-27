<template>
  <div class="box">
    <form @submit.prevent="register">
      <h1> S'inscrire</h1>

      <div class="field input-field">
        <input v-model="userName" type="text" class="input" required>
        <label class="label">Nom d'utilisateur</label>
      </div>

      <div class="field input-field">
        <input v-model="email" type="email" class="input" required>
        <label class="label">Email</label>
      </div>

      <div class="field input-field">
        <input v-model="password" type="password" class="input" required>
        <label class="label">Mot de passe</label>
      </div>

      <div class="field input-field">
        <input v-model="confirmPassword" type="password" class="input" required>
        <label class="label">Confirmer mot de passe</label>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" class="button-green" :class="{ 'is-loading': isLoading }" :disabled="isLoading">
            Se connecter
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
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
        this.$store.commit('auth/setUser', {email: this.email})
        this.$router.push('/')
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
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #f2f2f2;
}

form {
  width: 50%;
  height: 50%;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-field {
  position: relative;
  margin-bottom: 20px;
}

.input-field input {
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 15px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-field label {
  position: absolute;
  left: 10px;
  top: 10px;
  transition: 0.3s;
  pointer-events: none;
  color: #999;
}

.input-field input:required:invalid + label {
  color: #999;
}

.input-field input:focus,
.input-field input:valid {
  border-color: #28b463;
  box-shadow: 0 0 5px rgba(40, 180, 99, 0.5);

}

.input-field input:focus + label,
.input-field input:valid + label {
  top: -20px;
  font-size: 14px;
  margin: 10px auto;
  color: #000;
}

button[type="submit"] {
  background-color: #28b463;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-top: 40px;
}

button[type="submit"]:hover {
  background-color: #1c8d46;
}

h1 {
  color: #28b463;
  margin-bottom: 40px;
}

</style>