<template>
  <div
    class="shadow-md shadow-gray-800 m-auto w-1/6 size-44 border-2 border-gray-950 bg-blue-300 grid grid-rows-3 text-center rounded-xl"
    v-for="item in links"
    :key="item.id"
  >
    <a class="pt-2 underline text-violet-600" :href="item.url">{{ item.url }}</a>
    <span class="py-1">{{ item.title }}</span>
    <span class="pb-2">{{ item.description }}</span>
  </div>
</template>
<script setup lang="ts">
import type { LinkItem } from '@/types/LinkTypes';

defineProps<{
  links: LinkItem[];
}>();
</script>
