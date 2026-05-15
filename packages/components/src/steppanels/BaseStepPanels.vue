<script>
import BaseComponent from '@oda-components/core/basecomponent';
import StepPanelsStyle from 'oda-components/steppanels/style';

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
