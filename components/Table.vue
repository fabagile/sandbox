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
  <UTable sticky :data="collection" class="flex-1" />
</template>