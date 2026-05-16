/**
 *
 * Popover Design Tokens
 *
 * @module popover
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace PopoverTokenSections {
    interface Root {
        /**
         * Background of root
         *
         * @designToken popover.background
         */
        background?: string;
        /**
         * Border color of root
         *
         * @designToken popover.border.color
         */
        borderColor?: string;
        /**
         * Color of root
         *
         * @designToken popover.color
         */
        color?: string;
        /**
         * Border radius of root
         *
         * @designToken popover.border.radius
         */
        borderRadius?: string;
        /**
         * Shadow of root
         *
         * @designToken popover.shadow
         */
        shadow?: string;
        /**
         * Gutter of root
         *
         * @designToken popover.gutter
         */
        gutter?: string;
        /**
         * Arrow offset of root
         *
         * @designToken popover.arrow.offset
         */
        arrowOffset?: string;
    }

    interface Content {
        /**
         * Padding of content
         *
         * @designToken popover.content.padding
         */
        padding?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<PopoverDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _Popover Design Tokens_
 *
 * @group components
 * @module popover
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
export interface PopoverDesignTokens extends DesignTokens<PopoverDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: PopoverTokenSections.Root;
    /**
     * Used to pass tokens of the content section
     */
    content?: PopoverTokenSections.Content;
}
