<script>
import BaseComponent from '@oda-components/core/basecomponent';
import TagStyle from 'oda-components/tag/style';

export default {
    name: 'BaseTag',
    extends: BaseComponent,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    style: TagStyle,
    provide() {
        return {
            $pcTag: this,
            $parentInstance: this
        };
    }
};
</script>
