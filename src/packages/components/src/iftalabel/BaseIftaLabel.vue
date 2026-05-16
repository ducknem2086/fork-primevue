<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import IftaLabelStyle from '@app/oda-component/iftalabel/style';

export default {
    name: 'BaseIftaLabel',
    extends: BaseComponent,
    style: IftaLabelStyle,
    provide() {
        return {
            $pcIftaLabel: this,
            $parentInstance: this
        };
    }
};
</script>
