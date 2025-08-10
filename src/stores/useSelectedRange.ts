import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectedRange = defineStore('selectedRangeStore', {
  state: () => ({
    data: ref(500),
  }),
})
