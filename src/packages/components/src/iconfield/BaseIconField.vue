<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import IconFieldStyle from '@app/oda-component/iconfield/style';

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
