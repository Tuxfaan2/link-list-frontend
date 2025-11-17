<template>
  <button @click="onDeleteLinkItem" class="size-fit">
    <FontAwesomeIcon :icon="faTrashCan" class="size-6" />
  </button>
  <a class="underline text-violet-600" :href="linkItem.url">{{ linkItem.url }}</a>
  <span class="py-1">{{ linkItem.title }}</span>
  <span class="pb-2">{{ linkItem.description }}</span>
</template>

<script setup lang="ts">
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { LinkItem } from '@/types/LinkTypes';

const props = defineProps<{
  linkItem: LinkItem;
}>();

const emit = defineEmits<{
  (event: 'on-delete-link-item', value: LinkItem): void;
}>();

function onDeleteLinkItem() {
  emit('on-delete-link-item', props.linkItem);
}
</script>

<style scoped></style>
