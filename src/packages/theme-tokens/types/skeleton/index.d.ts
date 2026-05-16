/**
 *
 * Skeleton Design Tokens
 *
 * @module skeleton
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace SkeletonTokenSections {
    interface Root {
        /**
         * Border radius of root
         *
         * @designToken skeleton.border.radius
         */
        borderRadius?: string;
        /**
         * Background of root
         *
         * @designToken skeleton.background
         */
        background?: string;
        /**
         * Animation background of root
         *
         * @designToken skeleton.animation.background
         */
        animationBackground?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<SkeletonDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _Skeleton Design Tokens_
 *
 * @group components
 * @module skeleton
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
export interface SkeletonDesignTokens extends DesignTokens<SkeletonDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: SkeletonTokenSections.Root;
}
