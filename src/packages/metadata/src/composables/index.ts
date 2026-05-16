import { MetaType, toMeta } from '../index';

export const composables: MetaType[] = toMeta([
    { name: 'useOdaComponents', as: 'useOdaComponents', from: 'oda-components/config' },
    { name: 'useStyle', as: 'useStyle', from: 'oda-components/usestyle' },
    { name: 'useConfirm', as: 'useConfirm', from: 'oda-components/useconfirm' },
    { name: 'useToast', as: 'useToast', from: 'oda-components/usetoast' },
    { name: 'useDialog', as: 'useDialog', from: 'oda-components/usedialog' }
]);
