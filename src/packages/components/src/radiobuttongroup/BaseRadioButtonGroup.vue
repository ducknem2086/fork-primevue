<script>
import BaseEditableHolder from '@app/oda-component/core/baseeditableholder';
import RadioButtonGroupStyle from '@app/oda-component/radiobuttongroup/style';

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
