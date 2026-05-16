<template>
    <span v-bind="ptiAttrs">
        <Edit :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import Edit from '@iconsax-icons/Edit.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'PencilIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
