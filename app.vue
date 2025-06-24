<script>
import { Nav, Footer } from "#components";
import "~/assets/main.css";
// import Layout
export default {
  // data(): {
  //   theme: "success-subtle",
  // },

  components: {
    Nav,
    Footer,
  },
};
</script>

<template>
  <Nav theme="success-subtle" />
  <main class="container my-5">
    <NuxtPage />
  </main>

  <Footer theme="success-subtle" />
</template>
