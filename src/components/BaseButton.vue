<script setup>
defineProps({
  variant: { type: String,  default: 'primary' },
  size:    { type: String,  default: 'md' },
  loading: { type: Boolean, default: false },
  disabled:{ type: Boolean, default: false },
});
</script>

<template>
  <button
    :disabled="disabled || loading"
    class="inline-block font-[var(--font-body)] font-medium tracking-[0.18em] uppercase transition-all duration-300 border outline-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
    :class="[
      size === 'sm' ? 'px-4 py-2 text-[10px]' : 'px-5 py-2.5 text-[11px]',
      {
        'bg-[var(--color-brand-accent)] border-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-accent-hover)] hover:border-[var(--color-brand-accent-hover)]':
          variant === 'primary',

        'bg-transparent border-[var(--color-brand-charcoal)] text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-charcoal)] hover:text-white':
          variant === 'secondary',

        'bg-transparent border-transparent text-[var(--color-brand-white)] hover:text-[var(--color-brand-accent)]':
          variant === 'ghost',

        'bg-transparent border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)] hover:text-white':
          variant === 'ghost-accent',
      }
    ]"
  >
    <span v-if="loading" class="opacity-70">Processing...</span>
    <slot v-else />
  </button>
</template>