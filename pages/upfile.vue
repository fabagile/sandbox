<template>
  <div>
    <label for="file-input" class="btn">Upload File</label>
    <UInput id="file-input" type="file" :multiple="multiple" @change="handleFileSelect" hidden />
    <ul>
      <li v-for="(file, index) in files" :key="file.name">
        {{ file.name }} <UButton color="warning" @click="removeFile(index)">Remove</UButton>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps < {
    multiple?: boolean;
  } > ();

  const files = ref < File[] > ([]);

  const emit = defineEmits < {
    (e: "changed", files: File[]): void;
  }> ();

  function handleFileSelect(e: Event) {
    const input = e.target as HTMLInputElement;
    const filesAsArray = Array.from(input?.files || []);
    files.value = files.value.concat(filesAsArray);
  }

  function removeFile(index: number) {
    files.value.splice(index, 1);
  }
</script>