<script>
import { Layout, Nav, Footer } from "#components";
import "~/assets/main.css";
// import Layout
export default {
  components: {
    Layout,
    Nav,
    Footer
  },
};
</script>

<template>
    <Nav />
    <main>
      <NuxtPage />
    </main>
    
    <Footer />
  
</template>
