import { style } from '@oda-components/style-tokens/tooltip';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: 'p-tooltip p-component',
    arrow: 'p-tooltip-arrow',
    text: 'p-tooltip-text'
};

export default BaseStyle.extend({
    name: 'tooltip-directive',
    style,
    classes
});
