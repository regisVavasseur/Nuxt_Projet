<template>
      <v-app-bar app color="purple" dark>
        <v-toolbar-title>{{ forumName }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tabs right>
          <v-tab v-if="!isUserLoggedIn" @click="signUp">S'inscrire</v-tab>
          <v-tab v-if="!isUserLoggedIn" @click="signIn">Se connecter</v-tab>
          <v-tab v-if="isUserLoggedIn" @click="signOut">Se déconnecter</v-tab>
          <v-tab v-if="isUserLoggedIn" @click="goToList">Liste des sujets</v-tab>
          <v-tab v-if="isUserLoggedIn && isUserAdmin" @click="goToBackOffice">Back office</v-tab>
        </v-tabs>
      </v-app-bar>
  </template>
  
  <script>
  export default {
    data() {
      return {
        forumName: 'Curiosités',
        isUserLoggedIn: false,
        isUserAdmin: false,
      };
    },
    methods: {
      signUp() {
        this.$router.push("/register");
      },
      signIn() {
        this.$router.push("/login");
      },
      signOut() {
        // Code pour se déconnecter
      },
      goToList(){

      },
      goToBackOffice() {
        // Code pour aller vers le back office
      },
    },
  };
  </script>