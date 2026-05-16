<template>
    <span v-bind="ptiAttrs">
        <Maximize4 :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import Maximize4 from '@iconsax-icons/Maximize4.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'WindowMaximizeIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
