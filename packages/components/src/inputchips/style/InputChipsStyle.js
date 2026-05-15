import { style } from '@oda-components/style-tokens/inputchips';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-inputchips p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-focus': instance.focused,
            'p-inputwrapper-filled': (props.modelValue && props.modelValue.length) || (instance.inputValue && instance.inputValue.length),
            'p-inputwrapper-focus': instance.focused
        }
    ],
    input: ({ props, instance }) => [
        'p-inputchips-input',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$OdaComponents.config.inputStyle === 'filled' || instance.$OdaComponents.config.inputVariant === 'filled'
        }
    ],
    chipItem: ({ state, index }) => ['p-inputchips-chip-item', { 'p-focus': state.focusedIndex === index }],
    pcChip: 'p-inputchips-chip',
    chipIcon: 'p-inputchips-chip-icon',
    inputItem: 'p-inputchips-input-item'
};

export default BaseStyle.extend({
    name: 'inputchips',
    style,
    classes
});
