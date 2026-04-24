<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-[var(--color-brand-dark)] text-[var(--color-brand-white)]">

    <!-- Main footer content -->
    <div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

      <!-- Brand column -->
      <div>
        <h3 class="font-display text-2xl font-light tracking-[0.12em] uppercase mb-4">
          Gibson <span class="text-[var(--color-brand-accent)]">Real Estate</span>
        </h3>
        <div class="divider-accent !mx-0 mb-5"></div>
        <p class="text-[var(--color-brand-muted)] text-sm leading-relaxed font-[var(--font-body)]">
          Dedicated to helping clients find their dream homes in Terre Haute and the surrounding communities for over 20 years.
        </p>
      </div>

      <!-- Quick links -->
      <div>
        <p class="label-eyebrow mb-5">Quick Links</p>
        <nav class="flex flex-col gap-3">
          <button class="nav-link !text-[var(--color-brand-muted)] text-left hover:!text-[var(--color-brand-accent)]" @click="router.push('/')">Home</button>
          <button class="nav-link !text-[var(--color-brand-muted)] text-left hover:!text-[var(--color-brand-accent)]" @click="router.push('/listings')">Listings</button>
          <button class="nav-link !text-[var(--color-brand-muted)] text-left hover:!text-[var(--color-brand-accent)]" @click="router.push('/about')">About Us</button>
          <button class="nav-link !text-[var(--color-brand-muted)] text-left hover:!text-[var(--color-brand-accent)]" @click="router.push('/contact')">Contact</button>
        </nav>
      </div>

      <!-- Contact column -->
      <div>
        <p class="label-eyebrow mb-5">Contact</p>
        <div class="flex flex-col gap-3 text-sm text-[var(--color-brand-muted)] font-[var(--font-body)]">
          <a href="tel:8122439810" class="hover:text-[var(--color-brand-accent)] transition-colors duration-200">812 243 9810</a>
          <a href="mailto:contact@gibsonrealestate.com" class="hover:text-[var(--color-brand-accent)] transition-colors duration-200">contact@gibsonrealestate.com</a>
          <address class="not-italic leading-relaxed">
            1632 Wabash Ave.<br />
            Terre Haute, IN 47807
          </address>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-[var(--color-brand-muted)]/15 py-5">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-[var(--color-brand-muted)] text-xs font-[var(--font-body)] tracking-wider">
        <span>&copy; {{ currentYear }} Gibson Real Estate. All rights reserved.</span>
        <span>Equal Housing Opportunity</span>
      </div>
    </div>

  </footer>
</template>