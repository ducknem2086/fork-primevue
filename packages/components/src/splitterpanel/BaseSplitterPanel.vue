<script>
import BaseComponent from '@oda-components/core/basecomponent';
import SplitterPanelStyle from 'oda-components/splitterpanel/style';

export default {
    name: 'BaseSplitterPanel',
    extends: BaseComponent,
    props: {
        size: {
            type: Number,
            default: null
        },
        minSize: {
            type: Number,
            default: null
        }
    },
    style: SplitterPanelStyle,
    provide() {
        return {
            $pcSplitterPanel: this,
            $parentInstance: this
        };
    }
};
</script>
