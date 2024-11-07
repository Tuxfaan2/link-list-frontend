<template>
  <div
    class="m-auto w-1/6 border-2 border-gray-950 bg-blue-300 grid grid-rows-3 gap-4 text-center rounded-xl"
    v-for="item in links"
    v-bind="item"
    :key="item.text"
  >
    <a class="pt-2" :href="item.link">{{ item.link }}</a>
    <span class="py-1">{{ item.label }}</span>
    <span class="pb-2">{{ item.text }}</span>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  links: { link: string; label: string; text: string }[]
}>()
</script>
