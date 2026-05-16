<template>
    <span v-bind="ptiAttrs">
        <Minus :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import Minus from '@iconsax-icons/Minus.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'MinusIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
