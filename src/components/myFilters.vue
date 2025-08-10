<script setup lang="ts">
import { computed } from 'vue'

interface Products {
  id: number
  category: string
  description: string
  image: string
  price: number
  rating: object
  title: string
}

const props = defineProps<{
  categories: string[]
  selectedCategory: string
  products: Products[]
  selectedRange: number
  currentPage: number
}>()

const allCategories = ['all'].concat(props.categories)
const minPrice = computed(() => Math.min(...props.products.map((p) => p.price)))
const maxPrice = computed(() => Math.max(...props.products.map((p) => p.price)))
const emit = defineEmits(['update:selectedCategory', 'update:selectedRange', 'update:currentPage'])

const handleCategoryChange = (event: Event) => {
  emit('update:selectedCategory', (<HTMLSelectElement>event.target).value)
  emit('update:currentPage', 1)
}

const handleRangeChange = (event: Event) => {
  emit('update:selectedRange', Number((<HTMLInputElement>event.target).value))
}
</script>

<template>
  <div class="flex justify-around gap-2 p-2">
    <div class="flex w-1/2 justify-center">
      <select
        id="category-filter"
        class="select select-primary"
        :value="selectedCategory"
        @change="handleCategoryChange"
      >
        <option disabled selected>Escoge una categoría</option>
        <option v-for="category in allCategories" :value="category" :key="category">
          {{ category }}
        </option>
      </select>
    </div>
    <div class="w-1/2">
      <div class="flex flex-col items-center">
        <input
          type="range"
          :min="minPrice"
          :max="maxPrice"
          :value="selectedRange"
          @change="handleRangeChange"
          class="range range-primary h-6"
        />
        <div class="text-xs">
          <span>Hasta ${{ selectedRange }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
