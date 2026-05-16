import { style } from '@app/oda-component/style-tokens/imagecompare';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: 'p-imagecompare',
    slider: 'p-imagecompare-slider'
};

export default BaseStyle.extend({
    name: 'imagecompare',
    style,
    classes
});
