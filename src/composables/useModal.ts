import { ref } from 'vue';

export function useModal() {
  const isOpen = ref<boolean>(false);

  function closeModal() {
    isOpen.value = false;
  }

  function openModal() {
    isOpen.value = true;
  }
  type F = (...args: number[]) => void;

  function debounce(fn: F, t: number): F {
    return function (...args) {
      setTimeout(() => {
        return fn.apply(args);
      }, t);
    };
  }

  return { isOpen, closeModal, openModal };
}
