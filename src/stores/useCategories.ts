import { defineStore } from 'pinia'
import { ref } from 'vue'
import fakestore from '@/services/fakestore'

export const useCategories = defineStore('categoryStore', {
  state: () => ({
    data: ref(null),
    loading: ref(false),
  }),
  actions: {
    async fetchData() {
      if (this.data) {
        console.log('Categorías guardadas')
        return
      }

      this.loading = true
      try {
        const response = await fakestore.get('/categories')
        this.data = response.data
      } catch (error) {
        console.error('Error:', error)
      } finally {
        this.loading = false
      }
    },
  },
  persist: true,
})
