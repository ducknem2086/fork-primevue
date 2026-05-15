<script>
import BaseEditableHolder from '@oda-components/core/baseeditableholder';
import CheckboxGroupStyle from 'oda-components/checkboxgroup/style';

export default {
    name: 'BaseCheckboxGroup',
    extends: BaseEditableHolder,
    style: CheckboxGroupStyle,
    provide() {
        return {
            $pcCheckboxGroup: this,
            $parentInstance: this
        };
    }
};
</script>
