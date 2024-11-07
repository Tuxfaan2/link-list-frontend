<template>
  <div class="w-full pt-16 grid grid-cols-1 text-neutral-900">
    <label class="flex flex-col w-1/2 mx-auto">
      Suchen:
      <input
        class="w-full border-2 bg-gradient-to-r from-blue-400 to-violet-400 opacity-70 border-gray-950 rounded"
        prefix="..."
        type="text"
      />
    </label>
  </div>
  <div class="grid grid-cols-1 gap-5 pt-12">
    <LinkItemList :links="links" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LinkItemList from '@/components/LinkItemList.vue'

const links = ref<{ link: string; label: string; text: string }[]>([])
links.value = [
  { link: 'https://google.de', label: 'Google', text: 'Google ist eine Suchmaschine' },
  { link: 'https://yahoo.de', label: 'Yahoo', text: 'Yahoo ist eine Suchmaschine' },
  { link: 'https://google.de', label: 'Google', text: 'Google ist eine Suchmaschine' },
  { link: 'https://google.de', label: 'Google', text: 'Google ist eine Suchmaschine' },
  { link: 'https://google.de', label: 'Google', text: 'Google ist eine Suchmaschine' },
  { link: 'https://google.de', label: 'Google', text: 'Google ist eine Suchmaschine' },
]
</script>

<style scoped></style>
