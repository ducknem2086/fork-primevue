/**
 *
 * Splitter is utilized to separate and resize panels.
 *
 * [Live Demo](https://www.OdaComponents.org/splitter/)
 *
 * @module splitterstyle
 *
 */
import type { BaseStyle } from '@app/oda-component/core/base/style';

export enum SplitterClasses {
    /**
     * Class name of the root element
     */
    root = 'p-splitter',
    /**
     * Class name of the gutter element
     */
    gutter = 'p-splitter-gutter',
    /**
     * Class name of the gutter handle element
     */
    gutterHandle = 'p-splitter-gutter-handle'
}

export interface SplitterStyle extends BaseStyle {}
