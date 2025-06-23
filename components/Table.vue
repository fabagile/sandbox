<script>
export default {
  props: ["collection"],
  setup(props) {
    const { collection } = props;
    const header = Object.keys(collection[0]);
    console.log(header);
    return { header, collection };
  },
};
</script>


<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th
          v-for="(item, i) in header"
          :key="i"
          class="text-uppercase text-center"
          scope="col"
        >
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, r) in collection" :key="r">
        <td class="text-center" v-for="(cell, c) in row" :key="c">
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>