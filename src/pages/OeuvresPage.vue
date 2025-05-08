<template>
  <header>
    <h1 class="">Nos différents cycles</h1>
  </header>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-img :src="'/artworks/' + oeuvre1.photos[0].filename">
        <div class="absolute-bottom text-subtitle2 text-center">{{ oeuvre1.artist }}, date: {{ oeuvre1.photos[0].date }}</div>
        <div class="description">cette oeuvre fait partie du cycle {{ oeuvre1.cycle }}, <br />les techniques utilisées sont:{{ oeuvre1.technics.join(' ') }}</div>
      </q-img>
    </q-card>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import database from 'src/data/database.json'

console.log(database)
const oeuvre1 = reactive(database.artworks[0])
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}

.my-card:hover {
  border: 10px solid pink;
  opacity: 0.5;
  transition: 1s ease-in-out;
}

.description {
  background: none;
}
</style>
