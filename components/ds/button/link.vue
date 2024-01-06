<script setup lang="ts">
import type { ButtonProp } from './prop';
import { buttonTypeClass } from './prop';

defineProps<Partial<Omit<ButtonProp, 'nativeType'>> & Pick<ButtonProp, 'to'>>();
</script>

<template>
  <NuxtLink :to="to" :class="buttonTypeClass({ intent: type, size })">
    <slot />
  </NuxtLink>
</template>
./prop./prop
