<script>
import BaseEditableHolder from '@oda-components/core/baseeditableholder';

export default {
    name: 'BaseInput',
    extends: BaseEditableHolder,
    props: {
        size: {
            type: String,
            default: null
        },
        fluid: {
            type: Boolean,
            default: null
        },
        variant: {
            type: String,
            default: null
        }
    },
    inject: {
        $parentInstance: {
            default: undefined
        },
        $pcFluid: {
            default: undefined
        }
    },
    computed: {
        $variant() {
            return this.variant ?? (this.$OdaComponents.config.inputStyle || this.$OdaComponents.config.inputVariant);
        },
        $fluid() {
            return this.fluid ?? !!this.$pcFluid;
        },
        // @deprecated use $fluid instead
        hasFluid() {
            return this.$fluid;
        }
    }
};
</script>
