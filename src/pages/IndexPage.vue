<template>
  <div class="background">
    <q-section class="flex flex-center présentation background">
      <h1>Le cycle en cours est {{ firstCycle.title }}</h1>
      <h3>
        {{ firstCycle.description }}<br />
        Animé par {{ firstCycle.teacher }}, du {{ firstCycle.startDate }} au {{ firstCycle.endDate }}<br />
      </h3>
    </q-section>
    <q-section class="flex flex-center présentation background">
      <h1>Qui sommes nous ?</h1>
      <h3>
        Nous sommes une association rattachée au <a href="https://www.frbrax31.fr/page/963747-presentation" target="_blank" rel="noopener noreferrer">foyer rural de Brax</a>. Notre association fait
        venir des intervenants dans le but d’animer des ateliers autour d’un thème.
      </h3>
    </q-section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import dataBase from 'src/data/database.json'

const firstCycle = computed(() => {
  return dataBase.cycles[0]
})
</script>

<style>
.background {
  background-color: lightgrey;
}

.présentation {
  margin: 70px;
}
</style>
