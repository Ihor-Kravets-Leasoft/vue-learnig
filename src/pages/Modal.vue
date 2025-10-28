<script setup>
import { ref } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import ModalContainer from "../components/ModalWindows/ModalContainer.vue";
import Form from "./Form.vue";

const isOpen = ref(false);
</script>

<template>
  <MainLayout>
    <div>
      <p>Modal</p>
      <ModalContainer v-if="isOpen" @close="isOpen = false">
        <Form />
      </ModalContainer>
      <button @click="isOpen = true">Open Modal</button>
    </div>
  </MainLayout>
</template>
