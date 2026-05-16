<template>
    <span v-bind="ptiAttrs">
        <SearchZoomIn :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import SearchZoomIn from '@iconsax-icons/SearchZoomIn.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'SearchPlusIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
