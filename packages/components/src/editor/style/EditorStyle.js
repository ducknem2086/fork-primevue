import { style } from '@oda-components/style-tokens/editor';
import BaseStyle from '@oda-components/core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-editor',
        {
            'p-invalid': instance.$invalid
        }
    ],
    toolbar: 'p-editor-toolbar',
    content: 'p-editor-content'
};

export default BaseStyle.extend({
    name: 'editor',
    style,
    classes
});
