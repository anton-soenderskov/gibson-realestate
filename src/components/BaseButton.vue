<script setup>
defineProps({
  variant: { type: String,  default: 'primary' },
  loading: { type: Boolean, default: false },
  disabled:{ type: Boolean, default: false },
});
</script>

<template>
  <button
    :disabled="disabled || loading"
    class="px-5 py-2.5 rounded-sm text-[11px] font-[var(--font-body)] font-medium tracking-[0.18em] uppercase transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed border outline-none"
    :class="{
      'bg-[var(--color-brand-accent)] border-[var(--color-brand-accent)] text-[var(--color-brand-white)] hover:opacity-85': variant === 'primary',
      'bg-transparent border-[var(--color-brand-muted)] text-[var(--color-brand-muted)] hover:bg-[var(--color-brand-muted)]/10': variant === 'secondary',
      'bg-transparent border-transparent text-[var(--color-brand-white)] hover:text-[var(--color-brand-accent)]': variant === 'ghost',
    }"
  >
    <span v-if="loading">Processing...</span>
    <slot v-else />
  </button>
</template>