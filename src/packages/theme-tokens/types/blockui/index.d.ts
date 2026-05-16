/**
 *
 * BlockUI Design Tokens
 *
 * @module blockui
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace BlockUITokenSections {
    interface Root {
        /**
         * Border radius of root
         *
         * @designToken blockui.border.radius
         */
        borderRadius?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<BlockUIDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _BlockUI Design Tokens_
 *
 * @group components
 * @module blockui
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
export interface BlockUIDesignTokens extends DesignTokens<BlockUIDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: BlockUITokenSections.Root;
}
