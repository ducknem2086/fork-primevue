<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import FluidStyle from '@app/oda-component/fluid/style';

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
