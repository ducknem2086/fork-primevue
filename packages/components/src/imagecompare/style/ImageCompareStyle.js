import { style } from '@oda-components/style-tokens/imagecompare';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: 'p-imagecompare',
    slider: 'p-imagecompare-slider'
};

export default BaseStyle.extend({
    name: 'imagecompare',
    style,
    classes
});
