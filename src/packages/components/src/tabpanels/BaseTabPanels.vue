<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import TabPanelsStyle from '@app/oda-component/tabpanels/style';

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
