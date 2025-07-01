<script>
export default {
  props: ["collection"],
  setup(props) {
    const { collection } = props;
    return { collection };
  },
};
</script>


<template>
  <UTable sticky :columns="collection.header" :data="collection.values" class="flex-1" />
</template>