import { style } from '@oda-components/style-tokens/progressspinner';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: 'p-progressspinner',
    spin: 'p-progressspinner-spin',
    circle: 'p-progressspinner-circle'
};

export default BaseStyle.extend({
    name: 'progressspinner',
    style,
    classes
});
