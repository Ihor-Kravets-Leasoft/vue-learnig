<script setup>
import { ref, onMounted } from "vue";
import { useMainStore } from "../store/store.js";
import { useModalOpen } from "../composables/useModalOpen.js";
import ModalContainer from "../components/ModalWindows/ModalContainer.vue";
import Form from "../pages/Form.vue";
import OpenModalButton from "./Buttons/OpenModalButton.vue";

const counter = useMainStore();
const modal = useModalOpen();

const isVisible = ref(false);
const hasError = ref(false);
const errorClass = ref("error");

defineProps({
  title: String,
});
</script>

<template>

  <p v-if="title" :class="[hasError ? errorClass : '']">{{ title }}</p>
  <p v-show="isVisible">Visible</p>
  <button @click="isVisible = !isVisible">Click</button>
  <button @click="counter.increment">{{ counter.counter }}</button>
  <button @click="hasError = !hasError">Error</button>

  <ModalContainer v-if="modal.isModalOpen">
    <Form />
  </ModalContainer>
  <OpenModalButton><template #text>Open Form</template></OpenModalButton>
</template>

<style scoped>
.error {
  color: red;
}
</style>
