import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectedCategory = defineStore('selectedCategoryStore', {
  state: () => ({
    data: ref('all'),
  }),
})
