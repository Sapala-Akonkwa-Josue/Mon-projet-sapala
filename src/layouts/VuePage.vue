<template>
  <!--on insere l'entete avec la commande header-->
  <q-layout>
    <q-header reveal elevated class="bg-red">
      <q-toolbar-title class="text-center">My Appl</q-toolbar-title>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!--on insere le pied de page avec la commande footer-->

    <q-footer reveal elevated>
      <q-toolbar>
        <div class="button-list q-gutter-md">
          <q-btn class="bg-red" to="/"> <q-icon name="house" /></q-btn>
          <q-btn class="bg-blue" label="PageVue1" to="/PageVue1"></q-btn>
          <q-btn class="bg-orange" label="PageVue2" to="/PageVue2"></q-btn>
          <q-btn class="bg-green" label="PageVue4" to="/PageVue4"></q-btn>
          <q-btn
            class="bg-gray"
            label="LoginComponent"
            to="/LoginComponent"
          ></q-btn>

          <q-btn class="bg-black" label="PageAffiche" to="/PageAffiche"></q-btn>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "VuePage",
});
</script>
<style>
.button-list {
  margin-left: auto;
  margin-right: auto;
}
</style>
