import { style } from '@oda-components/style-tokens/orderlist';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: 'p-orderlist p-component',
    controls: 'p-orderlist-controls'
};

export default BaseStyle.extend({
    name: 'orderlist',
    style,
    classes
});
