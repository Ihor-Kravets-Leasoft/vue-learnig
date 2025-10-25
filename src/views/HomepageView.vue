<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import MainHeader from "../components/MainHeader/MainHeader.vue";
</script>

<template>
  <Sidebar />
  <MainHeader />
  <div class="flex flex-col min-h-screen">
    <slot></slot>
  </div>
</template>
