<template>
    <span v-bind="ptiAttrs">
        <ArrowRight2 :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import ArrowRight2 from '@iconsax-icons/ArrowRight2.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'AngleDoubleRightIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
