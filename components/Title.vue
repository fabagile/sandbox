<script>
export default {
  props: ["title"],
  setup(props) {
    return props.title;
  },
};
</script>


<template>
  <h1>{{ title }}</h1>
</template>