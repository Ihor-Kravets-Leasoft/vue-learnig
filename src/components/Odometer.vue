<script setup>
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  initialValue: {
    type: Number,
    default: 0,
  },
});

const odometerRef = ref(null);
let odometerInstance = null;

onMounted(() => {
  odometerInstance = new Odometer({
    el: odometerRef.value,
    value: props.initialValue,
    format: "(.ddd)",
    duration: 3000,
  });
});

watch(
  () => props.value,
  (newVal) => {
    if (odometerInstance) {
      odometerInstance.update(newVal);
    }
  }
);
</script>

<template>
  <div ref="odometerRef" class="text-8xl text-[#1DDE6A]">
    {{ initialValue }}
  </div>
</template>

<style>
.odometer-value {
  color: aliceblue;
}
</style>
