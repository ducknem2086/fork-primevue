<script>
import BaseComponent from '@oda-components/core/basecomponent';
import InputGroupStyle from 'oda-components/inputgroup/style';

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
