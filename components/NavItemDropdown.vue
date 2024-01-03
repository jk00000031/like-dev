<script lang="ts" setup>
  const showPanel = ref(false);
  const props = defineProps({
    panel: Boolean,
  });

  function mousemove() {
    showPanel.value = true;
  }
  function mouseleave() {
    showPanel.value = false;
  }
</script>

<template>
  <div
    class="group"
    @mouseenter="mousemove"
    @mouseleave="mouseleave"
  >
    <slot name="trigger" />
    <Transition
      name="nav-item"
      mode="in-out"
    >
      <div
        v-if="showPanel && props.panel"
        class="absolute top-14 left-1 right-1 bg-white -z-[2] p-4 rounded-bl-lg rounded-br-lg shadow-lg"
      >
        <div>
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
  .nav-item-enter-active,
  .nav-item-leave-active {
    @apply transition duration-150;
  }

  .nav-item-enter-from,
  .nav-item-leave-to {
    @apply -translate-y-full opacity-0;
  }
</style>
