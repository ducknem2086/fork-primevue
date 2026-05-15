import { style } from '@oda-components/style-tokens/confirmpopup';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: 'p-confirmpopup p-component',
    content: 'p-confirmpopup-content',
    icon: 'p-confirmpopup-icon',
    message: 'p-confirmpopup-message',
    footer: 'p-confirmpopup-footer',
    pcRejectButton: 'p-confirmpopup-reject-button',
    pcAcceptButton: 'p-confirmpopup-accept-button'
};

export default BaseStyle.extend({
    name: 'confirmpopup',
    style,
    classes
});
