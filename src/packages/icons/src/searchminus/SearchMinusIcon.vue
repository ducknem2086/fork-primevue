<template>
    <span v-bind="ptiAttrs">
        <SearchZoomOut :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import SearchZoomOut from '@iconsax-icons/SearchZoomOut.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'SearchMinusIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
