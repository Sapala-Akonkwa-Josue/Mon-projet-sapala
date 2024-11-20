<template>
  <div class="product-card bg-green-1 shadow-10 q-pa-md">
    <!-- Vidéo YouTube -->

    <div class="product-video">
      <iframe
        :src="'https://www.youtube.com/embed/' + produit?.videoId"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="q-ml-auto q-mr-auto q-mb-md"
      ></iframe>
    </div>

    <!-- Titre du produit -->

    <div
      class="text-center text-bold text-white bg-blue-4 q-ml-auto q-mr-auto q-mt-sm"
      style="font-size: 170%; text-transform: capitalize; width: 80%"
    >
      {{ produit?.designation || "Titre non disponible" }}
    </div>

    <!-- Boutons Favoris et Like -->

    <div class="flex items-center justify-center q-my-md">
      <q-btn
        name="favorite"
        icon="favorite"
        color="red-6"
        flat
        @click="favs(produit?.id)"
      /><span class="q-ml-sm text-red-6">{{ produit?.favs }}</span>

      <q-btn
        name="thumb_up"
        icon="thumb_up"
        color="blue-4"
        flat
        class="q-ml-md"
        @click="like(produit?.id)"
      /><span class="q-ml-sm text-blue-4">{{ produit?.like }}</span>
    </div>

    <!-- Section de commentaires -->

    <div>
      <q-input
        v-model="comment"
        type="text"
        label="Ajoutez un commentaire"
        dense
        outlined
      />

      <q-btn
        color="primary"
        label="Envoyer"
        class="q-my-sm"
        @click="commenter({ id: produit?.id, comment: comment })"
      />

      <div
        v-if="produit?.comments && produit.comments.length > 0"
        class="q-my-md"
      >
        <div
          v-for="(item, index) in produit.comments"
          :key="index"
          class="comment-item"
        >
          <strong>{{ item.username }}</strong>

          <p>{{ item.comment }}</p>

          <small>{{ item.date }}</small>
        </div>
      </div>

      <div v-else>
        <p class="text-grey">Aucun commentaire disponible.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const comment = ref("");

const emits = defineEmits(["updateFavorite", "updateLike", "commenter"]);

const props = defineProps({
  produit: {
    type: Object,

    required: true,
  },
});

const favs = (id) => emits("updateFavorite", id);

const like = (id) => emits("updateLike", id);

const commenter = (obj) => {
  if (comment.value.trim().length > 0) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const commentData = {
        username: user.nom,

        comment: comment.value,

        date: new Date().toLocaleString(),
      };

      emits("commenter", { id: obj.id, comment: commentData });

      comment.value = "";
    } else {
      alert("Vous devez être connecté pour commenter.");
    }
  } else {
    alert("Veuillez entrer un commentaire.");
  }
};
</script>
<style>
.product-card {
  border-radius: 10px;

  padding: 20px;

  background: #f9f9f9;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-video iframe {
  width: 100%;

  height: 250px;

  border-radius: 10px;
}

.comment-item {
  background: #fff;

  padding: 10px;

  border: 1px solid #ddd;

  border-radius: 5px;

  margin-bottom: 10px;
}

.text-grey {
  color: #999;
}
</style>
