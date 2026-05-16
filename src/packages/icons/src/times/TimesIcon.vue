<template>
    <span v-bind="ptiAttrs">
        <CloseSquare :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import CloseSquare from '@iconsax-icons/CloseSquare.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'TimesIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
