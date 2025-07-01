<script setup>
import materials from "~/data/materials.json"
const dataFrame = JSON.stringify(materials, null, 2)
// return materials
</script>

<template>
  <pre>
    {{ dataFrame }}
  </pre>

</template>