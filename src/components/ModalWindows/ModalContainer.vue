<script setup>
import { onMounted, onUnmounted, Teleport } from "vue";
import { useModalOpen } from "../../composables/useModalOpen";

const modal = useModalOpen();

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "initial";
});
</script>

<template>
  <UModal>
    <div
      @click.self="modal.closeModal"
      @keydown.esc="modal.closeModal"
      class="flex w-full h-full fixed top-0 left-0 overflow-auto bg-black/30 backdrop-blur-[2px] z-50"
    >
      <div class="m-auto bg-teal-900 p-24 rounded-2xl shadow-lg relative">
        <button @click="modal.closeModal" class="absolute top-2 right-2">
          x
        </button>
        <slot></slot>
      </div>
    </div>
  </UModal>
</template>
