<script>
import BaseComponent from '@oda-components/core/basecomponent';
import TabPanelsStyle from 'oda-components/tabpanels/style';

export default {
    name: 'BaseTabPanels',
    extends: BaseComponent,
    props: {},
    style: TabPanelsStyle,
    provide() {
        return {
            $pcTabPanels: this,
            $parentInstance: this
        };
    }
};
</script>
