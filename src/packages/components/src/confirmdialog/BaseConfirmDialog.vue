<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import ConfirmDialogStyle from '@app/oda-component/confirmdialog/style';

export default {
    name: 'BaseConfirmDialog',
    extends: BaseComponent,
    props: {
        group: String,
        breakpoints: {
            type: Object,
            default: null
        },
        draggable: {
            type: Boolean,
            default: true
        }
    },
    style: ConfirmDialogStyle,
    provide() {
        return {
            $pcConfirmDialog: this,
            $parentInstance: this
        };
    }
};
</script>
