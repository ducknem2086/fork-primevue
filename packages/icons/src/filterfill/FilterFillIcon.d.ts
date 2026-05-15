import type { DefineComponent } from '@oda-components/core';
import type { Icon } from '@oda-components/icons/baseicon';

declare class FilterFillIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        FilterFillIcon: DefineComponent<FilterFillIcon>;
    }
}

export default FilterFillIcon;
