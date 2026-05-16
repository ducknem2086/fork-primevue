<script>
import InputChips from '@app/oda-component/inputchips';

export default {
    name: 'Chips',
    extends: InputChips,
    mounted() {
        console.warn('Deprecated since v4. Use InputChips component instead.');
    }
};
</script>
