<template>
    <span v-bind="ptiAttrs">
        <ArrowDown :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import ArrowDown from '@iconsax-icons/ArrowDown.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'SortAmountDownIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
