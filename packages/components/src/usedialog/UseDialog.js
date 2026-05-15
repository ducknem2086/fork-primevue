import { inject } from 'vue';

export const OdaComponentsDialogSymbol = Symbol();

export function useDialog() {
    const OdaComponentsDialog = inject(OdaComponentsDialogSymbol);

    if (!OdaComponentsDialog) {
        throw new Error('No OdaComponents Dialog provided!');
    }

    return OdaComponentsDialog;
}
