<template>
    <span v-bind="ptiAttrs">
        <ArrowRotateLeft :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import ArrowRotateLeft from '@iconsax-icons/ArrowRotateLeft.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'UndoIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
