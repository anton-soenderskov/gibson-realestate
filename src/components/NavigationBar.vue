<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300" @click="router.push('/')">
      Home
    </button>
    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" @click="router.push('/listings')">
      View Listings
    </button>
    <button class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300 ml-4" @click="router.push('/about')">
      About Us
    </button>
    <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ml-4" @click="router.push('/contact')">
      Contact
    </button>
  </div>
</template>