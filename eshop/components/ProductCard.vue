<template>
  <div class="product-card border p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
    <h2 class="text-xl font-semibold">{{ product.name }}</h2>
    <p class="text-gray-600 mt-1">{{ product.description }}</p>
    <p class="text-blue-600 font-bold mt-2">{{ product.price }} €</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    name: string
    description: string
    price: number
  }
}>()
</script>
