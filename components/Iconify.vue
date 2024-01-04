<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface IconProp {
  icon: string;
  size: string | number;
  color: string;
  inline: boolean;
}

defineOptions({
  inheritAttrs: false
});

const props = defineProps<Partial<Omit<IconProp, 'icon'>> & Pick<IconProp, 'icon'>>();
const attrs = useAttrs();

const bindAttrs = computed(() => {
  const { icon, size, color, inline } = props;
  const { class: className } = attrs;
  return {
    icon,
    width: size,
    height: size,
    color,
    inline,
    class: className
  };
});
</script>

<template>
  <Icon v-bind="bindAttrs" />
</template>
