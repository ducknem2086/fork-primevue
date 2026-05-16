import ConfirmationEventBus from '@app/oda-component/confirmationeventbus';
import { OdaComponentsConfirmSymbol } from '@app/oda-component/useconfirm';

export default {
    install: (app) => {
        const ConfirmationService = {
            require: (options) => {
                ConfirmationEventBus.emit('confirm', options);
            },
            close: () => {
                ConfirmationEventBus.emit('close');
            }
        };

        app.config.globalProperties.$confirm = ConfirmationService;
        app.provide(OdaComponentsConfirmSymbol, ConfirmationService);
    }
};
