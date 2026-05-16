<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import TabStyle from '@app/oda-component/tab/style';

export default {
    name: 'BaseTab',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        as: {
            type: [String, Object],
            default: 'BUTTON'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: TabStyle,
    provide() {
        return {
            $pcTab: this,
            $parentInstance: this
        };
    }
};
</script>
