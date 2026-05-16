<script>
import BaseEditableHolder from '@app/oda-component/core/baseeditableholder';
import CheckboxGroupStyle from '@app/oda-component/checkboxgroup/style';

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
