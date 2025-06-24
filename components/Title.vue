<script>
export default {
  props: ["title"],
  setup(props) {
    return props.title;
  },
};
</script>


<template>
  <h1 class="text-3xl ml-7 my-7">{{ title }}</h1>
</template>