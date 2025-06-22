<script setup>
import {infos} from "./data"
</script>
<template>
    <h2>A propos</h2>
    <ul>
        <li v-for="info in infos" :key="info.id">
            <NuxtLink :to="`/about/${info.id}`">{{info.title}}</NuxtLink>

        </li>
    </ul>
    
</template>