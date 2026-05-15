import { style } from '@oda-components/style-tokens/confirmdialog';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: 'p-confirmdialog',
    icon: 'p-confirmdialog-icon',
    message: 'p-confirmdialog-message',
    pcRejectButton: 'p-confirmdialog-reject-button',
    pcAcceptButton: 'p-confirmdialog-accept-button'
};

export default BaseStyle.extend({
    name: 'confirmdialog',
    style,
    classes
});
