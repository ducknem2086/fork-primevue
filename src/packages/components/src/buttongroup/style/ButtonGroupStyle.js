import { style } from '@app/oda-component/style-tokens/buttongroup';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: 'p-buttongroup p-component'
};

export default BaseStyle.extend({
    name: 'buttongroup',
    style,
    classes
});
