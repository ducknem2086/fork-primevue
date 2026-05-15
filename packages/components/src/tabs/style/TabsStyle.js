import { style } from '@oda-components/style-tokens/tabs';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-tabs p-component',
        {
            'p-tabs-scrollable': props.scrollable
        }
    ]
};

export default BaseStyle.extend({
    name: 'tabs',
    style,
    classes
});
