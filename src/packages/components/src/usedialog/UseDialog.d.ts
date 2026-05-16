import type { DynamicDialogInstance, DynamicDialogOptions } from '@app/oda-component/dynamicdialogoptions';

export declare function useDialog(): {
    open: (content: any, options?: DynamicDialogOptions) => DynamicDialogInstance;
};
