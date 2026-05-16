import { style } from '@app/oda-component/style-tokens/inputotp';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: 'p-inputotp p-component',
    pcInputText: 'p-inputotp-input'
};

export default BaseStyle.extend({
    name: 'inputotp',
    style,
    classes
});
