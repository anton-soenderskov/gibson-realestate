<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';

const router   = useRouter();
const scrolled = ref(false);
const menuOpen = ref(false);

function onScroll() { scrolled.value = window.scrollY > 60; }
onMounted(()   => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

function navigate(path) {
  router.push(path);
  menuOpen.value = false;
}
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-[var(--color-brand-dark)] transition-shadow duration-300"
    :class="scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.35)]' : 'border-b border-white/5'"
  >
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
        class="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span class="block w-full h-px bg-white transition-all duration-300 origin-center"
              :class="menuOpen ? 'rotate-45 translate-y-[6px]' : ''" />
        <span class="block w-full h-px bg-white transition-all duration-300"
              :class="menuOpen ? 'opacity-0 scale-x-0' : ''" />
        <span class="block w-full h-px bg-white transition-all duration-300 origin-center"
              :class="menuOpen ? '-rotate-45 -translate-y-[6px]' : ''" />
      </button>
    </div>

    <!-- Mobile drawer -->
    <Transition name="drawer">
      <div v-if="menuOpen"
           class="md:hidden bg-[var(--color-brand-dark)] border-t border-white/10 px-6 py-5 flex flex-col gap-3">
        <BaseButton variant="ghost" class="!text-left !justify-start" @click="navigate('/listings')">Listings</BaseButton>
        <BaseButton variant="ghost" class="!text-left !justify-start" @click="navigate('/about')">About</BaseButton>
        <BaseButton variant="ghost" class="!text-left !justify-start" @click="navigate('/contact')">Contact</BaseButton>
        <div class="pt-2 border-t border-white/10">
          <BaseButton variant="primary" @click="navigate('/listwithus')">List with Us</BaseButton>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: max-height 0.3s ease, opacity 0.25s ease;
  overflow: hidden;
}
.drawer-enter-from,
.drawer-leave-to  { max-height: 0;     opacity: 0; }
.drawer-enter-to,
.drawer-leave-from { max-height: 360px; opacity: 1; }
</style>