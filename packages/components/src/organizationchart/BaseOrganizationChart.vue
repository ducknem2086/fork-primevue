<script>
import BaseComponent from '@oda-components/core/basecomponent';
import OrganizationChartStyle from 'oda-components/organizationchart/style';

export default {
    name: 'BaseOrganizationChart',
    extends: BaseComponent,
    props: {
        value: {
            type: null,
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        collapsible: {
            type: Boolean,
            default: false
        },
        collapsedKeys: {
            type: null,
            default: null
        }
    },
    style: OrganizationChartStyle,
    provide() {
        return {
            $pcOrganizationChart: this,
            $parentInstance: this
        };
    }
};
</script>
