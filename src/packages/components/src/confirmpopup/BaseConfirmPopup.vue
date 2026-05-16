<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import ConfirmPopupStyle from '@app/oda-component/confirmpopup/style';

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String
    },
    style: ConfirmPopupStyle,
    provide() {
        return {
            $pcConfirmPopup: this,
            $parentInstance: this
        };
    }
};
</script>
