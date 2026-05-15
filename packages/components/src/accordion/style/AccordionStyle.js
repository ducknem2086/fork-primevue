import { style } from '@oda-components/style-tokens/accordion';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: 'p-accordion p-component'
};

export default BaseStyle.extend({
    name: 'accordion',
    style,
    classes
});
