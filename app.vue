<script>
import { Nav, Footer } from "#components";
import "~/assets/main.css";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<template>
  <UApp>
    <Nav />
    <NuxtPage />
  </UApp>
</template>
