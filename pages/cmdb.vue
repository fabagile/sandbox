<script setup>
const {data} = await useFetch('/api/cmdb')
</script>

<template>
  <code>
    {{ data }}
  </code>
</template>