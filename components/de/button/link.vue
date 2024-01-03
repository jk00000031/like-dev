<script setup lang="ts">
  import type { ButtonProp } from "../prop";
  import { buttonTypeClass } from "../prop";

  defineProps<Omit<ButtonProp, "nativeType">>();
</script>

<template>
  <NuxtLink
    :to="to"
    :class="buttonTypeClass({ intent: type, size })"
  >
    <slot />
  </NuxtLink>
</template>
