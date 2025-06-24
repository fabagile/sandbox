<script setup>
import { RouterLink } from "~/node_modules/vue-router/dist/vue-router";
// import { onMounted } from "vue";
import  links  from "~/data/links.json";
const items = links
const route = useRoute();
const size = "64"
const title = "Salle de recette"
</script>

<script>
// import {UNavigationMenu} from "@nuxt/ui"
export default {
  // components: {UNavigationMenu},
  // props: ["theme"],
  // setup(props) {
  //   return props.theme;
  // },
};
</script>


<template>
  <UNavigationMenu :items="items" class="w-full justify-center" />
  <!-- <nav class="navbar" :class="`bg-${theme}`">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img
          src="~/public/android-chrome-192x192.png"
          alt="logo"
          :width="size"
          :height="size"
        />
        <span class="fs-4 ms-2">{{title}}</span>
      </a>
      <ul class="nav nav-pills">
        <li v-for="link in links" :key="link.url" class="nav-item">
          <a
            class="nav-link"
            :class="route.path == link.url && 'active'"
            aria-current="page"
            :href="link.url"
            >{{ link.label }}</a
          >
        </li>
      </ul>
    </div>
  </nav> -->
</template>