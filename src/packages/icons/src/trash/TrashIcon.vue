<template>
    <span v-bind="ptiAttrs">
        <Trash :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import Trash from '@iconsax-icons/Trash.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'TrashIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
