import type { DefineComponent } from '@oda-components/core';
import type { Icon } from '@oda-components/icons/baseicon';

declare class SortAmountUpAltIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SortAmountUpAltIcon: DefineComponent<SortAmountUpAltIcon>;
    }
}

export default SortAmountUpAltIcon;
