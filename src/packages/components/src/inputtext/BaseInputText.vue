<script>
import BaseInput from '@app/oda-component/core/baseinput';
import InputTextStyle from '@app/oda-component/inputtext/style';

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
