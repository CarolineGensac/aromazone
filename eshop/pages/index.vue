<template>
  <div class="py-10 px-4">
    <h1 class="text-3xl font-bold text-center text-blue-600 mb-8"> Produits </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard
        v-for="p in products"
        :key="p.name"
        :product="p"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'

const products = [
  { name: 'Parfum', description: 'parfum naturel', price: 25 },
  { name: 'Savon', description: 'savon ph neutre', price: 15 },
  { name: 'Huile essentielle', description: 'Huile essentielle de teatree', price: 12 },
]
</script>
