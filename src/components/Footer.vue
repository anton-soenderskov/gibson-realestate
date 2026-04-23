<script setup>
import { computed } from 'vue';

const currentYear     = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; {{ currentYear }} Gibson Real Estate. All rights reserved.</p>
    </div>
  </footer>
</template>


