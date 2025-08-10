import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCurrentPage = defineStore('currentPageStore', {
  state: () => ({
    data: ref(1),
  }),
})
