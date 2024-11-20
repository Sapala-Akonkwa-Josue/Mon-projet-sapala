<template>
  <div>
    <!-- Header -->
    <header class="q-pa-md text-center bg-blue-6 text-white">
      <h1>Galerie de videos</h1>
    </header>
  </div>
  <!-- Liste des produits -->
  <div class="q-gutter-lg q-pa-sm row">
    <ProductComponent
      :produit="item"
      v-for="(item, index) in produits"
      :key="index"
      @updateFavorite="(id) => updateFavorite(id)"
      @updateLike="(id) => updateLike(id)"
      @commenter="(obj) => commenter(obj)"
    />
  </div>

  <!-- Ici je vais placer le header -->
</template>

<script setup>
import ProductComponent from "src/components/ProductComponent.vue";
import { ref } from "vue";
const produits = ref([
  {
    id: 1,
    videoId: "6Z5CEE25QH8",

    designation: "Musique Tanzanienne",
    favs: 0,
    like: 0,
    comments: [
      {
        username: "sapala",
        comment: "Super musique!",
        date: "2024-11-19 10:00",
      },
    ],
  },
  {
    id: 2,
    videoId: "l3zvl_yDX4M",

    designation: "Musique americaine",
    favs: 0,
    like: 0,
    comments: [
      { username: "John", comment: "Belle musique!", date: "2024-11-19 10:00" },
    ],
  },
  {
    id: 3,
    videoId: "yTdD96FQd5w",

    designation: "Musique Congolaise",
    favs: 0,
    like: 0,
    comments: [
      [{ username: "Louis", comment: "Du lourd!", date: "2024-11-19 10:00" }],
    ],
  },
]);
const updateFavorite = (id) => {
  produits.value.find((el) => el.id === id).favs++;
};
const updateLike = (id) => {
  produits.value.find((el) => el.id === id).like++;
};
const commenter = (obj) => {
  const produit = produits.value.find((el) => el.id === obj.id);
  if (produit) {
    produit.comments.push(obj.comment); //Ajouter le commentaire
  }
};
</script>

<style>
.log {
  font-weight: bolder;
}
header {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
