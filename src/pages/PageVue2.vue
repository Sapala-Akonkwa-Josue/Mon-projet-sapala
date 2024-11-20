<template>
  <h1 class="text-center">My hobbies</h1>
  <div style="margin-left: 30%; margin-right: 30%">
    <q-carousel arrows animated v-model="slide" height="200px">
      <q-carousel-slide
        v-for="item in MyData"
        :key="item.id"
        :name="item.id"
        :img-src="item.url"
      >
        <div
          class="absolute-bottom custom-caption text-white"
          style="background: rgba(125, 110, 110, 0.5)"
        >
          <div class="text-h2">{{ item.title }}</div>
          <div class="text-subtitle1">{{ item.description }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import MyData from "src/data/MyData.json";

export default defineComponent({
  name: "PageVue2",
  setup() {
    const slide = ref(1);
    return {
      slide,
      MyData,
    };
  },
});
</script>
