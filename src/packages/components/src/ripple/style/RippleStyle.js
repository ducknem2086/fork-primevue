import { style } from '@app/oda-component/style-tokens/ripple';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: 'p-ink'
};

export default BaseStyle.extend({
    name: 'ripple-directive',
    style,
    classes
});
