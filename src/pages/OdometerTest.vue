<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const odometerValue = ref(0);

function goHome() {
  router.push("/");
}

onMounted(() => {
  odometerValue.value = 25500;
});
</script>

<template>
  <div
    class="flex flex-col m-auto max-w-[500px] pt-12 justify-center items-center relative"
  >
    <div
      class="flex flex-col gap-4 items-center text-center border border-white/10 bg-glass-gradient-10 p-8 rounded-2xl relative after:absolute after:inset-0 after:rounded-[inherit] after:block after:border after:border-white after:mask-[radial-gradient(97.42%_100%_at_50%_0%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.2)_100%)] after:pointer-events-none"
    >
      <p class="text-2xl">Congrats!</p>
      <h1 class="text-xl">
        Plan changed to
        <span class="text-yellow-100">Standard</span> successfully!
      </h1>
      <div class="flex flex-col items-center gap-4 p-4 ">
        <p class="text-xl self-start">You have received</p>
        <Odometer
          :value="odometerValue"
          class="drop-shadow-emerald-400 drop-shadow-xl inset-shadow-purple-600"
        />
        <p class="text-xl self-end animate-[slide] duration-500 transition">
          Tokens!
        </p>
      </div>
      <p class="text-gray-400">Started at 14.11.2025</p>
      <p class="text-gray-400">Subscription will end on 14.12.2025</p>
      <button @click="goHome">Start to create</button>
    </div>
    <div
      class="absolute pointer-events-none top-0 left-0 w-[279.64px] h-[663px] rounded-full blur-[160px] bg-[linear-gradient(180deg,rgba(29,222,106,0.2625)_0%,rgba(159,255,205,0.2625)_100%)] rotate-[127.67deg] -z-10"
    ></div>
    <div
      class="absolute pointer-events-none top-[50%] left-[25%] w-[279.64px] h-[663px] rounded-full blur-[160px] bg-[linear-gradient(180deg,rgba(29,222,106,0.2625)_0%,rgba(159,255,205,0.2625)_100%)] rotate-[127.67deg] -z-10"
    ></div>
    <div
      class="absolute pointer-events-none top-0 right-0 w-[279.64px] h-[663px] rounded-full blur-[160px] bg-[linear-gradient(180deg,rgba(29,222,106,0.2625)_0%,rgba(159,255,205,0.2625)_100%)] rotate-23 -z-10"
    ></div>
  </div>
</template>
