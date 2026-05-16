import { style } from '@app/oda-component/style-tokens/scrolltop';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: ({ props }) => ['p-scrolltop', { 'p-scrolltop-sticky': props.target !== 'window' }],
    icon: 'p-scrolltop-icon'
};

export default BaseStyle.extend({
    name: 'scrolltop',
    style,
    classes
});
