<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-r from-pink-400 to-purple-500"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h1 class="text-2xl font-bold text-center mb-6">Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLinkListApi } from '@/composables/useLinkListApi';
import Router from '@/router';

const username = ref<string | null>(null);
const password = ref<string | null>(null);
const { createToken } = useLinkListApi();

async function handleLogin() {
  const currentUsername = username.value;
  const currentPassword = password.value;
  if (currentUsername !== null && currentPassword !== null) {
    const resp = await createToken(currentUsername, currentPassword);
    localStorage.setItem('token', resp.token);
    Router.push('/');
  }
}
</script>

<style scoped></style>
