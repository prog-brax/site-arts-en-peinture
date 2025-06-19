<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Arts en peinture </q-toolbar-title>
        <q-btn flat @click="$router.push({ name: 'home' })" icon="mdi-home"></q-btn>
        <q-btn flat @click="$router.push('/intervenant/')">intervenant</q-btn>
        <q-btn flat @click="$router.push('/cycle/')">cycle</q-btn>
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
