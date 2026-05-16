import { style } from '@app/oda-component/style-tokens/accordion';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: 'p-accordion p-component'
};

export default BaseStyle.extend({
    name: 'accordion',
    style,
    classes
});
