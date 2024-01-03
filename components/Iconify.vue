<script setup lang="ts">
  import { Icon } from "@iconify/vue";

  interface IconProp {
    icon: string;
    size: string | number;
    color: string;
  }

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps<Partial<Omit<IconProp, "icon">> & Pick<IconProp, "icon">>();
  const attrs = useAttrs();

  const bindAttrs = computed(() => {
    const { icon, size, color } = props;
    const { class: className } = attrs;
    return {
      icon,
      width: size,
      height: size,
      color,
      class: className,
    };
  });
</script>

<template>
  <Icon v-bind="bindAttrs" />
</template>
