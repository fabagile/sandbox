<script setup>
import collection from "~/data/equipments.json";
const { recs } = collection;
const header = Object.keys(recs[0]);
const set = [...new Set(recs)];

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
  <Table :collection="recs" />

</template>