<template>
  <div
    class="shadow-md shadow-gray-800 m-auto min-w-72 size-44 border-2 border-gray-950 bg-blue-300 grid grid-rows-3 text-center rounded-xl pl-3 pt-3"
    v-for="item in links"
    :key="item.id"
  >
    <LinkItemComponent @on-delete-link-item="onDeleteLinkItem" :linkItem="item" />
  </div>
</template>
<script setup lang="ts">
import LinkItemComponent from '@/components/LinkItemComponent.vue';
import type { LinkItem } from '@/types/LinkTypes';

defineProps<{
  links: LinkItem[];
}>();

const emit = defineEmits<{
  (event: 'on-delete-link-item', value: LinkItem): void;
}>();

function onDeleteLinkItem(item: LinkItem) {
  emit('on-delete-link-item', item);
}
</script>
