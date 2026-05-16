<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import InputGroupStyle from '@app/oda-component/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $pcInputGroup: this,
            $parentInstance: this
        };
    }
};
</script>
