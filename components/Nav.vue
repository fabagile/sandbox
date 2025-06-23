<script setup>
import { RouterLink } from "~/node_modules/vue-router/dist/vue-router";
import { onMounted } from "vue";
import { links } from "~/data/links";
const route = useRoute();
</script>

<script>
export default {};
</script>


<template>
  <nav class="navbar bg-primary-subtle">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img
          src="~/public/android-chrome-192x192.png"
          alt="logo"
          width="48"
          height="48"
        />
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
  </nav>
</template>