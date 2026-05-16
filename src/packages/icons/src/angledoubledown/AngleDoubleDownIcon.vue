<template>
    <span v-bind="ptiAttrs">
        <ArrowDown2 :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import ArrowDown2 from '@iconsax-icons/ArrowDown2.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'AngleDoubleDownIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
