<script>
import BaseComponent from '@oda-components/core/basecomponent';
import IconFieldStyle from 'oda-components/iconfield/style';

export default {
    name: 'BaseIconField',
    extends: BaseComponent,
    style: IconFieldStyle,
    provide() {
        return {
            $pcIconField: this,
            $parentInstance: this
        };
    }
};
</script>
