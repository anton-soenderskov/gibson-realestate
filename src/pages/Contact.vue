<script setup>
import { ref } from 'vue';
import BaseButton from '@/components/BaseButton.vue';

const form = ref({ name: '', email: '', phone: '', message: '' });
const submitted = ref(false);

function submitForm() {
  console.log('Form submitted', form.value);
  submitted.value = true;
}

const services = [
  { title: 'Listing & Selling',  description: 'Expert guidance to market your home and achieve the best possible price.' },
  { title: 'Rentals',            description: 'Full-service rental management connecting landlords with quality tenants.' },
  { title: 'Home Staging',       description: 'Professional staging strategies that help buyers envision their future home.' },
  { title: 'Market Analysis',    description: 'In-depth local market insights so you can buy or sell with confidence.' },
];
</script>

<template>
  <div class="bg-[var(--color-brand-white)]">

    <!-- ── Hero banner ── -->
    <section class="bg-[var(--color-brand-dark)] text-[var(--color-brand-white)] py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <p class="label-eyebrow mb-4">We're here to help</p>
        <h1 class="font-display text-section font-light tracking-wide mb-4">Contact Us</h1>
        <div class="divider-accent !mx-0"></div>
        <p class="mt-6 text-[var(--color-brand-white)]/80 font-[var(--font-body)] text-base leading-relaxed max-w-xl">
          Whether you're buying, selling, or simply exploring your options — reach out and we'll connect you with the right guidance.
        </p>
      </div>
    </section>

    <!-- ── Services ── -->
    <section class="py-20 px-6 border-b border-[var(--color-brand-border)]">
      <div class="max-w-7xl mx-auto">
        <p class="label-eyebrow mb-3 text-center">What we offer</p>
        <h2 class="font-display text-3xl font-light tracking-wide text-center text-[var(--color-brand-dark)] mb-12">Our Services</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] p-7 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300"
          >
            <div class="w-6 h-px bg-[var(--color-brand-accent)]"></div>
            <h3 class="font-display text-xl font-light text-[var(--color-brand-dark)] tracking-wide">{{ service.title }}</h3>
            <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)]">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Contact form + info ── -->
    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        <!-- Form -->
        <div>
          <p class="label-eyebrow mb-3">Send us a message</p>
          <h2 class="font-display text-3xl font-light tracking-wide text-[var(--color-brand-dark)] mb-8">Get In Touch</h2>

          <div v-if="submitted" class="border border-[var(--color-brand-accent)]/40 bg-[var(--color-brand-accent)]/5 p-6 text-center">
            <p class="font-display text-xl font-light text-[var(--color-brand-dark)] mb-1">Thank you for reaching out.</p>
            <p class="text-[var(--color-brand-muted)] text-base font-[var(--font-body)]">We'll be in touch with you shortly.</p>
          </div>

          <div v-else class="flex flex-col gap-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-1.5">
                <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="name">Name</label>
                <input
                  id="name" v-model="form.name" type="text" placeholder="Anton Kristensen"
                  class="w-full px-4 py-3 bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200"
                />
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="phone">Phone</label>
                <input
                  id="phone" v-model="form.phone" type="tel" placeholder="(812) 000-0000"
                  class="w-full px-4 py-3 bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200"
                />
              </div>
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="email">Email</label>
              <input
                id="email" v-model="form.email" type="email" placeholder="anton@example.com"
                class="w-full px-4 py-3 bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="label-eyebrow !text-[var(--color-brand-charcoal)]" for="message">Message</label>
              <textarea
                id="message" v-model="form.message" rows="5" placeholder="Tell us how we can help..."
                class="w-full px-4 py-3 bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] text-[var(--color-brand-dark)] text-base font-[var(--font-body)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors duration-200 resize-none"
              ></textarea>
            </div>
            <div>
              <BaseButton variant="primary" @click="submitForm">Send Message</BaseButton>
            </div>
          </div>
        </div>

        <!-- Contact info -->
        <div class="flex flex-col gap-10">
          <div>
            <p class="label-eyebrow mb-3">Our office</p>
            <h2 class="font-display text-3xl font-light tracking-wide text-[var(--color-brand-dark)] mb-6">Find Us</h2>
            <div class="flex flex-col gap-4 text-base font-[var(--font-body)] text-[var(--color-brand-muted)]">
              <div>
                <p class="text-[var(--color-brand-charcoal)] font-medium mb-0.5 tracking-wide uppercase text-[10px]">Address</p>
                <address class="not-italic leading-relaxed">
                  1632 Wabash Ave.<br />Terre Haute, IN 47807
                </address>
              </div>
              <div>
                <p class="text-[var(--color-brand-charcoal)] font-medium mb-0.5 tracking-wide uppercase text-[10px]">Phone</p>
                <a href="tel:8122439810" class="hover:text-[var(--color-brand-accent)] transition-colors duration-200">812 243 9810</a>
              </div>
              <div>
                <p class="text-[var(--color-brand-charcoal)] font-medium mb-0.5 tracking-wide uppercase text-[10px]">Email</p>
                <a href="mailto:contact@gibsonrealestate.com" class="hover:text-[var(--color-brand-accent)] transition-colors duration-200 break-all">contact@gibsonrealestate.com</a>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="border border-[var(--color-brand-border)] overflow-hidden">
            <iframe
              title="Gibson Real Estate location"
              width="100%"
              height="320"
              style="border:0; display:block;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.123!2d-87.4131!3d39.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886d9b9b9b9b9b9b%3A0x0!2s1632+Wabash+Ave%2C+Terre+Haute%2C+IN+47807!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus&q=1632+Wabash+Ave,+Terre+Haute,+IN+47807"
            ></iframe>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>