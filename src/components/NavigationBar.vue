<script setup>
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();
</script>

<template>
  <header class="flex items-center justify-between px-4 md:px-8 h-20 bg-[var(--color-brand-charcoal)] border-b border-[var(--color-brand-muted)]/20 shrink-0">

    <router-link to="/" class="font-display text-[var(--color-brand-white)] text-xl font-light tracking-[0.12em] uppercase no-underline hover:text-[var(--color-brand-accent)] transition-colors duration-300">
      Gibson <span class="text-[var(--color-brand-accent)]">&nbsp;Real Estate</span>
    </router-link>

    <div class="hidden md:flex items-center gap-2 sm:gap-4">
      <BaseButton variant="ghost" @click="router.push('/')">Home</BaseButton>
      <BaseButton variant="ghost" @click="router.push('/listings')">Listings</BaseButton>
      <BaseButton variant="ghost" @click="router.push('/about')">About</BaseButton>
      <BaseButton variant="ghost" @click="router.push('/contact')">Contact</BaseButton>
      <BaseButton variant="primary" @click="router.push('/contact')">Free Valuation</BaseButton>
    </div>

  </header>
</template>