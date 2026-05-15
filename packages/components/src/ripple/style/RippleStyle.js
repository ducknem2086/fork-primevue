import { style } from '@oda-components/style-tokens/ripple';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: 'p-ink'
};

export default BaseStyle.extend({
    name: 'ripple-directive',
    style,
    classes
});
