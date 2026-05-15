/**
 *
 * ProgressSpinner Design Tokens
 *
 * @module progressspinner
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace ProgressSpinnerTokenSections {
    interface Root {
        /**
         * Color one of root
         *
         * @designToken progressspinner.color.one
         */
        colorOne?: string;
        /**
         * Color two of root
         *
         * @designToken progressspinner.color.two
         */
        colorTwo?: string;
        /**
         * Color three of root
         *
         * @designToken progressspinner.color.three
         */
        colorThree?: string;
        /**
         * Color four of root
         *
         * @designToken progressspinner.color.four
         */
        colorFour?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<ProgressSpinnerDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _ProgressSpinner Design Tokens_
 *
 * @group components
 * @module progressspinner
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
export interface ProgressSpinnerDesignTokens extends DesignTokens<ProgressSpinnerDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: ProgressSpinnerTokenSections.Root;
}
