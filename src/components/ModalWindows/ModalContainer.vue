<script setup>
import { defineEmits, onMounted, onUnmounted, Teleport } from "vue";
const emit = defineEmits(["close"]);

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "initial";
});
</script>

<template>
  <Teleport to="body">
    <div
      class="flex w-full h-full fixed top-0 left-0 overflow-auto bg-black/30 backdrop-blur-[2px]"
      @click.self="emit('close')"
    >
      <div class="m-auto bg-teal-900 p-24 rounded shadow-lg relative">
        <button @click="emit('close')" class="absolute top-2 right-2">x</button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
