<script>
import Select from '@app/oda-component/select';

export default {
    name: 'Dropdown',
    extends: Select,
    mounted() {
        console.warn('Deprecated since v4. Use Select component instead.');
    }
};
</script>
