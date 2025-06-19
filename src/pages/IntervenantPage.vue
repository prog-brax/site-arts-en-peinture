<template>
  <div class="background" :style="backgroundStyle">
    <div class="overlay"></div>
    <div class="message">
      <q-card-section class="exemplecursive top wrap">
        <h1>{{ teacher.name }}</h1>
        <h3>{{ teacher.bio }}</h3>
        <h3>Le(s) cycle(s) de son/ses intervention(s) est/sont :</h3>
        <q-btn v-for="cycle in cycles" :key="cycle.title" flat @click="$router.push('/cycle/' + cycle.title)" class="cycle-button wrap"> {{ cycle.title }} </q-btn>
      </q-card-section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import dataBase from 'src/data/database.json'

const props = defineProps(['id'])

const teacher = dataBase.teachers.find((teacher) => teacher.name === props.id)

const cycles = computed(() => {
  return dataBase.cycles.filter((cycle) => cycle.teacher === teacher.name)
})

const firstCycle = computed(() => {
  return cycles.value[0]
})

const firstArtworkForCycle = computed(() => {
  const artworks = dataBase.artworks
  return artworks.find((artwork) => artwork.cycle === firstCycle.value.title)
})

const firstPhoto = computed(() => {
  return firstArtworkForCycle.value?.photos?.[0]
})

const backgroundStyle = computed(() => {
  if (firstPhoto.value) {
    return {
      backgroundImage: `url('/artworks/${firstPhoto.value.filename}')`,
    }
  }
  return {}
})
</script>

<style>
.hero-image {
  width: 100%;
  height: auto;
}

.background {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 1;
}

.message {
  position: fixed;
  z-index: 2;
  color: white;
  text-align: center;
  padding-top: 40vh;
  font-size: 1.5rem;
  top: -300px;
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100vh;
}

.top {
  text-align: center;
}

.cycle-button {
  color: lightskyblue;
  font-size: 2em;
  text-decoration: underline;
}

.wrap {
  size: 100vw;
}
</style>
