<template>
    <div role="alert" aria-live="assertive" aria-atomic="true" :class="cx('root')" v-bind="ptmi('root')">
        <slot name="icon">
            <component :is="icon ? 'span' : iconComponent" :class="cx('icon')" v-bind="ptm('icon')"></component>
        </slot>
        <div v-if="$slots.default" :class="cx('text')" v-bind="ptm('text')">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import CheckIcon from '@app/oda-component/icons/check';
import ExclamationTriangleIcon from '@app/oda-component/icons/exclamationtriangle';
import InfoCircleIcon from '@app/oda-component/icons/infocircle';
import TimesCircleIcon from '@app/oda-component/icons/timescircle';
import BaseInlineMessage from './BaseInlineMessage.vue';

export default {
    name: 'InlineMessage',
    extends: BaseInlineMessage,
    inheritAttrs: false,
    timeout: null,
    data() {
        return {
            visible: true
        };
    },
    mounted() {
        if (!this.sticky) {
            setTimeout(() => {
                this.visible = false;
            }, this.life);
        }
    },
    computed: {
        iconComponent() {
            return {
                info: InfoCircleIcon,
                success: CheckIcon,
                warn: ExclamationTriangleIcon,
                error: TimesCircleIcon
            }[this.severity];
        }
    }
};
</script>
