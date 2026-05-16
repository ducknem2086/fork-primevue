<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import CardStyle from '@app/oda-component/card/style';

export default {
    name: 'BaseCard',
    extends: BaseComponent,
    style: CardStyle,
    provide() {
        return {
            $pcCard: this,
            $parentInstance: this
        };
    }
};
</script>
