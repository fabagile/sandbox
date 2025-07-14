<script setup lang="ts">
  const {data} = await useFetch('/api/characters')
</script>
<template>
  <!-- <Title title="Personnages" /> -->
  <section>
    <!-- 
    <pre>
      {{ data }}
    </pre>
    <ul>
      <li v-for="(character,i) in data" :k="i">
        
        {{ character.fname }}
      </li>
    </ul>
    -->
    <dl>
      <template v-for="(character,i) in data" :k="i">
        <dt  >{{ character.fname }} {{ character.lname.toUpperCase() }}</dt>
        <dd>{{ character.powers.join(", ") }}</dd>
        
      </template>
    </dl>
    
    
  
  </section>
</template>