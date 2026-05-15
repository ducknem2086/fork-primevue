<script>
import BaseComponent from '@oda-components/core/basecomponent';
import FluidStyle from 'oda-components/fluid/style';

export default {
    name: 'BaseFluid',
    extends: BaseComponent,
    style: FluidStyle,
    provide() {
        return {
            $pcFluid: this,
            $parentInstance: this
        };
    }
};
</script>
