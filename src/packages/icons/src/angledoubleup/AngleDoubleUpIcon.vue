<template>
    <span v-bind="ptiAttrs">
        <ArrowUp2 :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import ArrowUp2 from '@iconsax-icons/ArrowUp2.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'AngleDoubleUpIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
