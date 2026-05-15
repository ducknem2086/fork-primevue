<script>
import BaseComponent from '@oda-components/core/basecomponent';
import StepListStyle from 'oda-components/steplist/style';

export default {
    name: 'BaseStepList',
    extends: BaseComponent,
    style: StepListStyle,
    provide() {
        return {
            $pcStepList: this,
            $parentInstance: this
        };
    }
};
</script>
