/**
 *
 * PickList Design Tokens
 *
 * @module picklist
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace PickListTokenSections {
    interface Root {
        /**
         * Gap of root
         *
         * @designToken picklist.gap
         */
        gap?: string;
    }

    interface Controls {
        /**
         * Gap of controls
         *
         * @designToken picklist.controls.gap
         */
        gap?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<PickListDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _PickList Design Tokens_
 *
 * @group components
 * @module picklist
 * @see
 * --- ---
 * **Compatible Libraries**
 *
 * [![OdaComponents](https://i.postimg.cc/63f7jVST/oda-components-icon-24.png)](https://oda-components.org/theming/styled)
 * [![OdaComponents](https://i.postimg.cc/cC1vVgyh/oda-components-icon-24.png)](https://oda-components.org/theming/styled)
 * --- ---
 * **Figma UI Kit**
 *
 * [OdaComponents](https://oda-components.org/uikit) | [OdaComponents](https://oda-components.org/uikit)
 *
 */
export interface PickListDesignTokens extends DesignTokens<PickListDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: PickListTokenSections.Root;
    /**
     * Used to pass tokens of the controls section
     */
    controls?: PickListTokenSections.Controls;
}
