import type { DefineComponent } from '@app/oda-component/core';
import type { Icon } from '@app/oda-component/icons/baseicon';

declare class CheckIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        CheckIcon: DefineComponent<CheckIcon>;
    }
}

export default CheckIcon;
