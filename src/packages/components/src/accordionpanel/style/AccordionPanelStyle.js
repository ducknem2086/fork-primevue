import BaseStyle from '@app/oda-component/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-accordionpanel',
        {
            'p-accordionpanel-active': instance.active,
            'p-disabled': props.disabled
        }
    ]
};

export default BaseStyle.extend({
    name: 'accordionpanel',
    classes
});
