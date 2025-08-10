import { defineStore } from 'pinia'
import { ref } from 'vue'
import pyDolarVenezuela from '@/services/pyDolarVenezuela'

export const useDolar = defineStore('dolarStore', {
  state: () => ({
    data: ref(null),
    loading: ref(false),
  }),
  actions: {
    async fetchData() {
      if (this.data) {
        console.log('Tasa guardada')
        return
      }

      this.loading = true
      try {
        const response = await pyDolarVenezuela.get('/api/v1/dollar?page=bcv')
        this.data = response.data.monitors.usd.price
      } catch (error) {
        console.error('Error:', error)
      } finally {
        this.loading = false
      }
    },
  },

  persist: true,
})
