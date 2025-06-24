<script setup>
import { ref } from 'vue'

const entry = ref('')
// console.log(typeof entry.value)
const getBarcode = () => entry.value

// const barcode = getBarcode()
const values = []
const onSubmit =()=> (values.push(entry.value))

</script>

<template>
    <form @submit.prevent="onSubmit" action="" method="get">
        <input type="text" @input="getBarcode" v-model="entry">
        <button class="btn btn-outline-warning" type="submit">Valider</button>
    </form>
    <!-- <p>{{ values }}</p> -->
</template>