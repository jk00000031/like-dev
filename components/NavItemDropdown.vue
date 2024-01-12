<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';

const showPanel = ref(false);
const panelRef = ref();
const navItemDropdownRef = ref();
onClickOutside(navItemDropdownRef, () => (showPanel.value = false));

defineProps({
  panel: Boolean
});

function mousemove() {
  showPanel.value = true;
  nextTick(() => {
    const { clientHeight } = panelRef.value;
    const headerHeight = getComputedStyle(document.querySelector(':root') as Element).getPropertyValue('--shared-nav-height');
    let useHeight = 0;
    const matchArray = headerHeight.match(/\d+/g);
    if (matchArray?.length) {
      let h = +matchArray[0];
      useHeight = clientHeight + h;
    }
    document.documentElement.style.setProperty('--shared-navitem-container-height', `${useHeight}px`);
  });
}
function mouseleave() {
  showPanel.value = false;
}
</script>

<template>
  <div ref="navItemDropdownRef" class="group" @mouseenter="mousemove" @mouseleave="mouseleave">
    <slot name="trigger" />
    <Transition name="nav-item">
      <div
        v-show="panel && showPanel"
        class="panel absolute left-0 top-[var(--shared-nav-height)] w-full bg-white shadow-lg -z-[1] box-content h-[var(--shared-navitem-container-height)] max-h-[calc(100vh-calc(var(--shared-nav-height)*2))] overflow-hidden"
      >
        <div class="h-[calc(100%-var(--shared-nav-height))] overflow-hidden bg-white shadow-lg mt-[var(--shared-nav-height)]">
          <div ref="panelRef" class="container mx-auto">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  &:not(.nav-item-enter-active):not(.nav-item-leave-active) {
    > div {
      @apply overflow-y-auto;
    }
  }
}

.nav-item-enter-active,
.nav-item-leave-active {
  @apply transition delay-75;

  transition: height var(--shared-transition-duration) cubic-bezier(0.4, 0, 0.6, 1);
}

.nav-item-enter-from,
.nav-item-leave-to {
  @apply h-0;
}
</style>
