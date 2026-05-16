<template>
    <span v-bind="ptiAttrs">
        <Warning2 :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import Warning2 from '@iconsax-icons/Warning2.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'ExclamationTriangleIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
