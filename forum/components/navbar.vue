<template>
    <v-app>
      <v-app-bar app color="primary" dark>
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
      <!-- Le contenu de votre application ici -->
    </v-app>
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
        // Code pour s'inscrire
      },
      signIn() {
        // Code pour se connecter
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