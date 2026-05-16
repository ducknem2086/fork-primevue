import { style } from '@app/oda-component/style-tokens/orderlist';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: 'p-orderlist p-component',
    controls: 'p-orderlist-controls'
};

export default BaseStyle.extend({
    name: 'orderlist',
    style,
    classes
});
