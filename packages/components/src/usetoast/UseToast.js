import { inject } from 'vue';

export const OdaComponentsToastSymbol = Symbol();

export function useToast() {
    const OdaComponentsToast = inject(OdaComponentsToastSymbol);

    if (!OdaComponentsToast) {
        throw new Error('No OdaComponents Toast provided!');
    }

    return OdaComponentsToast;
}
