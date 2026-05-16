<template>
    <span v-bind="ptiAttrs">
        <ArrowLeft2 :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import ArrowLeft2 from '@iconsax-icons/ArrowLeft2.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'AngleLeftIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
