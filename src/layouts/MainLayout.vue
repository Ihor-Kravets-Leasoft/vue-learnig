<script setup>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
</script>

<template>
  <Header />
  <main class="pt-26 pb-8">
    <div class="container"><slot></slot></div>
  </main>
  <Footer />
</template>
