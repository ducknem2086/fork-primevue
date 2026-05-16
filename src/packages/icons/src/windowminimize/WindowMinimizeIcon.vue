<template>
    <span v-bind="ptiAttrs">
        <MinusSquare :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import MinusSquare from '@iconsax-icons/MinusSquare.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'WindowMinimizeIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
