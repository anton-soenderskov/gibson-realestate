<script setup>
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();
const currentYear = new Date().getFullYear();

const links = [
  { label: 'Home',     path: '/' },
  { label: 'Listings', path: '/listings' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact',  path: '/contact' },
];
</script>

<template>
  <footer class="bg-[var(--color-brand-dark)] text-[var(--color-brand-white)]">

    <!-- Main content -->
    <div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

      <!-- Brand -->
      <div>
        <router-link to="/" class="inline-block no-underline">
          <img
            src="@/assets/Logo With Website.webp"
            alt="Gibson Real Estate"
            class="h-16 w-auto"
          />
        </router-link>
        <div class="divider-accent !mx-0 my-5"></div>
        <p class="text-[var(--color-brand-white)]/80 text-base leading-relaxed font-[var(--font-body)]">
          Dedicated to helping clients find their dream homes in Terre Haute and the surrounding communities for over 20 years.
        </p>
      </div>

      <!-- Quick links -->
      <div>
        <p class="label-eyebrow mb-5">Quick Links</p>
        <nav class="flex flex-col gap-2">
          <button
            v-for="link in links"
            :key="link.path"
            class="text-left text-[var(--color-brand-white)]/80 text-xs font-[var(--font-body)] tracking-[0.15em] uppercase hover:text-[var(--color-brand-accent)] transition-colors duration-200 py-1 w-fit"
            @click="router.push(link.path)"
          >
            {{ link.label }}
          </button>
        </nav>
      </div>

      <!-- Contact -->
      <div>
        <p class="label-eyebrow mb-5">Contact</p>
        <div class="flex flex-col gap-3 text-base text-[var(--color-brand-white)]/80 font-[var(--font-body)]">
          <a href="tel:8122439810"
             class="hover:text-[var(--color-brand-accent)] transition-colors duration-200 w-fit">
            812 243 9810
          </a>
          <a href="mailto:contact@gibsonrealestate.com"
             class="hover:text-[var(--color-brand-accent)] transition-colors duration-200 w-fit break-all">
            contact@gibsonrealestate.com
          </a>
          <address class="not-italic leading-relaxed">
            1632 Wabash Ave.<br />
            Terre Haute, IN 47807
          </address>
          <div class="pt-2">
            <BaseButton variant="ghost-accent" size="sm" @click="router.push('/contact')">
              Get In Touch
            </BaseButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10 py-5">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-[var(--color-brand-muted)] text-[10px] font-[var(--font-body)] tracking-widest uppercase">
        <span>&copy; {{ currentYear }} Gibson Real Estate. All rights reserved.</span>
      </div>
    </div>

  </footer>
</template>