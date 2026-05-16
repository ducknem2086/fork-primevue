<template>
    <span v-bind="ptiAttrs">
        <HambergerMenu :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import HambergerMenu from '@iconsax-icons/HambergerMenu.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'BarsIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
