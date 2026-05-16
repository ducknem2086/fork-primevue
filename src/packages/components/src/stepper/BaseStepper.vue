<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import StepperStyle from '@app/oda-component/stepper/style';

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
