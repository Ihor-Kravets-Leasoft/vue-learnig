<script setup>
import { ref } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import ModalContainer from "../components/ModalWindows/ModalContainer.vue";
import Form from "./Form.vue";
import { useModalOpen } from "../composables/useModalOpen.js";
import OpenModalButton from "../components/Buttons/OpenModalButton.vue";

const modal = useModalOpen();
</script>

<template>
  <MainLayout>
    <div>
      <p>Modal</p>
      <ModalContainer v-if="modal.isModalOpen">
        <Form />
      </ModalContainer>
      <OpenModalButton><template #text>Open Modal</template></OpenModalButton>
    </div>
  </MainLayout>
</template>
