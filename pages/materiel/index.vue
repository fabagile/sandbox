<script setup>
 import collection from "~/data/materials.json";
// const items = [...collection];

console.log(collection);
</script>
<script>
import Table from "~/components/Table.vue";
import Title from "~/components/Title.vue";

export default {
  components: {
    Title,
    Table,
  },
};
</script>

<template>
  <Title title="Matériel" />
  <!-- <code>{{ JSON.stringify(items.header) }}</code> -->
  <Table :collection="collection" />
</template>
