<template>
    <span v-bind="ptiAttrs">
        <Calendar :size="14" color="currentColor" type="linear" />
    </span>
</template>

<script setup>
import Calendar from '@iconsax-icons/Calendar.vue';
import { useBaseIcon } from '../composables/useBaseIcon';

defineOptions({ name: 'CalendarIcon' });

const props = defineProps({
    label: { type: String, default: undefined },
    spin: { type: Boolean, default: false }
});

const { ptiAttrs } = useBaseIcon(props);
</script>
