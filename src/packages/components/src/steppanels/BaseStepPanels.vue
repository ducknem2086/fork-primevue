<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import StepPanelsStyle from '@app/oda-component/steppanels/style';

export default {
    name: 'BaseStepPanels',
    extends: BaseComponent,
    style: StepPanelsStyle,
    provide() {
        return {
            $pcStepPanels: this,
            $parentInstance: this
        };
    }
};
</script>
