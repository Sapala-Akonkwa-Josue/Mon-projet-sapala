<template>
  <!-- <div>{{ sexe }} {{ profe }} {{ profil }}</div> -->
  <div class="absolute-center bg-accent text-white">
    <!--couleur chageante avec clic-->
    <p :class="'text' + '-' + couleurs[couleur]" @click="incrementer">Hello</p>
    <p>{{ b }}</p>
    <!--To do list section-->
    <h2>To-do List</h2>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed" />
        <!--avec completed un booleen qui va nous indiquer si la tache estcomplete ou non-->
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      </li>
    </ul>

    <!--Formulaire pour ajouter un element a la to-do list-->
    <input v-model="newTodo" placeholder="Ajouter un element" />
    <button @click="addTodo">Ajouter</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const couleur = ref(0);
const b = ref(4);
const couleurs = ["green", "yellow", "red"];
const incrementer = () => {
  b.value++;
  if (couleur.value < couleurs.length - 1) {
    couleur.value++;
  } else {
    couleur.value = 0;
  }
};
//To-do list variables
const todos = ref([]);
const newTodo = ref("");

//Fonction pour ajouter un nouvel element a la liste
const addTodo = () => {
  //on s'assure que chaque nouvel element est un objet
  if (newTodo.value.trim() !== "") {
    todos.value.push({ text: newTodo.value.trim(), completed: false });
    newTodo.value = "";
  }
};

// export default {
//   setup() {
//     let sexe = "Masculin";
//     let profe = "Sans";
//     const profil = "Celibataire";

//     return { sexe, profe, profil };
//   },
// };
</script>

<style lang="scss" scoped>
/*style pour barrer le texte lorsqu'une tache est complete*/
.completed {
  text-decoration: line-through;
  color: red;
}
</style>
