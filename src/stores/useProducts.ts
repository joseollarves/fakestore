import { defineStore } from 'pinia'
import { ref } from 'vue'
import fakestore from '@/services/fakestore'

export const useProducts = defineStore('productStore', {
  state: () => ({
    data: ref(null),
    loading: ref(false),
  }),
  actions: {
    async fetchData() {
      if (this.data) {
        console.log('Productos guardados')
        return
      }

      this.loading = true
      try {
        const response = await fakestore.get('/')
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
