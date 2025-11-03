<script setup>
import { useModalOpen } from "../../composables/useModalOpen";

const modal = useModalOpen();
</script>

<template>
  <button @click="modal.openModal">
    <slot name="left-icon" />
    <p><slot name="text" /></p>
    <slot name="right-icon" />
  </button>
</template>
