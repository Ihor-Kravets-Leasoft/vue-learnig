import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    counter: JSON.parse(localStorage.getItem("counter")) || 0,
  }),
  actions: {
    increment() {
      this.counter = this.counter + 100;
      localStorage.setItem("counter", JSON.stringify(this.counter));
    },
  },
});

