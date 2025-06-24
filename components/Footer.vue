<script>
export default {
  props: ["theme"],
  setup(props) {
    return props.theme;
  },
};
</script>

<template>
  <footer class="d-flex justify-content-center py-3" :class="`bg-${theme}`">
    <div>fabagile &copy; 2025</div>
  </footer>
</template>