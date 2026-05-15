<script>
import BaseComponent from '@oda-components/core/basecomponent';
import IftaLabelStyle from 'oda-components/iftalabel/style';

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
