<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();

const buyerForm  = ref({ name: '', email: '', phone: '', message: '' });
const sellerForm = ref({ name: '', email: '', phone: '', address: '' });
const buyerSent  = ref(false);
const sellerSent = ref(false);

function submitBuyer()  { console.log('Buyer form', buyerForm.value);  buyerSent.value  = true; }
function submitSeller() { console.log('Seller form', sellerForm.value); sellerSent.value = true; }

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '500+', label: 'Homes Sold' },
  { value: '#1', label: 'Terre Haute Agency' },
  { value: '100%', label: 'Dedicated to You' },
];
</script>

<template>
  <div class="bg-[var(--color-brand-cream)]">

    <!-- ── HERO ── -->
    <section class="relative bg-[var(--color-brand-dark)] text-[var(--color-brand-white)] overflow-hidden">

      <!-- Subtle background texture -->
      <div class="absolute inset-0 opacity-[0.04]"
        style="background-image: repeating-linear-gradient(0deg, transparent, transparent 60px, white 60px, white 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, white 60px, white 61px);">
      </div>

      <div class="relative max-w-7xl mx-auto px-6 py-28 md:py-36">
        <p class="label-eyebrow mb-5">Terre Haute & Surrounding Communities</p>

        <h1 class="font-display font-light leading-[1.1] tracking-wide mb-6"
          style="font-size: clamp(2.8rem, 7vw, 5.5rem);">
          Let's Find Your<br />
          <span class="text-[var(--color-brand-accent)]">Dream Home</span><br />
          Together.
        </h1>

        <div class="divider-accent !mx-0 mb-8"></div>

        <p class="text-[var(--color-brand-white)]/80 font-[var(--font-body)] text-base leading-relaxed max-w-md mb-10">
          Gibson Real Estate has been serving Terre Haute families for over 20 years. Whether you're buying or selling, we're with you every step of the way.
        </p>

        <div class="flex flex-wrap gap-4">
          <BaseButton class="btn-accent inline-block" variant="primary" @click="router.push('/listings')">Browse Listings</BaseButton>
          <a
            href="https://terrehautelistings.idxbroker.com/idx/map/mapsearch"
            target="_blank" rel="noopener"
            class="btn-accent inline-block"
          >Search Listings by Map</a>
          <BaseButton variant="ghost" @click="router.push('/list-with-us')">List With Us</BaseButton>
        </div>
      </div>
    </section>

    <!-- ── STATS BAR ── -->
    <section class="bg-[var(--color-brand-accent)]">
      <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <p class="font-display text-4xl font-light text-[var(--color-brand-white)] tracking-wide">{{ stat.value }}</p>
          <p class="font-[var(--font-body)] text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-brand-white)]/70 mt-1">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- ── BUYING SECTION ── -->
    <section class="py-24 px-6 border-b border-[var(--color-brand-border)]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Copy -->
        <div>
          <p class="label-eyebrow mb-3">Find your next home</p>
          <h2 class="font-display text-section font-light tracking-wide text-[var(--color-brand-dark)] mb-6">
            Looking for Your Next Home?
          </h2>
          <div class="divider-accent !mx-0 mb-6"></div>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)] mb-4">
            As your Buyer's Representative, we make the process of house hunting much easier and more efficient. We'll help you get financing, explore local neighborhoods, define your budget, and zero in on the features that matter most to you.
          </p>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)] mb-8">
            It's our job to look after your best interests — and we do so <span class="text-[var(--color-brand-dark)] font-medium">at no cost to you</span> as a buyer.
          </p>
          <BaseButton variant="primary" @click="router.push('/listings')">View Current Listings</BaseButton>
        </div>

      </div>
    </section>

    <!-- ── SELLING SECTION ── -->
    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Seller form — left on this section for visual rhythm -->
        <div class="bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] p-8 order-2 lg:order-1">
          <div class="w-6 h-px bg-[var(--color-brand-accent)] mb-5"></div>
          <h3 class="font-display text-2xl font-light text-[var(--color-brand-dark)] tracking-wide mb-6">Request a Free Home Valuation</h3>

          <div v-if="sellerSent" class="border border-[var(--color-brand-accent)]/40 bg-[var(--color-brand-accent)]/5 p-6 text-center">
            <p class="font-display text-xl font-light text-[var(--color-brand-dark)] mb-1">Thank you for reaching out.</p>
            <p class="text-[var(--color-brand-muted)] text-base font-[var(--font-body)]">We'll provide your free valuation shortly.</p>
          </div>

          <div v-else class="flex flex-col gap-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="s-name">Name</label>
                <input id="s-name" v-model="sellerForm.name" type="text" placeholder="Anton Kristensen"
                  class="w-full px-4 py-3 bg-[var(--color-brand-cream)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200" />
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="s-phone">Phone</label>
                <input id="s-phone" v-model="sellerForm.phone" type="tel" placeholder="(812) 000-0000"
                  class="w-full px-4 py-3 bg-[var(--color-brand-cream)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200" />
              </div>
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="s-email">Email</label>
              <input id="s-email" v-model="sellerForm.email" type="email" placeholder="anton@example.com"
                class="w-full px-4 py-3 bg-[var(--color-brand-cream)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="s-address">Property Address</label>
              <input id="s-address" v-model="sellerForm.address" type="text" placeholder="123 Main St, Terre Haute, IN"
                class="w-full px-4 py-3 bg-[var(--color-brand-cream)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200" />
            </div>
            <div>
              <BaseButton variant="primary" @click="submitSeller">Get My Free Valuation</BaseButton>
            </div>
          </div>
        </div>

        <!-- Copy -->
        <div class="order-1 lg:order-2">
          <p class="label-eyebrow mb-3">Sell with confidence</p>
          <h2 class="font-display text-section font-light tracking-wide text-[var(--color-brand-dark)] mb-6">
            Want to Sell Your Home?
          </h2>
          <div class="divider-accent !mx-0 mb-6"></div>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)] mb-4">
            Selling a home on your own can be overwhelming. We'll handle advertising, open houses, offer negotiation, and all the paperwork — so you don't have to.
          </p>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)] mb-8">
            We'll connect you with a local agent who can provide a free home valuation and guide you through every step of the selling process.
          </p>
          <BaseButton variant="primary" @click="router.push('/list-with-us')">Learn About Listing</BaseButton>
        </div>

      </div>
    </section>

  </div>
</template>