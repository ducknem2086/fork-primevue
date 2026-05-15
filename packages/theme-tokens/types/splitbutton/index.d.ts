/**
 *
 * SplitButton Design Tokens
 *
 * @module splitbutton
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace SplitButtonTokenSections {
    interface Root {
        /**
         * Border radius of root
         *
         * @designToken splitbutton.border.radius
         */
        borderRadius?: string;
        /**
         * Rounded border radius of root
         *
         * @designToken splitbutton.rounded.border.radius
         */
        roundedBorderRadius?: string;
        /**
         * Raised shadow of root
         *
         * @designToken splitbutton.raised.shadow
         */
        raisedShadow?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<SplitButtonDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _SplitButton Design Tokens_
 *
 * @group components
 * @module splitbutton
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
export interface SplitButtonDesignTokens extends DesignTokens<SplitButtonDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: SplitButtonTokenSections.Root;
}
