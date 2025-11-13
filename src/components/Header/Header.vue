<template>
  <header
    class="min-h-10 fixed top-0 left-0 w-full text-white flex items-center justify-center p-4 bg-linear-to-b from-teal-900/50 to-teal-300/70 shadow-md z-10 shadow-teal-500/20"
  >
    <ul class="flex gap-4">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/form">Form</RouterLink></li>
      <li><RouterLink to="/modal">Modal</RouterLink></li>
      <li><RouterLink to="/odometer">Odometer</RouterLink></li>
    </ul>
  </header>
</template>
