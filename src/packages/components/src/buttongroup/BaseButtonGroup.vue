<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import ButtonGroupStyle from '@app/oda-component/buttongroup/style';

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
