<script setup>
import MainLayout from "../layouts/MainLayout.vue";
import { ref } from "vue";
</script>

<template>
  <MainLayout>
    <div>
      <h2 class="text-3xl">Form</h2>
      <form class="flex flex-col">
        <div class="flex flex-col mb-4">
          <label class="mb-1" for="name">Enter Name {{ name }}</label>
          <input
            class="border rounded-2xl px-4 py-2"
            type="text"
            name="name"
            id="name"
            v-model="name"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label class="mb-1" for="email">Enter Email</label>
          <input
            class="border rounded-2xl px-4 py-2"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label class="mb-1" for="tel">Enter Number</label>
          <input
            class="border rounded-2xl px-4 py-2"
            type="number"
            name="tel"
            id="tel"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  </MainLayout>
</template>
