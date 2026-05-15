<script>
import BaseComponent from '@oda-components/core/basecomponent';
import InputGroupAddonStyle from 'oda-components/inputgroupaddon/style';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $pcInputGroupAddon: this,
            $parentInstance: this
        };
    }
};
</script>
