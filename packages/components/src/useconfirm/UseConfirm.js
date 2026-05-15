import { inject } from 'vue';

export const OdaComponentsConfirmSymbol = Symbol();

export function useConfirm() {
    const OdaComponentsConfirm = inject(OdaComponentsConfirmSymbol);

    if (!OdaComponentsConfirm) {
        throw new Error('No OdaComponents Confirmation provided!');
    }

    return OdaComponentsConfirm;
}
