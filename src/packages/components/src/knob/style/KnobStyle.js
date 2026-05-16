import { style } from '@app/oda-component/style-tokens/knob';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-knob p-component',
        {
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid
        }
    ],
    range: 'p-knob-range',
    value: 'p-knob-value',
    text: 'p-knob-text'
};

export default BaseStyle.extend({
    name: 'knob',
    style,
    classes
});
