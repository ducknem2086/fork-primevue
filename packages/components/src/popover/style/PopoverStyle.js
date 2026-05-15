import { style } from '@oda-components/style-tokens/popover';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: 'p-popover p-component',
    content: 'p-popover-content'
};

export default BaseStyle.extend({
    name: 'popover',
    style,
    classes
});
