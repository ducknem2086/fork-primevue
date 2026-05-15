import type { DefineComponent } from '@oda-components/core';
import type { Icon } from '@oda-components/icons/baseicon';

declare class BarsIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BarsIcon: DefineComponent<BarsIcon>;
    }
}

export default BarsIcon;
