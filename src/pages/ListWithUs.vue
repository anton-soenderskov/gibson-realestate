<script setup>
import { ref } from 'vue';
import BaseButton from '@/components/BaseButton.vue';

const form = ref({ name: '', email: '', phone: '', address: '', message: '' });
const submitted = ref(false);

function submitForm() {
  console.log('Form submitted', form.value);
  submitted.value = true;
}

const steps = [
  { num: '01', title: 'Market Analysis', body: 'We perform a comparable market analysis to determine the most appropriate and competitive price for your home.' },
  { num: '02', title: 'Staging & Presentation', body: 'We provide home staging advice and suggest landscaping changes that help draw buyers in and maximize first impressions.' },
  { num: '03', title: 'Marketing & Exposure', body: 'Your home is advertised through a variety of methods — local publications, professional photography, and MLS listings.' },
  { num: '04', title: 'Offers & Closing', body: 'We negotiate purchase offers on your behalf, manage contract contingencies, and guide you through all paperwork to closing.' },
];

const questions = [
  'How to best prepare your home for market',
  'How to ensure you get the best sales price possible',
  'What elements we bring to set you apart from the competition',
  'The average time on the market in your area',
];
</script>

<template>
  <div class="bg-[var(--color-brand-cream)]">

    <!-- ── Hero banner ── -->
    <section class="bg-[var(--color-brand-dark)] text-[var(--color-brand-white)] py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <p class="label-eyebrow mb-4">Sell with confidence</p>
        <h1 class="font-display text-section font-light tracking-wide mb-4">List With Us</h1>
        <div class="divider-accent !mx-0"></div>
        <p class="mt-6 text-[var(--color-brand-white)]/80 font-[var(--font-body)] text-base leading-relaxed max-w-xl">
          Gibson Real Estate is an agency you can trust to be with you every step of the way — from pricing to closing.
        </p>
      </div>
    </section>

    <!-- ── Intro copy ── -->
    <section class="py-20 px-6 border-b border-[var(--color-brand-border)]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div>
          <p class="label-eyebrow mb-3">Your listing is our priority</p>
          <h2 class="font-display text-3xl font-light tracking-wide text-[var(--color-brand-dark)] mb-6">
            An Agency You Can Trust
          </h2>
          <div class="divider-accent !mx-0 mb-6"></div>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)] mb-4">
            Selling a house on your own can be an overwhelming task. There's advertising to plan, open houses and private showings to arrange, purchase offers to negotiate, contract contingencies to manage, and complicated paperwork to complete.
          </p>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)]">
            Make it easy on yourself by putting your home in the hands of a seasoned professional. Our team has extensive experience marketing properties and showing them to their best advantage.
          </p>
        </div>

        <div class="bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] p-8 flex flex-col gap-6">
          <div class="w-6 h-px bg-[var(--color-brand-accent)]"></div>
          <h3 class="font-display text-2xl font-light text-[var(--color-brand-dark)] tracking-wide">
            Selling in Today's Market
          </h3>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)]">
            Understanding the local market is something we take great pride in. We will explore a comparative market analysis of your home, current listings, and recently sold properties in your area to ensure you make the most of your investment.
          </p>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)]">
            Every home sale is personal — and you can trust us to be with you every step of the way.
          </p>
          <div class="pt-2">
            <a href="#valuation-form" class="btn-outline-dark inline-block">Request a Free Valuation</a>
          </div>
        </div>

      </div>
    </section>

    <!-- ── Process steps ── -->
    <section class="py-20 px-6 border-b border-[var(--color-brand-border)]">
      <div class="max-w-7xl mx-auto">
        <p class="label-eyebrow mb-3 text-center">How it works</p>
        <h2 class="font-display text-3xl font-light tracking-wide text-center text-[var(--color-brand-dark)] mb-12">
          Our Selling Process
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="step in steps" :key="step.num"
            class="bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] p-7 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
          >
            <span class="font-display text-4xl font-light text-[var(--color-brand-accent)] leading-none">{{ step.num }}</span>
            <div class="w-6 h-px bg-[var(--color-brand-accent)]"></div>
            <h3 class="font-display text-xl font-light text-[var(--color-brand-dark)] tracking-wide">{{ step.title }}</h3>
            <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)]">{{ step.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Questions we answer + form ── -->
    <section id="valuation-form" class="py-20 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        <!-- Questions list -->
        <div>
          <p class="label-eyebrow mb-3">We're here to help</p>
          <h2 class="font-display text-3xl font-light tracking-wide text-[var(--color-brand-dark)] mb-6">
            Questions We'll Answer Together
          </h2>
          <div class="divider-accent !mx-0 mb-8"></div>
          <ul class="flex flex-col gap-4">
            <li
              v-for="q in questions" :key="q"
              class="flex items-start gap-4 text-base font-[var(--font-body)] text-[var(--color-brand-charcoal)] leading-relaxed"
            >
              <span class="mt-1.5 w-4 h-px bg-[var(--color-brand-accent)] shrink-0"></span>
              {{ q }}
            </li>
          </ul>
        </div>

        <!-- Valuation form -->
        <div>
          <p class="label-eyebrow mb-3">Get started</p>
          <h2 class="font-display text-3xl font-light tracking-wide text-[var(--color-brand-dark)] mb-8">
            Request a Free Valuation
          </h2>

          <div v-if="submitted" class="border border-[var(--color-brand-accent)]/40 bg-[var(--color-brand-accent)]/5 p-6 text-center">
            <p class="font-display text-xl font-light text-[var(--color-brand-dark)] mb-1">Thank you for reaching out.</p>
            <p class="text-[var(--color-brand-muted)] text-base font-[var(--font-body)]">We'll be in touch with you shortly.</p>
          </div>

          <div v-else class="flex flex-col gap-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-1.5">
                <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="lw-name">Name</label>
                <input id="lw-name" v-model="form.name" type="text" placeholder="Anton Kristensen"
                  class="w-full px-4 py-3 bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200" />
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="lw-phone">Phone</label>
                <input id="lw-phone" v-model="form.phone" type="tel" placeholder="(812) 000-0000"
                  class="w-full px-4 py-3 bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200" />
              </div>
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="lw-email">Email</label>
              <input id="lw-email" v-model="form.email" type="email" placeholder="anton@example.com"
                class="w-full px-4 py-3 bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="lw-address">Property Address</label>
              <input id="lw-address" v-model="form.address" type="text" placeholder="123 Main St, Terre Haute, IN"
                class="w-full px-4 py-3 bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="lw-message">Anything else we should know?</label>
              <textarea id="lw-message" v-model="form.message" rows="4" placeholder="Tell us about your property..."
                class="w-full px-4 py-3 bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200 resize-none"></textarea>
            </div>
            <div>
              <BaseButton variant="primary" @click="submitForm">Request Valuation</BaseButton>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>