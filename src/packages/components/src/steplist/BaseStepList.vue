<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import StepListStyle from '@app/oda-component/steplist/style';

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
