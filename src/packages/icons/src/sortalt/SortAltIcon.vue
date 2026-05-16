<template>
    <span v-bind="ptiAttrs">
        <Sort :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import Sort from '@iconsax-icons/Sort.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'SortAltIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
