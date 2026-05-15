<script>
import BaseComponent from '@oda-components/core/basecomponent';
import CardStyle from 'oda-components/card/style';

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
