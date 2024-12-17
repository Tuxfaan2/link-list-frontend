<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black opacity-70" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="shadow-2xl shadow-black w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle transition-all"
            >
              <CreateLinkPopup @on-submit="createListItem" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <div class="fixed inset-0 bg-gradient-to-r from-blue-200 to-violet-200 overflow-scroll p-5">
    <div class="w-full grid grid-cols-1 text-neutral-900">
      <RouterLink to="/" class=""> Home </RouterLink>
      <a href="https://github.com/Tuxfaan2" class="size-10 ml-auto" target="”_blank”"
        ><img :src="GithubLogo" alt="svg"
      /></a>
      <label class="flex flex-col w-1/2 mx-auto">
        Suchen:
        <input
          class="w-full border-2 bg-gradient-to-r from-blue-400 to-violet-400 opacity-70 border-gray-950 rounded shadow-md shadow-black"
          prefix="..."
          type="text"
          @input="searchLinks"
          v-model="searchQuery"
        />
      </label>
    </div>
    <div class="grid grid-cols-1 gap-5 pt-12">
      <button
        class="border-2 border-gray-950 size-fit m-auto rounded px-1 font-bold shadow-md shadow-gray-800"
        @click="openCreateLinkPopup"
      >
        New
      </button>
      <LinkItemList :links="links" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LinkItemList from '@/components/LinkItemList.vue';
import { useLinkListApi } from '@/composables/useLinkListApi';
import type { CreateLinkItemRequest, LinkItem } from '@/types/LinkTypes';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { useModal } from '@/composables/useModal';
import CreateLinkPopup from '@/components/CreateLinkPopup.vue';
import GithubLogo from '@/assets/github.svg';

const searchQuery = ref<string>('');
const links = ref<LinkItem[]>([]);
const { createLinkItem, searchLinkItems } = useLinkListApi();
const { isOpen, openModal, closeModal } = useModal();

onMounted(async () => {
  links.value = (await searchLinkItems('')).hits;
});

async function searchLinks() {
  links.value = (await searchLinkItems(searchQuery.value)).hits;
}

function openCreateLinkPopup() {
  openModal();
}

async function createListItem(req: CreateLinkItemRequest) {
  const newLinkItem = await createLinkItem(req);
  links.value.unshift(newLinkItem);
  closeModal();
}
</script>

<style scoped></style>
