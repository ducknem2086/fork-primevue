<template>
    <span v-bind="ptiAttrs">
        <Forbidden :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import Forbidden from '@iconsax-icons/Forbidden.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'BanIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
