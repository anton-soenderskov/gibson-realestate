<script setup>
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();
</script>

<template>
  <div class="bg-[var(--color-brand-dark)] flex-1 flex items-center justify-center px-6 py-32">
    <div class="text-center max-w-lg">

      <!-- Big 404 -->
      <p class="font-display text-[clamp(6rem,20vw,12rem)] font-light leading-none text-[var(--color-brand-muted)] select-none mb-0">
        404
      </p>

      <div class="divider-accent mb-6 mt-0"></div>

      <p class="label-eyebrow mb-4 text-[var(--color-brand-accent)]">Page not found</p>

      <h1 class="font-display text-3xl font-light tracking-wide text-[var(--color-brand-white)] mb-4">
        We couldn't find that page.
      </h1>

      <p class="text-[var(--color-brand-muted)] text-base font-[var(--font-body)] leading-relaxed mb-10">
        The page you're looking for may have been moved, renamed, or no longer exists. Let's get you back on track.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <BaseButton variant="primary" @click="router.push('/')">Go to Homepage</BaseButton>
        <BaseButton variant="secondary" @click="router.push('/listings')">Browse Listings</BaseButton>
      </div>

    </div>
  </div>
</template>