<template>
  <div>
    <button class="size-fit" @click="onGoOnePageLeft">
      <FontAwesomeIcon :icon="faArrowAltCircleLeft" />
    </button>
    <span>{{ currentPage }}/{{ totalPages }}</span>
    <button class="size-fit" @click="onGoOnePageRight">
      <FontAwesomeIcon :icon="faArrowAltCircleRight" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{ (event: 'on-go-left'): void; (event: 'on-go-right'): void }>();

function onGoOnePageRight() {
  emit('on-go-right');
}

function onGoOnePageLeft() {
  emit('on-go-left');
}
</script>

<style scoped></style>
