import ConfirmationEventBus from 'oda-components/confirmationeventbus';
import { OdaComponentsConfirmSymbol } from 'oda-components/useconfirm';

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
