<template>
  <div
    class="fixed inset-0 bg-gradient-to-r from-blue-200 to-violet-200 w-full"
    :class="isSelected ? 'hover:cursor-grab' : ''"
    @mousemove="handleMouseMove"
  >
    <div
      :style="'left: ' + positionRight + 'px; top: ' + positionTop + 'px'"
      class="size-44 text-xl bg-blue-900 rounded shadow-md shadow-black relative text-center text-gray-400 font-bold [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]"
      @click="setIsSelected"
    >
      Das ist ein Beispieltext ...
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const positionRight = ref<number>(0);
const positionTop = ref<number>(0);
const isSelected = ref<boolean>(false);
const offsetX = ref<number>(0);
const offsetY = ref<number>(0);
const mouseEvent = ref<MouseEvent | null>(null);

function setIsSelected() {
  const currentMouseEvent = mouseEvent.value;
  if (currentMouseEvent !== null) {
    isSelected.value = !isSelected.value;
    offsetX.value = currentMouseEvent.clientX - positionRight.value;
    offsetY.value = currentMouseEvent.clientY - positionTop.value;
  }
}

function handleMouseMove(event: MouseEvent) {
  mouseEvent.value = event;
  if (isSelected.value) {
    positionTop.value = event.y - offsetY.value;
    positionRight.value = event.x - offsetX.value;
  }
}
</script>

<style></style>
