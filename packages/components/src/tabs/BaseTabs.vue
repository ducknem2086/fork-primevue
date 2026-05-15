<script>
import BaseComponent from '@oda-components/core/basecomponent';
import TabsStyle from 'oda-components/tabs/style';

export default {
    name: 'BaseTabs',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        lazy: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        showNavigators: {
            type: Boolean,
            default: true
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        }
    },
    style: TabsStyle,
    provide() {
        return {
            $pcTabs: this,
            $parentInstance: this
        };
    }
};
</script>
