/**
 *
 * Avatar represents people using icons, labels and images.
 *
 * - [Live Demo](https://OdaComponents.org/avatar)
 *
 * @module avatarstyle
 *
 */
import type { BaseStyle } from '@oda-components/core/base/style';

export enum AvatarClasses {
    /**
     * Class name of the root element
     */
    root = 'p-avatar',
    /**
     * Class name of the label element
     */
    label = 'p-avatar-label',
    /**
     * Class name of the icon element
     */
    icon = 'p-avatar-icon'
}

export interface AvatarStyle extends BaseStyle {}
