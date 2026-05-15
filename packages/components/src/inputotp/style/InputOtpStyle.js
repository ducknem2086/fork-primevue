import { style } from '@oda-components/style-tokens/inputotp';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: 'p-inputotp p-component',
    pcInputText: 'p-inputotp-input'
};

export default BaseStyle.extend({
    name: 'inputotp',
    style,
    classes
});
