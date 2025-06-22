<script>
import { Layout,Nav } from '#components';
import '~/assets/main.css'
// import Layout
export default {
  components:{
    Layout,Nav
  }
};
</script>

<template>
  <div class="container">
    <!-- <Layout /> -->
    <Nav/>
    <!-- <nav>
      <a href="/">Accueil</a>
      |
      <a href="/about">A propos</a>
      |
      <a href="/help">Aide</a>
    </nav> -->
    <!-- <NuxtRouteAnnouncer /> -->
    <NuxtPage />
  </div>
</template>
