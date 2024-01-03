<template>
  <SiteLayoutHeader />
  <slot />
  <SiteLayoutFooter />
</template>

<style lang="scss" scoped>
  .nav-enter-active,
  .nav-leave-active {
    @apply transition duration-200;
  }

  .nav-enter-from,
  .nav-leave-to {
    @apply opacity-0 -translate-y-10;
  }
</style>
