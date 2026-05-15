<script>
import BaseComponent from '@oda-components/core/basecomponent';
import StepperStyle from 'oda-components/stepper/style';

export default {
    name: 'BaseStepper',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        linear: {
            type: Boolean,
            default: false
        }
    },
    style: StepperStyle,
    provide() {
        return {
            $pcStepper: this,
            $parentInstance: this,
            $pcStepItem: null
        };
    }
};
</script>
