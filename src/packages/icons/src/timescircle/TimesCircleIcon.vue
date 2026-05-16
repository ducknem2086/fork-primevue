<template>
    <span v-bind="ptiAttrs">
        <CloseCircle :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import CloseCircle from '@iconsax-icons/CloseCircle.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'TimesCircleIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
