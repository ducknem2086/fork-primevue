import { style } from '@oda-components/style-tokens/stepper';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-stepper p-component',
        {
            'p-readonly': props.linear
        }
    ],
    separator: 'p-stepper-separator'
};

export default BaseStyle.extend({
    name: 'stepper',
    style,
    classes
});
