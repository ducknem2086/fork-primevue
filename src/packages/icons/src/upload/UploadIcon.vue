<template>
    <span v-bind="ptiAttrs">
        <DocumentUpload :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import DocumentUpload from '@iconsax-icons/DocumentUpload.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'UploadIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
