/**
 *
 * IconField Design Tokens
 *
 * @module iconfield
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace IconFieldTokenSections {
    interface Icon {
        /**
         * Color of icon
         *
         * @designToken iconfield.icon.color
         */
        color?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<IconFieldDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _IconField Design Tokens_
 *
 * @group components
 * @module iconfield
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
export interface IconFieldDesignTokens extends DesignTokens<IconFieldDesignTokens> {
    /**
     * Used to pass tokens of the icon section
     */
    icon?: IconFieldTokenSections.Icon;
}
