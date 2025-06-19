<template>
  <q-card @click="$router.push('intervenant/' + teacher.name)" flat bordered class="teacher-card wrap exemplecursive">
    <img :src="'public/artworks/' + firstPhotoFromFirstArtworkForCycle.filename" class="image-taille" />

    <q-card-section class="blue exemplecursive">
      <div class="text-h6">{{ teacher.name }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none exemplecursive light-blue"> {{ teacher.bio }} </q-card-section>
    <q-card-section v-for="cycle in cycles" :key="cycle.teacher" class="q-pt-none light-green">
      <p>Le(s) cycle(s) de ses/son intervention(s) sont :</p>
      {{ cycle.title }}
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'
import dataBase from 'src/data/database.json'

const props = defineProps(['teacher'])

const cycles = computed(() => {
  const name = props.teacher.name
  const cycles = dataBase.cycles
  const TeacherCycles = cycles.filter((cycle) => cycle.teacher === name)

  return TeacherCycles
})

const firstCycle = computed(() => {
  return cycles.value[0]
})

const firstArtworkForCycle = computed(() => {
  const idCycle = firstCycle.value.title
  const artworks = dataBase.artworks
  const firstArtwork = artworks.find((artwork) => artwork.cycle === idCycle)
  return firstArtwork
})

const firstPhotoFromFirstArtworkForCycle = computed(() => {
  return firstArtworkForCycle.value.photos[0]
})
</script>

<style>
.teacher-card {
  margin-left: 25px;
  margin-right: 25px;
}

.blue {
  color: aliceblue;
  background-color: blue;
}

.exemplecursive {
  font-family: cursive;
}

div {
  font-weight: 600;
}

.color-letter {
  color: blue;
}

.light-blue {
  background-color: lightblue;
}

.light-green {
  background-color: lightgreen;
}

.image-taille {
  max-height: 75%;
  width: auto;
}
</style>
