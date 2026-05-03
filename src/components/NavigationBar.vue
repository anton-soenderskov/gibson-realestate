<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';

const router   = useRouter();
const menuOpen = ref(false);

function navigate(path) {
  router.push(path);
  menuOpen.value = false;
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-[var(--color-brand-dark)] border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">

      <!-- Logo -->
      <router-link to="/" class="flex items-center no-underline">
        <img
          src="@/assets/White Transparent Background.webp"
          alt="Gibson Real Estate"
          class="h-25 w-auto"
        />
      </router-link>

      <!-- Desktop links -->
      <nav class="hidden md:flex items-center gap-1">
        <BaseButton variant="ghost" @click="navigate('/listings')">Listings</BaseButton>
        <BaseButton variant="ghost" @click="navigate('/about')">About</BaseButton>
        <BaseButton variant="ghost" @click="navigate('/contact')">Contact</BaseButton>
        <div class="ml-3">
          <BaseButton variant="primary" @click="navigate('/listwithus')">List with Us</BaseButton>
        </div>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden w-8 h-8 flex flex-col justify-center gap-[5px] p-1"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span class="block w-full h-px bg-white" />
        <span class="block w-full h-px bg-white" />
        <span class="block w-full h-px bg-white" />
      </button>
    </div>

    <!-- Mobile drawer -->
    <div v-if="menuOpen"
         class="md:hidden bg-[var(--color-brand-dark)] border-t border-white/10 px-6 py-5 flex flex-col gap-3">
      <BaseButton variant="ghost" class="!text-left !justify-start" @click="navigate('/listings')">Listings</BaseButton>
      <BaseButton variant="ghost" class="!text-left !justify-start" @click="navigate('/about')">About</BaseButton>
      <BaseButton variant="ghost" class="!text-left !justify-start" @click="navigate('/contact')">Contact</BaseButton>
      <div class="pt-2 border-t border-white/10">
        <BaseButton variant="primary" @click="navigate('/listwithus')">List with Us</BaseButton>
      </div>
    </div>
  </header>
</template>