import ToastEventBus from '@app/oda-component/toasteventbus';
import { OdaComponentsToastSymbol } from '@app/oda-component/usetoast';

export default {
    install: (app) => {
        const ToastService = {
            add: (message) => {
                ToastEventBus.emit('add', message);
            },
            remove: (message) => {
                ToastEventBus.emit('remove', message);
            },
            removeGroup: (group) => {
                ToastEventBus.emit('remove-group', group);
            },
            removeAllGroups: () => {
                ToastEventBus.emit('remove-all-groups');
            }
        };

        app.config.globalProperties.$toast = ToastService;
        app.provide(OdaComponentsToastSymbol, ToastService);
    }
};
