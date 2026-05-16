import type { ConfirmationOptions } from '@app/oda-component/confirmationoptions';

export declare function useConfirm(): {
    require: (option: ConfirmationOptions) => void;
    close: () => void;
};
