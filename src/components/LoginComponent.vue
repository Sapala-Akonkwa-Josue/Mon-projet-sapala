<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <h2>Login</h2>
      <div class="form-group">
        <label for="usernameOrEmail">Nom ou E-mail</label>
        <input
          type="text"
          id="usernameOrEmail"
          v-model="usernameOrEmail"
          placeholder="Entrez votre nom ou e-mail"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Entrez votre mot de passe"
          required
        />
      </div>

      <!-- Affichage de l'erreur si la connexion échoue -->
      <div v-if="loginError" class="error-message">
        Nom d'utilisateur, e-mail ou mot de passe incorrect.
      </div>

      <button type="submit" class="login-button">Se connecter</button>
      <q-card-actions align="center">
        <q-btn flat label="Mot de passe oublié ?" color="primary" />
      </q-card-actions>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "LoginComponent",
  setup() {
    const router = useRouter();

    // Liste des utilisateurs pour la démonstration (normalement, cela serait récupéré via une API)
    const users = ref([
      { id: 1, nom: "sapala", email: "sapala25@gmail.com", password: "12345" },
      { id: 2, nom: "Louis", email: "louis14@gmail.com", password: "12345" },
    ]);

    // Déclaration des variables pour les champs de connexion
    const usernameOrEmail = ref("");
    const password = ref("");
    const loginError = ref(false); // Erreur de connexion

    // Fonction de gestion de la connexion
    const handleLogin = () => {
      loginError.value = false;

      // Vérifier l'utilisateur
      const user = users.value.find(
        (u) =>
          (u.nom === usernameOrEmail.value ||
            u.email === usernameOrEmail.value) &&
          u.password === password.value
      );

      if (user) {
        // Si l'utilisateur est trouvé, l'enregistrer dans localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // Redirection vers la page des produits
        router.push({ name: "page1" }); // redirection vers "page1"
      } else {
        // Si l'utilisateur n'est pas trouvé, afficher un message d'erreur
        loginError.value = true;
      }
    };

    return {
      usernameOrEmail,
      password,
      handleLogin,
      loginError,
    };
  },
};
</script>

<style scoped>
/* Style pour la page de connexion */
.login-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
.login-button:hover {
  background-color: #0056b3;
}
.error-message {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
</style>
