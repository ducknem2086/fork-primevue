import type { DefineComponent } from '@app/oda-component/core';
import type { Icon } from '@app/oda-component/icons/baseicon';

declare class BarsIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BarsIcon: DefineComponent<BarsIcon>;
    }
}

export default BarsIcon;
