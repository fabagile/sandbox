<script setup>
import { RouterLink } from "~/node_modules/vue-router/dist/vue-router";
import {onMounted} from 'vue'
import { links } from "./links";
const route = useRoute()
</script>

<script>

export default {
    
}
</script>


<template>
  <ul class="nav nav-pills">
    <li v-for="link in links"  :key="link.url" class="nav-item">
        <a class="nav-link" :class="route.path==link.url && 'active'" aria-current="page" :href="link.url">{{link.label}}</a>
        
  <!-- {{route.path==link.url}} -->
    </li>

    <!-- <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li> -->
  </ul>
</template>