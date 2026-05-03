<script setup>
const imageFiles = import.meta.glob('../assets/agent-cards/*.webp', { eager: true, import: 'default' });

const agentCards = Object.entries(imageFiles).map(([filepath, url]) => {
  const filename = filepath.split('/').pop().replace('.webp', '');
  
  const rawFirstName = filename.split(/[- ]/)[0];
  
  return {
    name: rawFirstName.charAt(0).toUpperCase() + rawFirstName.slice(1),
    image: url
  };
});
</script>
<template>
  <div class="bg-[var(--color-brand-cream)]">

    <section class="bg-[var(--color-brand-dark)] text-[var(--color-brand-white)] py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <p class="label-eyebrow mb-4">Our Story</p>
        <h1 class="font-display text-section font-light tracking-wide mb-4">About Gibson Real Estate</h1>
        <div class="divider-accent !mx-0"></div>
        <p class="mt-6 text-[var(--color-brand-white)]/80 font-[var(--font-body)] text-base leading-relaxed max-w-xl">
          Gibson Real Estate is a family-owned business with over 20 years of experience in the real estate industry. We are dedicated to helping our clients find their dream homes and providing exceptional service throughout the buying and selling process.
        </p>
      </div>
    </section>

    <section class="py-20 px-6 border-b border-[var(--color-brand-border)]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div>
          <p class="label-eyebrow mb-3">Rooted in the community</p>
          <h2 class="font-display text-3xl font-light tracking-wide text-[var(--color-brand-dark)] mb-6">
            A Legacy of Trust
          </h2>
          <div class="divider-accent !mx-0 mb-6"></div>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)] mb-4">
            Since our founding, we've believed that real estate is about more than just transactions; it's about building community and helping families plant their roots in Terre Haute and the surrounding areas.
          </p>
          <p class="text-[var(--color-brand-muted)] text-base leading-relaxed font-[var(--font-body)]">
            Our intimate knowledge of the local market, combined with our commitment to transparency, means you'll always get honest advice and tireless advocacy when you work with us.
          </p>
        </div>

        <div class="bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] p-8 flex flex-col gap-6">
          <div class="w-6 h-px bg-[var(--color-brand-accent)]"></div>
          <h3 class="font-display text-2xl font-light text-[var(--color-brand-dark)] tracking-wide">
            Why Choose Us
          </h3>
          <ul class="flex flex-col gap-4">
            <li class="flex items-start gap-4 text-base font-[var(--font-body)] text-[var(--color-brand-charcoal)] leading-relaxed">
              <span class="mt-1.5 w-4 h-px bg-[var(--color-brand-accent)] shrink-0"></span>
              Over two decades of local market expertise
            </li>
            <li class="flex items-start gap-4 text-base font-[var(--font-body)] text-[var(--color-brand-charcoal)] leading-relaxed">
              <span class="mt-1.5 w-4 h-px bg-[var(--color-brand-accent)] shrink-0"></span>
              A dedicated, family-owned approach to client care
            </li>
            <li class="flex items-start gap-4 text-base font-[var(--font-body)] text-[var(--color-brand-charcoal)] leading-relaxed">
              <span class="mt-1.5 w-4 h-px bg-[var(--color-brand-accent)] shrink-0"></span>
              Comprehensive support from listing to closing
            </li>
          </ul>
        </div>

      </div>
    </section>

    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <p class="label-eyebrow mb-3 text-center">The people behind the promise</p>
        <h2 class="font-display text-3xl font-light tracking-wide text-center text-[var(--color-brand-dark)] mb-12">
          Meet Our Team
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div 
            v-for="agent in agentCards" 
            :key="agent.name" 
            class="group bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] overflow-hidden"
          >
            <div class="relative overflow-hidden bg-[var(--color-brand-border)]">
              <img 
                :src="agent.image" 
                :alt="agent.name" 
              >
            </div>
            
            <div class="p-6">
              <div class="w-6 h-px bg-[var(--color-brand-accent)] mb-4"></div>
              <h3 class="font-display text-xl font-light text-[var(--color-brand-dark)] tracking-wide mb-1">
                {{ agent.name }}
              </h3>
              <p class="text-[var(--color-brand-muted)] text-[10px] font-[var(--font-body)] font-medium tracking-[0.15em] uppercase">
                Real Estate Agent
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>