<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import InputGroupAddonStyle from '@app/oda-component/inputgroupaddon/style';

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
