<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import DynamicDialogStyle from '@app/oda-component/dynamicdialog/style';

export default {
    name: 'BaseDynamicDialog',
    extends: BaseComponent,
    props: {},
    style: DynamicDialogStyle,
    provide() {
        return {
            $pcDynamicDialog: this,
            $parentInstance: this
        };
    }
};
</script>
