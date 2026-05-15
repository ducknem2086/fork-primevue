<script>
import BaseComponent from '@oda-components/core/basecomponent';
import AvatarGroupStyle from 'oda-components/avatargroup/style';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $pcAvatarGroup: this,
            $parentInstance: this
        };
    }
};
</script>
