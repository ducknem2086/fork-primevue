<template>
    <span v-bind="ptiAttrs">
        <InfoCircle :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import InfoCircle from '@iconsax-icons/InfoCircle.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'InfoCircleIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
