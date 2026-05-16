<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import TimelineStyle from '@app/oda-component/timeline/style';

export default {
    name: 'BaseTimeline',
    extends: BaseComponent,
    props: {
        value: null,
        align: {
            mode: String,
            default: 'left'
        },
        layout: {
            mode: String,
            default: 'vertical'
        },
        dataKey: null
    },
    style: TimelineStyle,
    provide() {
        return {
            $pcTimeline: this,
            $parentInstance: this
        };
    }
};
</script>
