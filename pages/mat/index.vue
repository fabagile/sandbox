<script setup>
import collection from "~/data/equipments.json";
const items = [...collection];

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
  <Table :collection="items" />
</template>
