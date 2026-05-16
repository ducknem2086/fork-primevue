<template>
    <span v-bind="ptiAttrs">
        <SearchNormal :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import SearchNormal from '@iconsax-icons/SearchNormal.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'SearchIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
