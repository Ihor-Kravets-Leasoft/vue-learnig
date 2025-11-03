<script setup>
import IInput from "../components/Input/IInput.vue";
import MainLayout from "../layouts/MainLayout.vue";
import { ref, toRaw } from "vue";
import { useMainStore } from "../store/store.js";

const counter = useMainStore();

const userData = ref({
  name: "",
  email: "",
  password: "",
});

function setLocal() {
  const data = toRaw(userData.value);
  localStorage.setItem("userData", JSON.stringify(data));
}

userData.value = JSON.parse(
  localStorage.getItem("userData") ||
    '{"name": "", "email": "", "password": ""}'
);
</script>

<template>
  <MainLayout>
    <div class="flex flex-col gap-6">
      <h2 class="text-3xl">Form</h2>
      <form
        @submit.prevent="console.log(toRaw(userData))"
        @input="setLocal"
        class="flex flex-col"
      >
        <IInput
          label="Enter Your Name"
          type="text"
          id="name"
          v-model="userData.name"
        />
        <IInput
          label="Enter Your Email"
          type="email"
          id="email"
          v-model="userData.email"
        />
        <IInput
          label="Enter Your Passwor"
          type="password"
          id="password"
          v-model="userData.password"
        />
        <button type="button" @click="counter.increment">
          {{ counter.counter }}
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  </MainLayout>
</template>
