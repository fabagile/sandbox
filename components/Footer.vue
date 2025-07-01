<script>
export default {
  props: ["theme"],
  setup(props) {
    return props.theme;
  },
};
</script>

<template>
  <footer class="flex justify-center py-3" :class="`bg-${theme}`">
    <div>
      <div>Salle de recette &copy; 2025</div>

    </div>
  </footer>
</template>