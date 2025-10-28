<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});

defineEmits(["update:modelValue"]);

const capitalize = computed(() => {
  if (!props.id) return "";
  return props.id.charAt(0).toUpperCase() + props.id.slice(1);
});
</script>

<template>
  <div class="mb-4">
    <label :for="props.id" class="flex flex-col gap-2"
      >{{ props.label }}
      <input
        :type="props.type"
        :name="props.id"
        :id="props.id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="`${capitalize} here`"
        class="border rounded-lg px-2 py-1 hover:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 transition placeholder:text-gray-400"
      />
    </label>
  </div>
</template>
