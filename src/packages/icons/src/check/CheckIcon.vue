<template>
    <span v-bind="ptiAttrs">
        <TickCircle :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import TickCircle from '@iconsax-icons/TickCircle.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'CheckIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
