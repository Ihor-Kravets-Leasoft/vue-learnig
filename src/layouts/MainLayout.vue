<script setup>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
</script>

<template>
  <Header />
  <main>
    <div class="container"><slot></slot></div>
  </main>
  <Footer />
</template>
