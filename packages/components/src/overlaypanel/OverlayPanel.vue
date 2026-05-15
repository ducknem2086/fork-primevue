<script>
import Popover from 'oda-components/popover';

export default {
    name: 'OverlayPanel',
    extends: Popover,
    mounted() {
        console.warn('Deprecated since v4. Use Popover component instead.');
    }
};
</script>
