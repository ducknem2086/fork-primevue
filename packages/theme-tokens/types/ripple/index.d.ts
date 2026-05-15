/**
 *
 * Ripple Design Tokens
 *
 * @module ripple
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace RippleTokenSections {
    interface Root {
        /**
         * Background of root
         *
         * @designToken ripple.background
         */
        background?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<RippleDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _Ripple Design Tokens_
 *
 * @group components
 * @module ripple
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
export interface RippleDesignTokens extends DesignTokens<RippleDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: RippleTokenSections.Root;
}
