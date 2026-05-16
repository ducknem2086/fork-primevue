<template>
    <span v-bind="ptiAttrs">
        <ArrowUp :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import ArrowUp from '@iconsax-icons/ArrowUp.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'SortAmountUpAltIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
