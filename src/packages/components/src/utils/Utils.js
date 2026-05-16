import { $dt } from '@app/oda-component/styled';
import * as utils from '@primeuix/utils';

export * from '@primeuix/utils';

export function blockBodyScroll() {
    utils.blockBodyScroll({ variableName: $dt('scrollbar.width').name });
}

export function unblockBodyScroll() {
    utils.unblockBodyScroll({ variableName: $dt('scrollbar.width').name });
}
