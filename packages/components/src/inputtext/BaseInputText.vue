<script>
import BaseInput from '@oda-components/core/baseinput';
import InputTextStyle from 'oda-components/inputtext/style';

export default {
    name: 'BaseInputText',
    extends: BaseInput,
    style: InputTextStyle,
    provide() {
        return {
            $pcInputText: this,
            $parentInstance: this
        };
    }
};
</script>
