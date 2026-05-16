<template>
    <span v-bind="ptiAttrs">
        <Add :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import Add from '@iconsax-icons/Add.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'PlusIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
