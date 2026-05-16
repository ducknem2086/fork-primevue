import { style } from '@app/oda-component/style-tokens/selectbutton';
import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: ({ props, instance }) => [
        'p-selectbutton p-component',
        {
            'p-invalid': instance.$invalid, // @todo: check
            'p-selectbutton-fluid': props.fluid
        }
    ]
};

export default BaseStyle.extend({
    name: 'selectbutton',
    style,
    classes
});
