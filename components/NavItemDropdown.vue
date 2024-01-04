<script lang="ts" setup>
const showPanel = ref(false);
const props = defineProps({
  panel: Boolean
});

function mousemove() {
  setTimeout(() => (showPanel.value = true), 200);
}
function mouseleave() {
  showPanel.value = false;
}
</script>

<template>
  <div class="group" @mouseenter="mousemove" @mouseleave="mouseleave">
    <slot name="trigger" />
    <Transition name="nav-item" mode="in-out">
      <div
        v-if="showPanel && props.panel"
        class="absolute left-0 top-0 w-full bg-white/40 backdrop-blur -z-[1] pt-16 rounded-bl-lg rounded-br-lg shadow-lg"
      >
        <div class="bg-white">
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
  @apply opacity-0;
}
</style>
