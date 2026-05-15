<script>
import BaseEditableHolder from '@oda-components/core/baseeditableholder';
import RadioButtonGroupStyle from 'oda-components/radiobuttongroup/style';

export default {
    name: 'BaseRadioButtonGroup',
    extends: BaseEditableHolder,
    style: RadioButtonGroupStyle,
    provide() {
        return {
            $pcRadioButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
