<script>
import BaseComponent from '@app/oda-component/core/basecomponent';

export default {
    name: 'Row',
    extends: BaseComponent,
    inject: ['$rows'],
    mounted() {
        this.$rows?.add(this.$);
    },
    unmounted() {
        this.$rows?.delete(this.$);
    },
    render() {
        return null;
    }
};
</script>
