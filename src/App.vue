<script setup lang="ts">
import myFilters from './components/myFilters.vue'
import MyLoadScreen from './components/myLoadScreen.vue'
import myNavbar from './components/myNavbar.vue'
import myProducts from './components/myProducts.vue'
import { useCategories } from './stores/useCategories'
import { useCurrentPage } from './stores/useCurrentPage'
import { useDolar } from './stores/useDolar'
import { useProducts } from './stores/useProducts'
import { useSelectedCategory } from './stores/useSelectedCategory'
import { useSelectedRange } from './stores/useSelectedRange'
import { onMounted } from 'vue'

const dolarStore = useDolar()
const productStore = useProducts()
const categoryStore = useCategories()
const selectedCategoryStore = useSelectedCategory()
const selectedRangeStore = useSelectedRange()
const currentPageStore = useCurrentPage()

onMounted(() => {
  dolarStore.fetchData()
  productStore.fetchData()
  categoryStore.fetchData()
})
</script>

<template>
  <MyLoadScreen
    v-if="dolarStore.data == null || productStore.data == null || categoryStore.data == null"
  />
  <div v-else>
    <myNavbar :tasa="dolarStore.data" />
    <myFilters
      :categories="categoryStore.data"
      :products="productStore.data"
      v-model:selectedCategory="selectedCategoryStore.data"
      v-model:selectedRange="selectedRangeStore.data"
      v-model:currentPage="currentPageStore.data"
    />
    <myProducts
      :tasa="dolarStore.data"
      :products="productStore.data"
      v-model:selectedCategory="selectedCategoryStore.data"
      v-model:selectedRange="selectedRangeStore.data"
      v-model:currentPage="currentPageStore.data"
    />
  </div>
</template>
