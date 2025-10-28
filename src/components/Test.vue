<script setup>
import { ref } from "vue";

const isVisible = ref(false);
const hasError = ref(false);
const errorClass = ref("error");
const params = [
  { text: "bibibi", text2: "bububu" },
  { text: "bababa", text2: "bobobo" },
  { text: "bebebe", text2: "bybyby" },
];
const count = ref(0);
function increment() {
  count.value++;
}

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
  <button @click="increment">{{ count }}</button>
  <button @click="hasError = !hasError">Error</button>
</template>

<style scoped>
.error {
  color: red;
}
</style>
