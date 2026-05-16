<script>
import BaseComponent from '@app/oda-component/core/basecomponent';
import AvatarGroupStyle from '@app/oda-component/avatargroup/style';

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
