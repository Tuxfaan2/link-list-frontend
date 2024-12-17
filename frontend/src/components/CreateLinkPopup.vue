<template>
  <form @submit.prevent="onSubmit">
    <div class="grid grid-cols-1 p-6 gap-5">
      <label
        >URL:
        <input
          pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)"
          v-model="url"
          class="shadow-md shadow-gray-800 bg-gray-400 w-full rounded"
        />
      </label>
      <label>
        Titel:
        <input
          required
          v-model="title"
          class="shadow-md shadow-gray-800 bg-gray-400 w-full rounded"
        />
      </label>
      <label>
        Beschreibung
        <input
          required
          v-model="description"
          class="shadow-md shadow-gray-800 bg-gray-400 w-full rounded"
        />
      </label>
    </div>
    <button
      type="submit"
      class="ml-auto w-fit inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      Fertig
    </button>
  </form>
</template>

<script setup lang="ts">
import type { CreateLinkItemRequest, LinkItem } from '@/types/LinkTypes';
import { ref } from 'vue';

const props = defineProps<{
  linkItem?: LinkItem;
}>();
const emit = defineEmits<{
  (event: 'on-submit', value: CreateLinkItemRequest): void;
}>();
const url = ref<string | null>('https://');
const title = ref<string | null>(null);
const description = ref<string | null>(null);

function onSubmit() {
  const currentUrl = url.value;
  const currentTitle = title.value;
  const currentDescription = description.value;
  if (currentUrl !== null && currentTitle !== null && currentDescription !== null) {
    emit('on-submit', {
      description: currentDescription,
      title: currentTitle,
      url: currentUrl,
    });
  }
}
</script>

<style scoped></style>
