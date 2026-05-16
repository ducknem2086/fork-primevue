import { style } from '@app/oda-component/style-tokens/popover';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: 'p-popover p-component',
    content: 'p-popover-content'
};

export default BaseStyle.extend({
    name: 'popover',
    style,
    classes
});
