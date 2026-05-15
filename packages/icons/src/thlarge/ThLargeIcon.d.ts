import type { DefineComponent } from '@oda-components/core';
import type { Icon } from '@oda-components/icons/baseicon';

declare class ThLargeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ThLargeIcon: DefineComponent<ThLargeIcon>;
    }
}

export default ThLargeIcon;
