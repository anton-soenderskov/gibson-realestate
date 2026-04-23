<script setup>
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/ui/Footer.vue'
</script>


<template>
  <div class="flex flex-col min-h-screen">
    <NavigationBar />
    <main class="flex-1 overflow-auto">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>