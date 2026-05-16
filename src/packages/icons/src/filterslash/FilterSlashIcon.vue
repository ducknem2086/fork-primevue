<template>
    <span v-bind="ptiAttrs">
        <FilterRemove :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import FilterRemove from '@iconsax-icons/FilterRemove.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'FilterSlashIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
