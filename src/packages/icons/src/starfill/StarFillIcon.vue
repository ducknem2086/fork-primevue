<template>
    <span v-bind="ptiAttrs">
        <Star :size="14" color="currentColor" type="bold" />
    </span>
</template>

<script setup>
import Star from '@iconsax-icons/Star.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'StarFillIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
