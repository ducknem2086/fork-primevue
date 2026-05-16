<template>
    <button v-ripple :class="cx('next')" type="button" v-bind="getPTOptions('next')" data-pc-group-section="pagebutton">
        <component :is="template || 'AngleRightIcon'" :class="cx('nextIcon')" v-bind="getPTOptions('nextIcon')" />
    </button>
</template>

<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import AngleRightIcon from '@app/oda-component/icons/angleright';
import Ripple from '@app/oda-component/ripple';

export default {
    name: 'NextPageLink',
    hostName: 'Paginator',
    extends: BaseComponent,
    props: {
        template: {
            type: Function,
            default: null
        }
    },
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    disabled: this.$attrs.disabled
                }
            });
        }
    },
    components: {
        AngleRightIcon: AngleRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
