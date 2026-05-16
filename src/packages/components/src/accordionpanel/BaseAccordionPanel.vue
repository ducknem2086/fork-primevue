<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import AccordionPanelStyle from '@app/oda-component/accordionpanel/style';

export default {
    name: 'BaseAccordionPanel',
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
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionPanelStyle,
    provide() {
        return {
            $pcAccordionPanel: this,
            $parentInstance: this
        };
    }
};
</script>
