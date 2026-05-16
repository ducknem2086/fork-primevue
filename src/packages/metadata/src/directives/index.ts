import { MetaType, toMeta } from '../index';

export const directives: MetaType[] = toMeta([
    { name: 'badge', as: 'BadgeDirective', from: 'oda-components/badgedirective' },
    { name: 'tooltip', as: 'Tooltip', from: 'oda-components/tooltip' },
    { name: 'ripple', as: 'Ripple', from: 'oda-components/ripple' },
    { name: 'styleclass', as: 'StyleClass', from: 'oda-components/styleclass' },
    { name: 'focustrap', as: 'FocusTrap', from: 'oda-components/focustrap' },
    { name: 'animateonscroll', as: 'AnimateOnScroll', from: 'oda-components/animateonscroll' },
    { name: 'keyfilter', as: 'KeyFilter', from: 'oda-components/keyfilter' }
]);
