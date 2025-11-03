<script setup>
import { ref } from "vue";
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
const params = [
  { text: "bibibi", text2: "bububu" },
  { text: "bababa", text2: "bobobo" },
  { text: "bebebe", text2: "bybyby" },
];

defineProps({
  title: String,
});
</script>

<template>
  <ul class="w-full flex flex-row gap-4">
    <li v-for="{ text, text2 } in params" :key="text">
      <p v-cloak>{{ text }}</p>
      <p>{{ text2 }}</p>
    </li>
  </ul>
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
