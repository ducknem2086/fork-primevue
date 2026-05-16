<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import TabListStyle from '@app/oda-component/tablist/style';

export default {
    name: 'BaseTabList',
    extends: BaseComponent,
    props: {},
    style: TabListStyle,
    provide() {
        return {
            $pcTabList: this,
            $parentInstance: this
        };
    }
};
</script>
