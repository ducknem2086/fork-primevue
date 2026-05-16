<template>
    <span v-bind="ptiAttrs">
        <Filter :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import Filter from '@iconsax-icons/Filter.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'FilterIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
