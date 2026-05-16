<template>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="ptiAttrs">
        <rect width="1" height="1" fill="currentColor" fill-opacity="0" />
    </svg>
</template>

<script setup>
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'BlankIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
