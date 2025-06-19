<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bandeau">
        <q-toolbar-title class="text-black"> Arts en peinture </q-toolbar-title>
        <q-btn color="black" flat @click="$router.push({ name: 'home' })" :class="{ active: $route.name === 'home' }" icon="mdi-home"></q-btn>
        <q-btn color="black" flat @click="$router.push({ name: 'intervenant' })" :class="{ active: $route.name === 'intervenant' }">intervenant</q-btn>
        <q-btn color="black" flat @click="$router.push({ name: 'cycle' })" :class="{ active: $route.name === 'cycle' }">cycle</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
console.log('Démarrage du site')
</script>

<style scoped>
.bandeau {
  background-image: url('/img/bandeau.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.active {
  color: brown !important;
  border-bottom: 2px solid black;
}
</style>
