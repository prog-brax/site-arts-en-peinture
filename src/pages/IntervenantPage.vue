<template>
  <div class="q-pa-md row items-start q-gutter-md fact-holder">
    <teacher-card v-for="t in teachers" :key="t.name" :teacher="t" />
  </div>
</template>

<style>
.fact-holder {
  display: grid;
  height: 50vh;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
}
</style>
<script setup>
import TeacherCard from 'src/components/TeacherCard.vue'

import { computed } from 'vue'
import dataBase from 'src/data/database.json'

const teachers = computed(() => {
  return dataBase.teachers
})
</script>
