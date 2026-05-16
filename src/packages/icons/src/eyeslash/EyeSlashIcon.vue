<template>
    <span v-bind="ptiAttrs">
        <EyeSlash :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import EyeSlash from '@iconsax-icons/EyeSlash.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'EyeSlashIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
