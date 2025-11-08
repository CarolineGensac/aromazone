<template>
  <div
    class="product-card border p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
    @click="handleClick"
  >
    <h2 class="text-xl font-semibold">{{ product.name }}</h2>
    <p class="text-gray-600 mt-1">{{ product.description }}</p>
    <p class="text-blue-600 font-bold mt-2">{{ product.price }} €</p>
  </div>
</template>

<script setup lang="ts">
// Déstructuration correcte des props
const { product } = defineProps<{
  product: { name: string; description: string; price: number }
}>()

const { trackEvent } = useTrackEvent()

const handleClick = () => {
  trackEvent('click_product', {
    name: product.name,
    price: product.price
  })
}
</script>
