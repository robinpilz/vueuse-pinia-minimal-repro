import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: 'counterStore',
  state: () => ({
    test: useStorage('test', false),
  }),
})