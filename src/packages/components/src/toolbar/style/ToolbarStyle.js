import { style } from '@app/oda-component/style-tokens/toolbar';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: 'p-toolbar p-component',
    start: 'p-toolbar-start',
    center: 'p-toolbar-center',
    end: 'p-toolbar-end'
};

export default BaseStyle.extend({
    name: 'toolbar',
    style,
    classes
});
