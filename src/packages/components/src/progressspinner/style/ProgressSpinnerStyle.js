import { style } from '@app/oda-component/style-tokens/progressspinner';
import BaseStyle from '@app/oda-component/core/base/style';

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
