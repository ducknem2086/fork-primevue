<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import InputIconStyle from '@app/oda-component/inputicon/style';

export default {
    name: 'BaseInputIcon',
    extends: BaseComponent,
    style: InputIconStyle,
    props: {
        class: null
    },
    provide() {
        return {
            $pcInputIcon: this,
            $parentInstance: this
        };
    }
};
</script>
