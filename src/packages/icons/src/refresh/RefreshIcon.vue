<template>
    <span v-bind="ptiAttrs">
        <Refresh :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import Refresh from '@iconsax-icons/Refresh.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'RefreshIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
