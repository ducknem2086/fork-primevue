import type { DynamicDialogInstance, DynamicDialogOptions } from 'oda-components/dynamicdialogoptions';

export declare function useDialog(): {
    open: (content: any, options?: DynamicDialogOptions) => DynamicDialogInstance;
};
