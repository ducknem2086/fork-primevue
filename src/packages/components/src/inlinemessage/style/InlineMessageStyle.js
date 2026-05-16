import { style } from '@app/oda-component/style-tokens/inlinemessage';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: ({ props, instance }) => ['p-inlinemessage p-component p-inlinemessage-' + props.severity, { 'p-inlinemessage-icon-only': !instance.$slots.default }],
    icon: ({ props }) => ['p-inlinemessage-icon', props.icon],
    text: 'p-inlinemessage-text'
};

export default BaseStyle.extend({
    name: 'inlinemessage',
    style,
    classes
});
