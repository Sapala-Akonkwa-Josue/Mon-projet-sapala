<template>
  <h1 class="text-center">Calculator</h1>
  <div class="row justify-center">
    <div
      class="bg-black row q-gutter-xs q-pa-xs"
      style="width: 70%; border-radius: 10px"
    >
      <div class="col">
        <div class="bg-orange-2 q-ma-xs q-pa-xs text-right text-black">
          {{ previous_value || "." }}
        </div>

        <div
          class="bg-blue q-ma-xs q-pa-xs text-right text-black"
          style="font-size: 50px"
        >
          {{ current_value || "0" }}
        </div>
      </div>

      <q-btn-group class="q-gutter-xs" style="width: 100%">
        <q-btn
          @click="calculator(item)"
          v-for="(item, index) in operators_line1"
          :key="index"
          class="text-white col bg-indigo"
          push
          :label="item"
        />
      </q-btn-group>
      <q-btn-group class="q-gutter-xs" style="width: 100%">
        <q-btn
          @click="calculator(item)"
          v-for="(item, index) in operators_line2"
          :key="index"
          class="text-white col bg-indigo"
          push
          :label="item"
        />
      </q-btn-group>
      <q-btn-group class="q-gutter-xs" style="width: 100%">
        <q-btn
          @click="calculator(item)"
          v-for="(item, index) in operators_line3"
          :key="index"
          class="text-white col bg-indigo"
          push
          :label="item"
        />
      </q-btn-group>
      <q-btn-group class="q-gutter-xs" style="width: 100%">
        <q-btn
          @click="calculator(item)"
          v-for="(item, index) in operators_line4"
          :key="index"
          class="text-white col bg-indigo"
          push
          :label="item"
        />
      </q-btn-group>
      <q-btn-group class="q-gutter-xs" style="width: 100%">
        <q-btn
          @click="calculator(item)"
          v-for="(item, index) in operators_line5"
          :key="index"
          class="text-white col bg-indigo"
          push
          :label="item"
        />
      </q-btn-group>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageVue3",

  methods: {
    calculator(item) {
      if (!isNaN(item) || item === ",") {
        // Si c'est un nombre ou une virgule, on l'ajoute à la valeur actuelle
        this.current_value += item;
      }
      if (item == "C") {
        this.current_value = "";
        this.previous_value = "";
      }
      if (["+", "*", "/", "^"].includes(item)) {
        this.operators = item;
        this.previous_value = this.current_value + "" + item;
        this, (current_value = "");
      }
    },
  },
  data() {
    const previous_value = "";
    const current_value = "";
    const operators_line1 = ["C", "+", "-", "*"];
    const operators_line2 = ["7", "8", "9", "/"];
    const operators_line3 = ["4", "5", "6", "%"];
    const operators_line4 = ["1", "2", "3", "^"];
    const operators_line5 = ["0", ",", "="];

    return {
      previous_value,
      current_value,
      operators_line1,
      operators_line2,
      operators_line3,
      operators_line4,
      operators_line5,
    };
  },
});
</script>
