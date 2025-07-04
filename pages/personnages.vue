<script setup lang="ts">
  const {data} = await useFetch('/api/characters')
</script>
<template>
  <!-- <Title title="Personnages" /> -->
  <section>
    <!-- <pre>
      {{ data }}
    </pre> -->
    
    <ul>
      <li v-for="(character,i) in data" :k="i">{{ character.fname }}</li>
    </ul>
  </section>
</template>