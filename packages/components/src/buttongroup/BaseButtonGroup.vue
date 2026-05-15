<script>
import BaseComponent from '@oda-components/core/basecomponent';
import ButtonGroupStyle from 'oda-components/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $pcButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
