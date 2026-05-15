import { $dt } from '@oda-components/styled';
import * as utils from '@oda-components/utils';

export function blockBodyScroll() {
    utils.blockBodyScroll({ variableName: $dt('scrollbar.width').name });
}

export function unblockBodyScroll() {
    utils.unblockBodyScroll({ variableName: $dt('scrollbar.width').name });
}
