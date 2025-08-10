<script setup lang="ts">
import { ref, computed } from 'vue'
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
  products: Products[]
  tasa: number
  selectedCategory: string
  selectedRange: number
  currentPage: number
}>()

const productsPerPage = ref(5)
const emit = defineEmits(['update:currentPage'])
const handlePageChange = (event: Event) => {
  emit('update:currentPage', Number((<HTMLInputElement>event.target).value))
}

const formatter = new Intl.NumberFormat('es-VE', {
  maximumFractionDigits: 2,
})

const filteredProducts = computed(() => {
  if (props.selectedCategory === 'all') {
    return props.products.filter((product) => product.price <= props.selectedRange)
  }

  return props.products
    .filter((product) => product.category === props.selectedCategory)
    .filter((product) => product.price <= props.selectedRange)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / productsPerPage.value)
})

const paginatedProducts = computed(() => {
  const start = (props.currentPage - 1) * productsPerPage.value
  const end = start + productsPerPage.value
  return filteredProducts.value.slice(start, end)
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="mb-4 flex justify-center">
      <p class="font-semibold">{{ filteredProducts.length }} Productos</p>
    </div>
    <TransitionGroup name="fade-list" tag="div" class="group-cards">
      <div v-for="product in paginatedProducts" :key="product.id" class="flex">
        <div class="card bg-base-100 m-2 w-90 border border-indigo-700 shadow-sm">
          <figure class="p-4">
            <img class="h-30 w-35" :src="product.image" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ product.title }}
            </h2>
            <p>{{ product.price }}$ - {{ formatter.format(product.price * tasa) }} Bs</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline badge-primary">{{ product.category }}</div>
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>
    <div class="mt-4 mb-4 flex justify-center gap-2">
      <div v-for="page in totalPages" :key="page" class="join">
        <input
          class="join-item btn decoration-success-content"
          type="radio"
          name="options"
          :aria-label="String(page)"
          :value="page"
          @change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>
