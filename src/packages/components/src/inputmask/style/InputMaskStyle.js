import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-inputmask',
        {
            'p-filled': instance.$filled
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputmask',
    classes
});
